/* ==========================================================================
   Atelier Web — store.js
   Cart · test order · submission · status adapter.
   Phase 1: browser localStorage only (static hosting).
   Phase 2 hooks: replace these functions with Supabase (DB / Storage / Auth)
   and PayApp server verification — see the PHASE2 notes below.
   ========================================================================== */
(function (global) {
  'use strict';

  var CART_KEY = 'cw_cart_v1';
  var ORDER_KEY = 'cw_orders_v1';
  var memory = {};

  function read(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return memory[key] !== undefined ? memory[key] : fallback;
  }
  function write(key, value) {
    memory[key] = value;
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {}
  }

  function esc(s) {
    return String(s === null || s === undefined ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  /* ------------------------------------------------------------ pricing */

  /* Returns a fully itemised line for one product + selected option ids + qty.
     supply = (design + planning + source) x qty ; vat = 10% ; total = supply + vat */
  function computeLine(product, optionIds, qty) {
    var C = global.CATALOG;
    var n = Math.max(1, parseInt(qty, 10) || 1);
    var out = {
      productId: product.id, qty: n, currency: (product.price && product.price.currency) || 'KRW',
      design: 0, planning: 0, source: 0, unitSupply: 0, supply: 0, vat: 0, total: 0,
      lines: [], optionIds: {}, optionLabels: []
    };
    if (!product.options) {
      var base = (product.price && product.price.base) || 0;
      out.design = base; out.unitSupply = base; out.supply = base * n;
      out.vat = Math.round(out.supply * 0.1); out.total = out.supply + out.vat;
      return out;
    }

    var lengthUnit = 10000;
    var lengthPrice = 0;

    product.options.forEach(function (opt) {
      var chosen = (optionIds && optionIds[opt.id]) || opt.def;
      var val = null;
      for (var i = 0; i < opt.values.length; i++) if (opt.values[i].id === chosen) val = opt.values[i];
      if (!val) val = opt.values[0];
      out.optionIds[opt.id] = val.id;
      out.optionLabels.push({ opt: opt, val: val });

      if (opt.id === 'length') {
        lengthUnit = val.unit || 10000;
        lengthPrice = val.price || 0;
        out.design = lengthPrice;
      } else if (val.per10k) {
        var add = Math.round((lengthUnit / 10000) * val.per10k);
        out.planning = add;
        out.lines.push({ opt: opt, val: val, amount: add });
      } else {
        var flat = val.price || 0;
        if (opt.id === 'source') out.source = flat; else out.planning += flat;
        out.lines.push({ opt: opt, val: val, amount: flat });
      }
    });

    out.unitSupply = out.design + out.planning + out.source;
    out.supply = out.unitSupply * n;
    out.vat = Math.round(out.supply * 0.1);
    out.total = out.supply + out.vat;
    return out;
  }

  /* ------------------------------------------------------------ cart */

  function getCart() {
    var c = read(CART_KEY, []);
    return Array.isArray(c) ? c : [];
  }
  function setCart(c) { write(CART_KEY, c); notify(); return c; }

  function addToCart(productId, optionIds, qty) {
    var C = global.CATALOG;
    var p = C.byId(productId);
    if (!p || !p.price || p.price.mode !== 'fixed') return null;
    var cart = getCart();
    var key = productId + '|' + JSON.stringify(optionIds || {});
    var found = null;
    cart.forEach(function (it) { if (it.key === key) found = it; });
    if (found) {
      found.qty = Math.min(99, found.qty + (parseInt(qty, 10) || 1));
    } else {
      cart.push({ key: key, productId: productId, optionIds: optionIds || {}, qty: Math.max(1, parseInt(qty, 10) || 1), addedAt: Date.now() });
    }
    setCart(cart);
    return cart;
  }

  function updateQty(index, qty) {
    var cart = getCart();
    if (!cart[index]) return cart;
    var n = parseInt(qty, 10);
    if (isNaN(n) || n < 1) n = 1;
    cart[index].qty = Math.min(99, n);
    return setCart(cart);
  }
  function removeAt(index) {
    var cart = getCart();
    cart.splice(index, 1);
    return setCart(cart);
  }
  function clearCart() { return setCart([]); }
  function cartCount() {
    return getCart().reduce(function (s, it) { return s + (parseInt(it.qty, 10) || 1); }, 0);
  }

  /* recompute cart against catalog.js — never trust stored amounts */
  function cartLines() {
    var C = global.CATALOG;
    return getCart().map(function (it) {
      var p = C.byId(it.productId);
      if (!p) return null;
      var line = computeLine(p, it.optionIds, it.qty);
      line.product = p;
      line.key = it.key;
      return line;
    }).filter(Boolean);
  }

  function cartTotals() {
    var t = { supply: 0, vat: 0, total: 0, count: 0 };
    cartLines().forEach(function (l) {
      t.supply += l.supply; t.vat += l.vat; t.total += l.total; t.count += l.qty;
    });
    return t;
  }

  /* ------------------------------------------------------------ payment */

  /* Print items are physical goods, so they can only be paid by card online.
     An order made of intangible design services may also be paid by bank transfer. */
  function lineIsPhysical(line) {
    if (!line) return false;
    var p = line.product || (global.CATALOG && global.CATALOG.byId(line.productId));
    return !!(global.CATALOG && global.CATALOG.isPhysical(p));
  }
  function hasPhysical(items) {
    for (var i = 0; i < (items || []).length; i++) if (lineIsPhysical(items[i])) return true;
    return false;
  }
  function cartHasPhysical() { return hasPhysical(cartLines()); }
  function allowedPaymentMethods(items) {
    return hasPhysical(items) ? ['card'] : ['card', 'transfer'];
  }
  function resolvePayment(items, requested) {
    return (requested === 'transfer' && !hasPhysical(items)) ? 'transfer' : 'card';
  }

  /* ------------------------------------------------------------ orders */

  function pad(n, len) { var s = String(n); while (s.length < len) s = '0' + s; return s; }

  function newOrderNo() {
    var orders = getOrders();
    var d = new Date();
    var stamp = d.getFullYear() + pad(d.getMonth() + 1, 2) + pad(d.getDate(), 2);
    for (var attempt = 0; attempt < 40; attempt++) {
      var tail = pad(Math.floor(Math.random() * 9000) + 1000, 4);
      var no = 'AW-' + stamp + '-' + tail;
      var clash = orders.some(function (o) { return o.no === no; });
      if (!clash) return no;
    }
    return 'AW-' + stamp + '-' + pad(Date.now() % 10000, 4);
  }

  function getOrders() {
    var o = read(ORDER_KEY, []);
    return Array.isArray(o) ? o : [];
  }
  function saveOrders(list) { write(ORDER_KEY, list); notify(); return list; }

  function getOrder(no) {
    var found = null;
    getOrders().forEach(function (o) { if (o.no === no) found = o; });
    return found;
  }

  function createOrder(items, customer, payment) {
    var no = newOrderNo();
    var paymentMethod = resolvePayment(items, payment && payment.method);
    var amount = { supply: 0, vat: 0, total: 0 };
    items.forEach(function (it) { amount.supply += it.supply; amount.vat += it.vat; amount.total += it.total; });

    var order = {
      no: no,
      createdAt: new Date().toISOString(),
      customer: {
        name: (customer && customer.name) || '', email: (customer && customer.email) || '',
        phone: (customer && customer.phone) || ''
      },
      items: items.map(function (it) {
        return {
          productId: it.productId, nameKey: it.productId, qty: it.qty,
          optionIds: it.optionIds, optionSnapshot: it.optionLabels.map(function (l) { return { opt: l.opt.id, val: l.val.id }; }),
          unitSupply: it.unitSupply, supply: it.supply, vat: it.vat, total: it.total, currency: it.currency
        };
      }),
      amount: amount,
      currency: items.length ? items[0].currency : 'KRW',
      paymentMethod: paymentMethod,
      /* three statuses are intentionally separate */
      paymentStatus: 'paid_test',
      submissionStatus: 'awaiting_materials',
      workStatus: 'await',
      submission: null,
      revisionRequests: [],
      deliveries: [],
      timeline: [{ at: new Date().toISOString(), type: 'order', status: 'paid' }],
      demo: false
    };
    var orders = getOrders();
    orders.unshift(order);
    saveOrders(orders);
    return order;
  }

  function updateOrder(no, patch) {
    var orders = getOrders();
    for (var i = 0; i < orders.length; i++) {
      if (orders[i].no === no) {
        Object.keys(patch).forEach(function (k) { orders[i][k] = patch[k]; });
        /* keep work status in step with submission */
        saveOrders(orders);
        return orders[i];
      }
    }
    return null;
  }

  function addTimeline(no, type, status, note) {
    var o = getOrder(no);
    if (!o) return null;
    o.timeline = o.timeline || [];
    o.timeline.push({ at: new Date().toISOString(), type: type, status: status || '', note: note || '' });
    return updateOrder(no, { timeline: o.timeline });
  }

  function submitMaterials(no, payload) {
    var o = getOrder(no);
    if (!o) return null;
    var submission = {
      at: new Date().toISOString(),
      fields: payload.fields || {},
      files: payload.files || [],
      consent: !!payload.consent
    };
    o.submission = submission;
    o.submissionStatus = 'submitted';
    o.workStatus = 'review';
    o.timeline = o.timeline || [];
    o.timeline.push({ at: submission.at, type: 'submission', status: 'submitted' });
    return updateOrder(no, { submission: o.submission, submissionStatus: 'submitted', workStatus: 'review', timeline: o.timeline });
  }

  function requestRevision(no, text) {
    var o = getOrder(no);
    if (!o) return null;
    o.revisionRequests = o.revisionRequests || [];
    o.revisionRequests.push({ at: new Date().toISOString(), text: text || '' });
    o.workStatus = 'revise';
    o.timeline = o.timeline || [];
    o.timeline.push({ at: new Date().toISOString(), type: 'revision', status: 'revise', note: text || '' });
    return updateOrder(no, { revisionRequests: o.revisionRequests, workStatus: 'revise', timeline: o.timeline });
  }

  function approveDraft(no) {
    var o = getOrder(no);
    if (!o) return null;
    o.workStatus = 'done';
    o.timeline = o.timeline || [];
    o.timeline.push({ at: new Date().toISOString(), type: 'delivery', status: 'done' });
    return updateOrder(no, { workStatus: 'done', timeline: o.timeline });
  }

  function clearAll() {
    write(ORDER_KEY, []);
    write(CART_KEY, []);
    notify();
  }

  /* ------------------------------------------------------------ demo data */

  function demoOrder() {
    var now = Date.now();
    var d = new Date(now - 1000 * 60 * 60 * 26);
    var stamp = d.getFullYear() + pad(d.getMonth() + 1, 2) + pad(d.getDate(), 2);
    return {
      no: 'AW-' + stamp + '-0000',
      createdAt: new Date(now - 1000 * 60 * 60 * 26).toISOString(),
      customer: { name: 'Atelier Web sample', email: 'atelierweb.seoul@gmail.com', phone: '' },
      items: [{
        productId: 'detail-page', nameKey: 'detail-page', qty: 1,
        optionIds: { length: '10000', plan: 'none', source: 'none' },
        optionSnapshot: [{ opt: 'length', val: '10000' }, { opt: 'plan', val: 'none' }, { opt: 'source', val: 'none' }],
        unitSupply: 100000, supply: 100000, vat: 10000, total: 110000, currency: 'KRW'
      }],
      amount: { supply: 100000, vat: 10000, total: 110000 },
      currency: 'KRW',
      paymentStatus: 'paid_test',
      submissionStatus: 'submitted',
      workStatus: 'build',
      submission: {
        at: new Date(now - 1000 * 60 * 60 * 20).toISOString(),
        fields: { company: 'Sample Brand', manager: 'Sample', phone: '', email: 'atelierweb.seoul@gmail.com', product: 'Detail page', salesLink: '', style: 'Clean, editorial', color: '#292D32 / #D9D3C8', reference: '', feature: 'Single-origin coffee, 200g', extra: 'Please keep the copy short.' },
        files: [{ slot: 'product_img', name: 'sample_product.jpg', size: 1843200, type: 'image/jpeg' }, { slot: 'logo', name: 'sample_logo.png', size: 42100, type: 'image/png' }],
        consent: true
      },
      revisionRequests: [],
      deliveries: [],
      timeline: [{ at: new Date(now - 1000 * 60 * 60 * 26).toISOString(), type: 'order', status: 'paid' }, { at: new Date(now - 1000 * 60 * 60 * 20).toISOString(), type: 'submission', status: 'submitted' }, { at: new Date(now - 1000 * 60 * 60 * 2).toISOString(), type: 'work', status: 'build' }],
      demo: true
    };
  }

  /* ------------------------------------------------------------ listeners */

  var subs = [];
  function notify() { subs.forEach(function (fn) { try { fn(); } catch (e) {} }); }
  function onChange(fn) { subs.push(fn); }

  global.CWStore = {
    CART_KEY: CART_KEY,
    ORDER_KEY: ORDER_KEY,
    esc: esc,
    computeLine: computeLine,
    getCart: getCart,
    addToCart: addToCart,
    updateQty: updateQty,
    removeAt: removeAt,
    clearCart: clearCart,
    cartCount: cartCount,
    cartLines: cartLines,
    cartTotals: cartTotals,
    hasPhysical: hasPhysical,
    cartHasPhysical: cartHasPhysical,
    allowedPaymentMethods: allowedPaymentMethods,
    resolvePayment: resolvePayment,
    getOrders: getOrders,
    getOrder: getOrder,
    createOrder: createOrder,
    updateOrder: updateOrder,
    addTimeline: addTimeline,
    submitMaterials: submitMaterials,
    requestRevision: requestRevision,
    approveDraft: approveDraft,
    clearAll: clearAll,
    demoOrder: demoOrder,
    newOrderNo: newOrderNo,
    onChange: onChange
  };

  /* PHASE 2 — backend swap points
     ------------------------------------------------------------------
     computeLine  → must be recalculated on the server (PayApp amount check).
     createOrder  → POST /orders (Supabase insert, returns id + order no).
     submitMaterials → upload to Supabase Storage bucket "submissions/{orderNo}"
                       and insert a row in "submissions"; never trust client size.
     getOrders    → select where auth.uid() = customer_id (admin sees all via role).
     updateOrder  → RLS-protected update; work status changes recorded in an audit table.
     Admin gate   → replace the demo password with Supabase Auth + role = 'admin'.
  */
})(window);
