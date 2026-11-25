/* ==========================================================================
   Atelier Web — components.js
   Shared header · mobile drawer · footer · modal · product card · status UI
   ========================================================================== */
(function (global) {
  'use strict';

  var I = global.CWI18N;
  var C = global.CATALOG;
  var S = global.CWStore;
  var t = function (k, f) { return I.t(k, f); };
  var tv = function (m) { return I.tv(m); };

  var NAV = [
    { key: 'nav_home', href: 'index.html#top', page: 'home' },
    { key: 'nav_service', href: 'services.html', page: 'services' },
    { key: 'nav_portfolio', href: 'index.html#portfolio', page: 'portfolio' },
    { key: 'nav_process', href: 'index.html#process', page: 'process' },
    { key: 'nav_about', href: 'index.html#about', page: 'about' },
    { key: 'nav_contact', href: 'index.html#contact', page: 'contact' }
  ];

  function langButtons() {
    return I.LANGS.map(function (l) {
      return '<button type="button" data-lang-set="' + l + '">' + I.LABEL[l] + '</button>';
    }).join('');
  }

  function header(active) {
    var nav = NAV.map(function (n) {
      var on = n.page === active ? ' class="is-active"' : '';
      return '<a href="' + n.href + '"' + on + ' data-i18n="' + n.key + '">' + t(n.key) + '</a>';
    }).join('');

    return '' +
      '<header class="cw-header">' +
      '  <div class="cw-header-in">' +
      '    <a class="cw-brand" href="index.html" aria-label="Atelier Web">' +
      '      <span class="cw-brand-mark">AW</span>' +
      '      <span class="cw-brand-txt"><strong>Atelier Web</strong><i data-i18n="brand_sub">' + t('brand_sub') + '</i></span>' +
      '    </a>' +
      '    <nav class="cw-nav" data-i18n-aria="menu_open" aria-label="' + t('menu_open') + '">' + nav + '</nav>' +
      '    <div class="cw-header-tools">' +
      '      <div class="lang-switch" role="group" data-i18n-aria="lang_label" aria-label="' + t('lang_label') + '">' + langButtons() + '</div>' +
      '      <a class="icon-btn" href="mypage.html" data-i18n-aria="nav_mypage" aria-label="' + t('nav_mypage') + '" data-i18n-title="nav_mypage" title="' + t('nav_mypage') + '">' +
      '        <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="3.6"/><path d="M4.5 20c0-3.8 3.4-6.2 7.5-6.2s7.5 2.4 7.5 6.2"/></svg>' +
      '      </a>' +
      '      <a class="icon-btn" href="order.html" data-i18n-aria="nav_cart" aria-label="' + t('nav_cart') + '" data-i18n-title="nav_cart" title="' + t('nav_cart') + '">' +
      '        <svg viewBox="0 0 24 24"><path d="M5 7h14l-1.3 10.2a2 2 0 0 1-2 1.8H8.3a2 2 0 0 1-2-1.8L5 7z"/><path d="M9 7V5.6A3 3 0 0 1 12 3a3 3 0 0 1 3 2.6V7"/></svg>' +
      '        <span class="cart-count" data-cart-count data-empty="true">0</span>' +
      '      </a>' +
      '      <button type="button" class="icon-btn menu-toggle" data-menu-toggle data-i18n-aria="menu_open" aria-label="' + t('menu_open') + '" aria-expanded="false">' +
      '        <svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg>' +
      '      </button>' +
      '    </div>' +
      '  </div>' +
      '</header>' +
      '<div class="cw-drawer" data-drawer>' +
      '  <nav>' +
      NAV.map(function (n, i) {
        return '<a href="' + n.href + '"><span>' + String(i + 1).padStart(2, '0') + '</span><b data-i18n="' + n.key + '">' + t(n.key) + '</b></a>';
      }).join('') +
      '  </nav>' +
      '  <div class="drawer-foot">' +
      '    <div class="lang-switch" style="align-self:flex-start">' + langButtons() + '</div>' +
      '    <a class="btn" href="services.html" data-i18n="cta_products">' + t('cta_products') + '</a>' +
      '    <a class="btn btn-ghost" href="mypage.html" data-i18n="nav_mypage">' + t('nav_mypage') + '</a>' +
      '  </div>' +
      '</div>';
  }

  function footer() {
    var cats = C.categories.map(function (c) {
      return '<li><a href="services.html#cat-' + c.id + '" data-i18n-cat="' + c.id + '">' + tv(c.name) + '</a></li>';
    }).join('');

    return '' +
      '<footer class="cw-footer">' +
      '  <div class="wrap">' +
      '    <div class="foot-top">' +
      '      <div>' +
      '        <div class="foot-brand"><span class="cw-brand-mark">AW</span><strong>Atelier Web</strong></div>' +
      '        <p data-i18n="foot_tagline">' + t('foot_tagline') + '</p>' +
      '      </div>' +
      '      <div>' +
      '        <h4 data-i18n="foot_nav">' + t('foot_nav') + '</h4>' +
      '        <ul>' + NAV.map(function (n) { return '<li><a href="' + n.href + '" data-i18n="' + n.key + '">' + t(n.key) + '</a></li>'; }).join('') + '</ul>' +
      '      </div>' +
      '      <div>' +
      '        <h4 data-i18n="foot_products">' + t('foot_products') + '</h4>' +
      '        <ul>' + cats + '</ul>' +
      '      </div>' +
      '      <div>' +
      '        <h4 data-i18n="foot_account">' + t('foot_account') + '</h4>' +
      '        <ul>' +
      '          <li><a href="order.html" data-i18n="nav_cart">' + t('nav_cart') + '</a></li>' +
      '          <li><a href="mypage.html" data-i18n="nav_mypage">' + t('nav_mypage') + '</a></li>' +
      '          <li><a href="submit.html" data-i18n="sub_kicker">' + t('sub_kicker') + '</a></li>' +
      '          <li><a href="admin.html" data-i18n="nav_admin">' + t('nav_admin') + '</a></li>' +
      '          <li><button type="button" data-legal="privacy" data-i18n="foot_privacy">' + t('foot_privacy') + '</button></li>' +
      '          <li><button type="button" data-legal="terms" data-i18n="foot_terms">' + t('foot_terms') + '</button></li>' +
      '        </ul>' +
      '      </div>' +
      '    </div>' +
      '    <div class="foot-biz">' +
      '      <h4 style="font-family:var(--font-mono);font-size:9px;letter-spacing:.16em;text-transform:uppercase;color:rgba(249,248,246,.42);margin-bottom:14px" data-i18n="biz_h">' + t('biz_h') + '</h4>' +
      '      <dl class="foot-biz-list">' +
      '        <div><dt data-i18n="biz_company_l">' + t('biz_company_l') + '</dt><dd data-i18n="biz_company_v">' + t('biz_company_v') + '</dd></div>' +
      '        <div><dt data-i18n="biz_ceo_l">' + t('biz_ceo_l') + '</dt><dd data-i18n="biz_ceo_v">' + t('biz_ceo_v') + '</dd></div>' +
      '        <div><dt data-i18n="biz_reg_l">' + t('biz_reg_l') + '</dt><dd>321-10-03198</dd></div>' +
      '        <div><dt data-i18n="biz_privacy_l">' + t('biz_privacy_l') + '</dt><dd data-i18n="biz_ceo_v">' + t('biz_ceo_v') + '</dd></div>' +
      '        <div><dt data-i18n="biz_addr_l">' + t('biz_addr_l') + '</dt><dd data-i18n="biz_addr_v">경상북도 구미시 고아읍 평성로9길 7-12(원호자이더포레)</dd></div>' +
      '        <div><dt data-i18n="biz_tel_l">' + t('biz_tel_l') + '</dt><dd><a href="tel:010-4369-5455">010-4369-5455</a></dd></div>' +
      '        <div><dt data-i18n="biz_email_l">' + t('biz_email_l') + '</dt><dd><a href="mailto:atelierweb.seoul@gmail.com">atelierweb.seoul@gmail.com</a></dd></div>' +
      '        <div><dt data-i18n="biz_mailorder_l">' + t('biz_mailorder_l') + '</dt><dd data-i18n="biz_mailorder_v">' + t('biz_mailorder_v') + '</dd></div>' +
      '      </dl>' +
      '      <p class="foot-refund" data-i18n="foot_refund">' + t('foot_refund') + '</p>' +
      '    </div>' +
      '    <div class="foot-bottom">' +
      '      <span data-i18n="foot_rights">' + t('foot_rights') + '</span>' +
      '      <span data-i18n="foot_lang">' + t('foot_lang') + '</span>' +
      '    </div>' +
      '  </div>' +
      '</footer>';
  }

  /* ------------------------------------------------------------ toast */
  function toast(msg) {
    var el = document.querySelector('.cw-toast');
    if (!el) {
      el = document.createElement('div');
      el.className = 'cw-toast';
      el.innerHTML = '<span class="dot"></span><span data-toast-msg></span>';
      document.body.appendChild(el);
    }
    el.querySelector('[data-toast-msg]').textContent = msg;
    el.classList.add('is-on');
    clearTimeout(el._t);
    el._t = setTimeout(function () { el.classList.remove('is-on'); }, 2600);
  }

  /* ------------------------------------------------------------ modal */
  function openModal(html, narrow) {
    closeModal();
    var wrap = document.createElement('div');
    wrap.className = 'cw-modal';
    wrap.setAttribute('data-modal', '');
    wrap.innerHTML = '<div class="cw-modal-card' + (narrow ? ' is-narrow' : '') + '" role="dialog" aria-modal="true">' +
      '<button type="button" class="cw-modal-close" data-modal-close aria-label="' + t('close') + '">✕</button>' + html + '</div>';
    document.body.appendChild(wrap);
    document.body.style.overflow = 'hidden';
    wrap.addEventListener('click', function (e) {
      if (e.target === wrap || e.target.closest('[data-modal-close]')) closeModal();
    });
    document.addEventListener('keydown', escClose);
    return wrap;
  }
  function escClose(e) { if (e.key === 'Escape') closeModal(); }
  function closeModal() {
    var m = document.querySelector('[data-modal]');
    if (m) m.remove();
    document.body.style.overflow = '';
    document.removeEventListener('keydown', escClose);
  }

  function legalModal(kind) {
    var title = kind === 'terms' ? t('legal_terms_title') : t('legal_privacy_title');
    var body = kind === 'terms' ? t('legal_terms_body') : t('legal_privacy_body');
    openModal(
      '<div class="legal-body"><div class="eyebrow">Atelier Web</div><h3 style="font-family:var(--font-display);font-size:24px;font-weight:600;letter-spacing:-.03em;margin-bottom:14px">' + title + '</h3>' +
      '<div data-legal-body>' + body + '</div></div>', true);
  }

  /* ------------------------------------------------------------ price */
  function priceText(p) {
    if (!p.price) return '';
    if (p.price.mode === 'fixed') {
      return I.fromMoney(p.price.fromInclVat !== undefined ? p.price.fromInclVat : p.price.base, p.price.currency);
    }
    if (p.price.amountFrom) return I.fromMoney(p.price.amountFrom, p.price.currency);
    return t('price_quote');
  }
  function priceNote(p) {
    if (!p.price) return '';
    if (p.price.mode === 'fixed') return t('price_vat');
    if (p.price.amountFrom) return t('badge_quote');
    return '';
  }

  /* ------------------------------------------------------------ product card */
  function productCard(p) {
    var cat = C.cat(p.cat);
    var buy = p.price.mode === 'fixed';
    return '' +
      '<a class="prod-card" href="product.html?id=' + p.id + '">' +
      '  <div class="prod-thumb">' +
      '    <div class="th-fill ' + (p.tone || 'th-a') + '"></div>' +
      '    <span class="th-label">' + cat.code + '</span>' +
      '    <span class="th-no">' + String(p.order).padStart(2, '0') + '</span>' +
      '    <span class="th-word">' + p.word + '</span>' +
      '  </div>' +
      '  <div class="prod-body">' +
      '    <span class="prod-cat">' + tv(cat.name) + '</span>' +
      '    <h3 class="prod-name">' + tv(p.name) + '</h3>' +
      '    <p class="prod-desc">' + tv(p.desc) + '</p>' +
      '  </div>' +
      '  <div class="prod-foot">' +
      '    <span class="prod-price' + (buy ? '' : ' is-quote') + '"><b>' + priceText(p) + '</b><span>' + priceNote(p) + '</span></span>' +
      '    <span class="prod-more">' + t('prod_view') + ' <span aria-hidden="true">↗</span></span>' +
      '  </div>' +
      '</a>';
  }

  /* ------------------------------------------------------------ status UI */
  function workLabel(id) {
    for (var i = 0; i < C.workStatuses.length; i++) if (C.workStatuses[i].id === id) return I.tv(C.workStatuses[i].def);
    return id || '';
  }
  function payLabel(id) {
    for (var i = 0; i < C.paymentStatuses.length; i++) if (C.paymentStatuses[i].id === id) return I.tv(C.paymentStatuses[i].def);
    return id || '';
  }
  function subLabel(id) {
    for (var i = 0; i < C.submissionStatuses.length; i++) if (C.submissionStatuses[i].id === id) return I.tv(C.submissionStatuses[i].def);
    return id || '';
  }

  function steps7(current) {
    var idx = 0;
    for (var i = 0; i < C.workStatuses.length; i++) if (C.workStatuses[i].id === current) idx = i;
    return '<div class="steps7">' + C.workStatuses.map(function (s, i) {
      var cls = i < idx ? 'done' : (i === idx ? 'now' : '');
      return '<div class="' + cls + '">' + I.tv(s.def) + '</div>';
    }).join('') + '</div>';
  }

  function optionLabel(product, optId, valId) {
    if (!product.options) return '';
    for (var i = 0; i < product.options.length; i++) {
      var o = product.options[i];
      if (o.id !== optId) continue;
      for (var j = 0; j < o.values.length; j++) if (o.values[j].id === valId) return tv(o.values[j].label);
    }
    return valId;
  }

  /* ------------------------------------------------------------ init */
  function init(opts) {
    opts = opts || {};
    I.init();
    var headerSlot = document.querySelector('[data-cw-header]');
    if (headerSlot) headerSlot.innerHTML = header(opts.active || '');
    var footSlot = document.querySelector('[data-cw-footer]');
    if (footSlot) footSlot.innerHTML = footer();

    var toggle = document.querySelector('[data-menu-toggle]');
    var drawer = document.querySelector('[data-drawer]');
    if (toggle && drawer) {
      toggle.addEventListener('click', function () {
        var open = drawer.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        document.body.style.overflow = open ? 'hidden' : '';
      });
      drawer.addEventListener('click', function (e) {
        if (e.target.closest('a')) { drawer.classList.remove('is-open'); document.body.style.overflow = ''; }
      });
    }

    document.addEventListener('click', function (e) {
      var legal = e.target.closest ? e.target.closest('[data-legal]') : null;
      if (legal) { e.preventDefault(); legalModal(legal.getAttribute('data-legal')); }
    });

    refreshCart();
    S.onChange(refreshCart);
    I.onChange(refreshCart);

    I.apply();
  }

  function refreshCart() {
    var n = S.cartCount();
    var els = document.querySelectorAll('[data-cart-count]');
    for (var i = 0; i < els.length; i++) {
      els[i].textContent = n;
      els[i].setAttribute('data-empty', n ? 'false' : 'true');
    }
  }

  global.CWComponents = {
    header: header,
    footer: footer,
    init: init,
    toast: toast,
    openModal: openModal,
    closeModal: closeModal,
    legalModal: legalModal,
    productCard: productCard,
    priceText: priceText,
    priceTextRaw: priceText,
    priceNote: priceNote,
    workLabel: workLabel,
    payLabel: payLabel,
    subLabel: subLabel,
    steps7: steps7,
    optionLabel: optionLabel,
    refreshCart: refreshCart
  };
})(window);
