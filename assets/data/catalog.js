/* ==========================================================================
   CAMPUSWAY DESIGN — catalog.js
   Single source of truth for categories, products, options and portfolio.
   Add a product here; every page (home / list / detail / order / admin) reuses it.
   ========================================================================== */
(function (global) {
  'use strict';

  var L = function (en, ko, ja, zh, es, vi) { return { en: en, ko: ko, ja: ja, zh: zh, es: es, vi: vi }; };

  /* ---------------------------------------------------------------- categories */
  var categories = [
    {
      id: 'detail', code: 'DTL', order: 1, tone: 'th-b',
      name: L('Detail Page Design', '상세페이지 디자인', '詳細ページデザイン', '详情页设计', 'Diseño de página de producto', 'Thiết kế trang chi tiết'),
      short: L('Product detail pages that sell', '판매로 이어지는 상품 상세페이지', '売れる商品詳細ページ', '能带来销售的详情页', 'Páginas que venden', 'Trang chi tiết bán hàng'),
      desc: L('Conversion-focused detail pages for smart stores and brand shops — layout, typography and copy rhythm planned around the product photo.',
        '스마트스토어·브랜드몰용 상품 상세페이지입니다. 상품 사진을 중심으로 레이아웃·타이포·카피 리듬을 설계해 구매 전환을 높입니다.',
        'スマートストアやブランドショップ向けの商品詳細ページ。商品写真を軸にレイアウト・タイポグラフィ・コピーのリズムを設計し、購入率を高めます。',
        '面向智能商店与品牌店铺的商品详情页。以商品照片为中心设计版式、字体与文案节奏，提升购买转化。',
        'Páginas de producto para tiendas online: maquetación, tipografía y ritmo de texto diseñados alrededor de la foto del producto.',
        'Trang chi tiết sản phẩm cho smart store và brand shop: bố cục, kiểu chữ và nhịp nội dung xoay quanh ảnh sản phẩm.'),
      deliverables: [
        L('Custom layout plan for the product', '상품별 맞춤 레이아웃 설계', '商品ごとのレイアウト設計', '按商品定制版式', 'Plan de maquetación a medida', 'Thiết kế bố cục riêng'),
        L('Final image files (JPG/PNG)', '최종 이미지 파일(JPG/PNG)', '最終画像ファイル（JPG/PNG）', '最终图片文件（JPG/PNG）', 'Archivos de imagen finales', 'Tệp ảnh cuối (JPG/PNG)'),
        L('One round of basic revisions', '기본 수정 1회', '基本修正1回', '基础修改1次', 'Una ronda de revisión básica', 'Một lần chỉnh sửa cơ bản'),
        L('Source file as an option', '원본 파일 선택 옵션', '元データはオプション', '源文件可选', 'Archivo editable opcional', 'Tệp nguồn tuỳ chọn')
      ]
    },
    {
      id: 'website', code: 'WEB', order: 2, tone: 'th-a',
      name: L('Website Production', '웹사이트 제작', 'ウェブサイト制作', '网站制作', 'Producción web', 'Thiết kế website'),
      short: L('Hand-coded, six-language sites', '직접 코딩한 6개국어 사이트', '手書きコードの6言語サイト', '手写代码六语网站', 'Sitios en seis idiomas', 'Website 6 ngôn ngữ'),
      desc: L('Hand-written HTML, CSS and plain JavaScript — no template, no plugin. Every build ships with the six-language switch and a mobile-first layout.',
        '직접 작성한 HTML·CSS·순수 JavaScript로 제작합니다. 템플릿도 플러그인도 없습니다. 모든 결과물에 6개국어 전환과 모바일 우선 레이아웃이 포함됩니다.',
        '手書きのHTML・CSS・素のJavaScriptで制作。テンプレートもプラグインも使いません。全案件に6言語切替とモバイル優先レイアウトが付きます。',
        '手写 HTML、CSS 与原生 JavaScript，不使用模板与插件。每个项目都包含六语切换与移动优先版式。',
        'HTML, CSS y JavaScript escritos a mano, sin plantillas ni plugins. Todos incluyen el cambio de seis idiomas y diseño móvil primero.',
        'Viết tay HTML, CSS và JavaScript thuần, không template, không plugin. Mọi dự án đều có chuyển 6 ngôn ngữ và bố cục ưu tiên di động.'),
      deliverables: [
        L('Working site deployed to your host', '실제 호스팅에 배포된 사이트', '実ホストに公開済みのサイト', '部署完成的网站', 'Sitio publicado en tu hosting', 'Website đã triển khai'),
        L('Six-language switch on every page', '모든 페이지 6개국어 전환', '全ページ6言語切替', '全站六语切换', 'Cambio de seis idiomas en cada página', 'Chuyển 6 ngôn ngữ mọi trang'),
        L('Mobile, tablet and desktop layouts', '모바일·태블릿·데스크톱 레이아웃', 'モバイル・タブレット・PC', '手机、平板、桌面版式', 'Diseño móvil, tablet y escritorio', 'Bố cục di động, tablet, desktop'),
        L('Source files and a short editing guide', '소스 파일과 편집 안내서', 'ソースと編集ガイド', '源文件与编辑指南', 'Código fuente y guía breve', 'Mã nguồn và hướng dẫn')
      ]
    },
    {
      id: 'webdesign', code: 'WDS', order: 3, tone: 'th-c',
      name: L('Web Design', '웹디자인', 'ウェブデザイン', '网页设计', 'Diseño web', 'Thiết kế web'),
      short: L('Banners, promo pages, store skins', '배너·프로모션·스토어 디자인', 'バナー・プロモ・ストア', '横幅、活动页、店铺', 'Banners y páginas promo', 'Banner, trang khuyến mãi'),
      desc: L('Banners, event pages and store skins designed to sit inside an existing site or marketplace — delivered as layered or flat image files.',
        '이미 운영 중인 사이트나 마켓플레이스 안에 들어가는 배너·이벤트 페이지·스토어 디자인입니다. 레이어 또는 이미지 파일로 납품합니다.',
        '既存サイトやモール内に組み込むバナー・イベントページ・ストアデザイン。レイヤーまたは画像ファイルで納品します。',
        '用于现有网站或电商平台内部的横幅、活动页与店铺设计，按分层或图片文件交付。',
        'Banners, páginas de evento y diseños de tienda para insertar en un sitio o marketplace existente.',
        'Banner, trang sự kiện và giao diện shop để đưa vào website hoặc sàn có sẵn.'),
      deliverables: [
        L('Design sized to your placement', '게재 위치에 맞춘 사이즈 설계', '掲載位置に合わせたサイズ', '按投放位置设定尺寸', 'Medidas según la ubicación', 'Kích thước theo vị trí'),
        L('Copy and layout adjustment', '문구·레이아웃 조정', 'コピー・レイアウト調整', '文案与版式调整', 'Ajuste de texto y maquetación', 'Chỉnh nội dung và bố cục'),
        L('PNG/JPG plus optional source file', 'PNG/JPG 및 원본 선택', 'PNG/JPG＋元データ選択', 'PNG/JPG 及可选源文件', 'PNG/JPG y archivo fuente opcional', 'PNG/JPG và tệp nguồn tuỳ chọn'),
        L('Revision round agreed per project', '프로젝트별 수정 횟수 협의', '案件ごとに修正回数を協議', '按项目约定修改次数', 'Revisiones acordadas por proyecto', 'Số lần sửa theo dự án')
      ]
    },
    {
      id: 'sns', code: 'SNS', order: 4, tone: 'th-e',
      name: L('SNS Design', 'SNS 디자인', 'SNSデザイン', 'SNS 设计', 'Diseño para redes', 'Thiết kế mạng xã hội'),
      short: L('Feeds, card news, ad creatives', '피드·카드뉴스·광고 소재', 'フィード・カードニュース', '帖文、卡片新闻、广告', 'Feeds, noticias y anuncios', 'Feed, card news, quảng cáo'),
      desc: L('Feed sets, card news and ad creatives built on one visual rule so the account reads as a single brand, not a pile of posts.',
        '피드 세트, 카드뉴스, 광고 소재를 하나의 시각 규칙 위에서 제작합니다. 게시물 더미가 아니라 하나의 브랜드로 읽히게 합니다.',
        'フィードセット、カードニュース、広告クリエイティブを1つの視覚ルールで制作。投稿の寄せ集めではなく、1つのブランドとして見せます。',
        '以统一的视觉规则制作帖文套组、卡片新闻与广告素材，让账号呈现为一个品牌。',
        'Sets de feed, card news y creativos bajo una misma regla visual para que la cuenta se lea como una marca.',
        'Bộ feed, card news và ấn phẩm quảng cáo theo một quy tắc thị giác thống nhất.'),
      deliverables: [
        L('Set-based design, not single posts', '단일 게시물이 아닌 세트 설계', '単発でなくセット設計', '成套设计而非单张', 'Diseño por sets', 'Thiết kế theo bộ'),
        L('Grid and ratio set for each channel', '채널별 규격·비율 설정', 'チャンネル別の規格・比率', '按渠道设定规格', 'Formatos por canal', 'Quy cách theo kênh'),
        L('Image files ready to upload', '바로 업로드 가능한 이미지', 'すぐ投稿できる画像', '可直接上传的图片', 'Archivos listos para subir', 'Ảnh sẵn sàng đăng'),
        L('Revision round agreed per project', '프로젝트별 수정 횟수 협의', '案件ごとに修正回数を協議', '按项目约定修改次数', 'Revisiones acordadas por proyecto', 'Số lần sửa theo dự án')
      ]
    },
    {
      id: 'print', code: 'PRT', order: 5, tone: 'th-f',
      name: L('Print Design', '인쇄 디자인', '印刷デザイン', '印刷设计', 'Diseño impreso', 'Thiết kế ấn phẩm in'),
      short: L('Cards, banners, menus, posters', '명함·배너·메뉴판·포스터', '名刺・バナー・メニュー', '名片、横幅、菜单', 'Tarjetas, lonas, menús', 'Danh thiếp, banner, menu'),
      desc: L('Print-ready artwork with bleed, CMYK and the specifications your printer asks for — files go straight to the press without a fix-up round.',
        '인쇄소가 요구하는 재단 여백·CMYK·규격을 맞춘 인쇄용 원고입니다. 수정 없이 바로 인쇄에 넘길 수 있는 파일로 납품합니다.',
        '印刷所が求める塗り足し・CMYK・規格に合わせた入稿データ。修正なしでそのまま印刷に出せる形で納品します。',
        '按印刷厂要求设置出血、CMYK 与规格的印刷文件，可直接送印，无需二次修补。',
        'Arte listo para imprenta con sangrado, CMYK y las especificaciones del taller.',
        'File in sẵn với bleed, CMYK và quy cách nhà in yêu cầu.'),
      deliverables: [
        L('Print-ready PDF with bleed', '재단 여백 포함 인쇄용 PDF', '塗り足し付き入稿PDF', '含出血的印刷 PDF', 'PDF con sangrado', 'PDF có bleed'),
        L('CMYK colour conversion', 'CMYK 색상 변환', 'CMYK変換', 'CMYK 色彩转换', 'Conversión a CMYK', 'Chuyển màu CMYK'),
        L('Size set to the ordered item', '주문 품목에 맞춘 규격', '注文品に合わせた規格', '按订购品设定尺寸', 'Medidas del artículo', 'Kích thước theo sản phẩm'),
        L('Source file as an option', '원본 파일 선택 옵션', '元データはオプション', '源文件可选', 'Archivo fuente opcional', 'Tệp nguồn tuỳ chọn')
      ]
    },
    {
      id: 'package', code: 'PKG', order: 6, tone: 'th-d',
      name: L('Design Package', '디자인 패키지', 'デザインパッケージ', '设计套餐', 'Paquete de diseño', 'Gói thiết kế'),
      short: L('Brand, launch and monthly sets', '브랜드·오픈·정기 디자인', 'ブランド・開業・定額', '品牌、开店、包月', 'Marca, apertura, mensual', 'Thương hiệu, khai trương, định kỳ'),
      desc: L('Bundle the pieces a launch actually needs — identity, detail pages, feed sets and print — scheduled as one project with one point of contact.',
        '브랜드 아이덴티티, 상세페이지, 피드 세트, 인쇄물까지 오픈에 필요한 작업을 하나의 프로젝트로 묶어 진행합니다. 창구는 하나입니다.',
        'ブランドアイデンティティ、詳細ページ、フィード、印刷物まで、開業に必要な一式を1つの案件として進行。窓口は1つです。',
        '把品牌、详情页、帖文与印刷等开业所需工作整合为一个项目，由一个窗口对接。',
        'Agrupa identidad, páginas de producto, feeds e impresos en un solo proyecto y un solo interlocutor.',
        'Gộp nhận diện, trang chi tiết, feed và ấn phẩm in vào một dự án, một đầu mối.'),
      deliverables: [
        L('Scope agreed as one fixed plan', '하나의 고정 계획으로 범위 합의', '1つの固定プランで範囲合意', '以固定方案约定范围', 'Alcance acordado en un plan', 'Phạm vi theo một gói cố định'),
        L('One schedule across all items', '전 항목 통합 일정', '全項目の統合スケジュール', '统一排期', 'Un solo calendario', 'Một lịch chung'),
        L('One contact for the whole set', '전체 담당 창구 1명', '窓口は1名', '单一对接人', 'Un único contacto', 'Một đầu mối'),
        L('Monthly plan for ongoing needs', '지속 운영은 월 단위 플랜', '継続は月額プラン', '长期需求按月方案', 'Plan mensual disponible', 'Gói theo tháng')
      ]
    }
  ];

  /* ---------------------------------------------------------------- products */
  /* price.mode: fixed = checkout with options · quote = quotation request (no invented price) */
  var products = [
    /* ① 상세페이지 디자인 -------------------------------------------------- */
    {
      id: 'detail-page', cat: 'detail', tone: 'th-b', word: 'DETAIL', featured: true, order: 1,
      price: { mode: 'fixed', currency: 'KRW', base: 100000, fromInclVat: 110000 },
      name: L('Detail Page Production', '상세페이지 제작', '詳細ページ制作', '详情页制作', 'Producción de página de producto', 'Thiết kế trang chi tiết'),
      desc: L('A single product detail page, designed around your photos and delivered as final images. 10,000px standard.',
        '상품 1개 분량의 상세페이지를 제작합니다. 상품 사진 중심으로 설계하고 최종 이미지로 납품합니다. 기본 10,000px.',
        '商品1点分の詳細ページを制作。商品写真を軸に設計し、最終画像で納品します。基本10,000px。',
        '制作一件商品的详情页，以商品图为中心设计，交付最终图片。默认 10,000px。',
        'Una página de producto diseñada sobre tus fotos, entregada como imágenes finales. 10.000px estándar.',
        'Một trang chi tiết sản phẩm thiết kế theo ảnh của bạn, giao dưới dạng ảnh cuối. Chuẩn 10.000px.'),
      lead: L('The first product we opened for direct checkout. Choose the page length, whether we plan the content for you, and whether you need the source file — the total updates as you choose.',
        '직접 결제가 가능한 첫 상품입니다. 제작 길이, 기획 포함 여부, 원본 파일 여부를 고르시면 총액이 실시간으로 계산됩니다.',
        '直接購入できる最初の商品です。制作の長さ、企画の有無、元データの有無を選ぶと合計金額がその場で計算されます。',
        '首个支持直接下单的商品。选择页长、是否包含策划、是否需要源文件，总额实时计算。',
        'El primer producto con compra directa. Elige la longitud, si planificamos el contenido y si necesitas el archivo fuente.',
        'Sản phẩm đầu tiên cho phép đặt và thanh toán trực tiếp. Chọn độ dài, có kế hoạch nội dung hay không, và tệp nguồn.'),
      options: [
        {
          id: 'length', required: true, def: '10000',
          label: L('Page length', '제작 길이', '制作の長さ', '制作长度', 'Longitud', 'Độ dài trang'),
          hint: L('Supply price standard', '공급가 기준', '供給価格基準', '按供应价计', 'Sobre precio base', 'Theo giá gốc'),
          values: [
            { id: '10000', unit: 10000, price: 100000, label: L('10,000px', '10,000px', '10,000px', '10,000px', '10.000px', '10.000px'), note: L('Standard page', '기본 분량', '標準分量', '标准长度', 'Página estándar', 'Trang tiêu chuẩn') },
            { id: '20000', unit: 20000, price: 200000, label: L('20,000px', '20,000px', '20,000px', '20,000px', '20.000px', '20.000px'), note: L('Long-form page', '롱폼 분량', 'ロングフォーム', '长图文', 'Formato largo', 'Trang dài') }
          ]
        },
        {
          id: 'plan', required: true, def: 'none',
          label: L('Content planning', '기획 여부', '企画の有無', '是否包含策划', 'Planificación', 'Kế hoạch nội dung'),
          hint: L('+50,000 per 10,000px', '10,000px당 +50,000원', '10,000pxごとに+50,000ウォン', '每 10,000px +50,000韩元', '+50.000 por 10.000px', '+50.000 mỗi 10.000px'),
          values: [
            { id: 'none', price: 0, label: L('Not included', '미포함', 'なし', '不包含', 'No incluida', 'Không gồm'), note: L('You send the copy', '원고·기획안 고객 제공', '原稿はお客様', '客户提供文案', 'Tú envías el texto', 'Bạn gửi nội dung') },
            { id: 'included', per10k: 50000, label: L('Included', '포함', 'あり', '包含', 'Incluida', 'Có gồm'), note: L('Structure + copywriting', '구성·카피라이팅 포함', '構成・コピー込み', '含结构与文案', 'Estructura y textos', 'Cấu trúc và nội dung') }
          ]
        },
        {
          id: 'source', required: true, def: 'none',
          label: L('Source file', '원본 파일', '元データ', '源文件', 'Archivo fuente', 'Tệp nguồn'),
          hint: L('+50,000 per product', '상품 1개당 +50,000원', '商品1点につき+50,000ウォン', '每件 +50,000韩元', '+50.000 por producto', '+50.000 mỗi sản phẩm'),
          values: [
            { id: 'none', price: 0, label: L('Not included', '미포함', 'なし', '不包含', 'No incluido', 'Không gồm'), note: L('Final images only', '최종 이미지로 납품', '最終画像のみ', '仅交付图片', 'Solo imágenes finales', 'Chỉ ảnh cuối') },
            { id: 'included', price: 50000, label: L('Included', '포함', 'あり', '包含', 'Incluido', 'Có gồm'), note: L('Editable layers', '수정 가능한 원본', '編集可能な元データ', '可编辑源文件', 'Capas editables', 'Lớp chỉnh sửa được') }
          ]
        }
      ],
      qty: { min: 1, max: 20, def: 1 },
      vat: 0.1,
      includes: [
        L('Custom detail page design', '맞춤형 상세페이지 디자인', 'オーダーメイドの詳細ページ', '定制详情页设计', 'Diseño personalizado', 'Thiết kế riêng'),
        L('One round of basic revisions', '기본 수정 1회', '基本修正1回', '基础修改1次', 'Una revisión básica', 'Một lần sửa cơ bản'),
        L('Final image files', '최종 이미지 파일 납품', '最終画像ファイル納品', '交付最终图片', 'Imágenes finales', 'Ảnh cuối'),
        L('Source file by option', '원본 파일은 별도 선택', '元データは別途選択', '源文件单独选择', 'Archivo fuente opcional', 'Tệp nguồn tuỳ chọn')
      ],
      revision: L('Basic revision covers text, image and partial layout adjustments inside the confirmed direction — one round. Full re-planning, a new concept or a change of page length is a separate quote.',
        '기본 수정은 확정된 시안 방향 안에서 텍스트·이미지·부분 배치를 조정하는 1회입니다. 전면 재기획, 새로운 콘셉트, 제작 길이 변경은 별도 견적으로 진행합니다.',
        '基本修正は確定した方向性の範囲でテキスト・画像・部分的な配置を調整する1回です。全面的な再企画、新しいコンセプト、長さの変更は別途見積もりとなります。',
        '基础修改指在已确认方向内调整文字、图片与局部版式，共1次。全面重新策划、更换概念或改变长度需另行报价。',
        'La revisión básica cubre texto, imágenes y ajustes parciales dentro de la dirección confirmada, una vez. Replanificar o cambiar la longitud se cotiza aparte.',
        'Chỉnh sửa cơ bản gồm chữ, ảnh và bố cục trong hướng đã chốt, một lần. Làm lại toàn bộ hoặc đổi độ dài tính phí riêng.')
    },
    {
      id: 'detail-renewal', cat: 'detail', tone: 'th-a', word: 'RENEW', order: 2,
      price: { mode: 'quote', currency: 'KRW' },
      name: L('Detail Page Renewal', '상세페이지 리뉴얼', '詳細ページリニューアル', '详情页改版', 'Renovación de página', 'Làm mới trang chi tiết'),
      desc: L('We rebuild an existing page that no longer converts — new structure, same product facts.',
        '전환이 떨어진 기존 상세페이지를 새 구조로 다시 만듭니다. 상품 정보는 그대로 유지합니다.',
        '成果の落ちた既存の詳細ページを新しい構成で作り直します。商品情報はそのまま維持します。',
        '以新结构重做转化不佳的旧详情页，保留商品信息。',
        'Reconstruimos una página existente que ya no convierte, con nueva estructura.',
        'Làm lại trang cũ kém chuyển đổi với cấu trúc mới, giữ nguyên thông tin sản phẩm.'),
      quoteFrom: L('Quoted after reviewing the current page', '현재 페이지를 확인한 뒤 견적 안내', '現行ページを確認して見積もり', '查看现有页面后报价', 'Se cotiza tras revisar la página actual', 'Báo giá sau khi xem trang hiện tại')
    },
    {
      id: 'detail-plan', cat: 'detail', tone: 'th-c', word: 'PLAN', featured: true, order: 3, preset: { plan: 'included' },
      price: { mode: 'fixed', currency: 'KRW', base: 150000, fromInclVat: 165000 },
      name: L('Detail Page with Planning', '기획 포함 상세페이지', '企画込み詳細ページ', '含策划详情页', 'Página con planificación', 'Trang chi tiết có kế hoạch'),
      desc: L('We plan the structure and write the copy, then design the page. 10,000px standard, planning included.',
        '콘텐츠 구성과 카피라이팅까지 저희가 기획하고 디자인합니다. 기본 10,000px, 기획 포함.',
        'コンテンツ構成とコピーライティングまで企画し、デザインします。基本10,000px、企画込み。',
        '由我们负责内容结构与文案策划，再完成设计。默认 10,000px，含策划。',
        'Planificamos la estructura y escribimos los textos, luego diseñamos. 10.000px con planificación.',
        'Chúng tôi lên cấu trúc, viết nội dung rồi thiết kế. Chuẩn 10.000px, gồm kế hoạch.'),
      lead: L('Opens the same calculator with planning already selected — 10,000px with planning is 165,000 KRW including VAT. Change the length and the planning fee scales with it.',
        '기획 포함이 미리 선택된 동일 계산기로 연결됩니다. 10,000px + 기획 포함은 부가세 포함 165,000원입니다. 길이를 바꾸면 기획비도 함께 조정됩니다.',
        '企画込みが選択済みの同じ計算機に移動します。10,000px＋企画込みで税込165,000ウォン。長さを変えると企画費も連動します。',
        '跳转到已选“含策划”的同一计算器。10,000px 含策划含税 165,000韩元，长度变化时策划费同步调整。',
        'Abre la misma calculadora con planificación ya marcada. 10.000px con planificación: 165.000 KRW con IVA.',
        'Mở cùng công cụ tính với mục kế hoạch đã chọn. 10.000px có kế hoạch: 165.000 KRW gồm VAT.')
    },
    {
      id: 'detail-bulk', cat: 'detail', tone: 'th-g', word: 'BULK', order: 4,
      price: { mode: 'quote', currency: 'KRW' },
      name: L('Bulk Detail Pages', '대량 상세페이지 제작', '大量詳細ページ制作', '批量详情页', 'Páginas en volumen', 'Trang chi tiết số lượng lớn'),
      desc: L('Five pages or more on one template system, with a shared component library and staged delivery.',
        '5개 이상의 상세페이지를 하나의 템플릿 시스템으로 제작합니다. 공통 컴포넌트와 단계별 납품으로 진행합니다.',
        '5点以上の詳細ページを1つのテンプレート体系で制作。共通コンポーネントと段階納品で進めます。',
        '5 件以上详情页采用同一模板体系，共享组件并分阶段交付。',
        'Cinco páginas o más sobre un mismo sistema de plantillas, con entregas por etapas.',
        'Từ 5 trang trở lên theo một hệ thống mẫu, thư viện thành phần chung và giao theo đợt.'),
      quoteFrom: L('Quoted per volume and deadline', '수량과 일정에 따라 견적 안내', '数量と納期に応じて見積もり', '按数量与工期报价', 'Se cotiza por volumen y plazo', 'Báo giá theo số lượng và tiến độ')
    },

    /* ② 웹사이트 제작 (기존 상품 유지) -------------------------------------- */
    {
      id: 'web-starter', cat: 'website', tone: 'th-a', word: 'STARTER', order: 5, legacy: true,
      price: { mode: 'quote', currency: 'USD', amountFrom: 390 },
      name: L('Starter · 1-Page', 'Starter · 1페이지', 'Starter・1ページ', 'Starter 单页', 'Starter · 1 página', 'Starter · 1 trang'),
      desc: L('One page, done well. For a new brand, a launch or a single offer.', '한 페이지를 제대로. 새 브랜드, 런칭, 단일 상품 소개에.', '1ページを丁寧に。新ブランド、ローンチ、単一サービスの紹介に。', '把一页做好。适合新品牌、上线或单一服务。', 'Una página bien hecha, para una marca nueva o un lanzamiento.', 'Một trang chỉn chu cho thương hiệu mới hoặc ra mắt.'),
      features: [
        L('1 page, up to 6 sections', '1페이지, 최대 6개 섹션', '1ページ・最大6セクション', '1 页，最多 6 个版块', '1 página, hasta 6 secciones', '1 trang, tối đa 6 phần'),
        L('Six-language switch included', '6개국어 전환 포함', '6言語切替つき', '含六语切换', 'Cambio de seis idiomas', 'Có chuyển 6 ngôn ngữ'),
        L('Mobile + desktop layouts', '모바일·데스크톱 레이아웃', 'モバイル＋PC', '手机与桌面版式', 'Diseño móvil y escritorio', 'Bố cục di động và desktop'),
        L('Contact form (front-end)', '문의 폼(프론트엔드)', 'お問い合わせフォーム（フロント）', '联系表单（前端）', 'Formulario de contacto', 'Form liên hệ (front-end)')
      ]
    },
    {
      id: 'web-business', cat: 'website', tone: 'th-d', word: 'BUSINESS', order: 6, legacy: true,
      price: { mode: 'quote', currency: 'USD', amountFrom: 890 },
      name: L('Business · Multi-Page', 'Business · 멀티 페이지', 'Business・複数ページ', 'Business 多页', 'Business · multipágina', 'Business · nhiều trang'),
      desc: L('For shops, clinics and local service businesses.', '매장, 클리닉, 지역 서비스업에.', '店舗、クリニック、地域サービス業に。', '适合门店、诊所与本地服务业。', 'Para tiendas, clínicas y servicios locales.', 'Cho cửa hàng, phòng khám và dịch vụ địa phương.'),
      features: [
        L('Up to 5 pages', '최대 5페이지', '最大5ページ', '最多 5 页', 'Hasta 5 páginas', 'Tối đa 5 trang'),
        L('Six-language switch included', '6개국어 전환 포함', '6言語切替つき', '含六语切换', 'Cambio de seis idiomas', 'Có chuyển 6 ngôn ngữ'),
        L('Menu, booking or inquiry flows', '메뉴·예약·문의 흐름', 'メニュー・予約・問い合わせ導線', '菜单、预约或咨询流程', 'Flujos de menú, reserva o consulta', 'Luồng menu, đặt chỗ, liên hệ'),
        L('Basic SEO and sitemap', '기본 SEO와 사이트맵', '基本SEOとサイトマップ', '基础 SEO 与站点地图', 'SEO básico y sitemap', 'SEO cơ bản và sitemap')
      ]
    },
    {
      id: 'web-global', cat: 'website', tone: 'th-b', word: 'GLOBAL', order: 7, legacy: true,
      price: { mode: 'quote', currency: 'USD', amountFrom: 1490 },
      name: L('Global Multilingual Pro', 'Global Multilingual Pro', 'Global Multilingual Pro', 'Global Multilingual Pro', 'Global Multilingual Pro', 'Global Multilingual Pro'),
      desc: L('Two days, six markets. For teams selling across borders from day one.', '이틀이면 여섯 시장. 첫날부터 국경을 넘어 판매하는 팀에.', '2日で6市場。初日から国境を越えて販売するチームに。', '两天进入六个市场，适合起步即跨境的团队。', 'Dos días, seis mercados, para equipos que venden fuera desde el inicio.', 'Hai ngày, sáu thị trường cho đội bán xuyên biên giới.'),
      features: [
        L('Up to 10 pages', '최대 10페이지', '最大10ページ', '最多 10 页', 'Hasta 10 páginas', 'Tối đa 10 trang'),
        L('Six languages, reviewed copy', '6개국어, 검수된 카피', '6言語・校閲済みコピー', '六语且文案经审校', 'Seis idiomas con textos revisados', 'Sáu ngôn ngữ, nội dung đã duyệt'),
        L('Locale-aware forms and pricing', '로케일 맞춤 폼·가격', 'ロケール別フォームと価格', '本地化表单与价格', 'Formularios y precios por región', 'Form và giá theo khu vực'),
        L('Deployment and handover session', '배포와 인수 세션', '公開と引き継ぎ', '部署与交接', 'Publicación y traspaso', 'Triển khai và bàn giao')
      ]
    },

    /* ③ 웹디자인 ------------------------------------------------------------ */
    { id: 'web-banner', cat: 'webdesign', tone: 'th-c', word: 'BANNER', order: 8, price: { mode: 'quote', currency: 'KRW' },
      name: L('Web Banner', '웹배너', 'ウェブバナー', '网页横幅', 'Banner web', 'Banner web'),
      desc: L('Small, sharp banner sets for a site header, sidebar or campaign slot.', '사이트 상단·사이드·캠페인 영역에 들어가는 배너 세트입니다.', 'サイト上部・サイド・キャンペーン枠に入るバナーセット。', '用于站点头部、侧栏或活动位的横幅套组。', 'Juegos de banners para cabecera, lateral o campaña.', 'Bộ banner cho đầu trang, cột bên hoặc chiến dịch.') },
    { id: 'web-event', cat: 'webdesign', tone: 'th-a', word: 'EVENT', order: 9, price: { mode: 'quote', currency: 'KRW' },
      name: L('Event Page', '이벤트페이지', 'イベントページ', '活动页', 'Página de evento', 'Trang sự kiện'),
      desc: L('A one-scroll landing page for a sale, opening or seasonal campaign.', '세일·오픈·시즌 캠페인을 위한 원스크롤 랜딩 페이지입니다.', 'セール・開業・季節キャンペーンの1スクロールLP。', '用于促销、开业或季节活动的单页落地页。', 'Landing de un scroll para una oferta o campaña.', 'Landing một cuộn cho khuyến mãi hoặc mở bán.') },
    { id: 'web-promo', cat: 'webdesign', tone: 'th-f', word: 'PROMO', order: 10, price: { mode: 'quote', currency: 'KRW' },
      name: L('Promotion Page', '프로모션 페이지', 'プロモーションページ', '推广页', 'Página promocional', 'Trang khuyến mãi'),
      desc: L('A campaign page with a clear offer, proof and one action.', '혜택·근거·행동 하나가 분명한 캠페인 페이지입니다.', '特典・根拠・行動が明確なキャンペーンページ。', '卖点、信任与行动一目了然的推广页。', 'Página de campaña con oferta, prueba y una acción.', 'Trang chiến dịch với ưu đãi, bằng chứng và một hành động.') },
    { id: 'web-popup', cat: 'webdesign', tone: 'th-h', word: 'POP-UP', order: 11, price: { mode: 'quote', currency: 'KRW' },
      name: L('Pop-up Image', '팝업 이미지', 'ポップアップ画像', '弹窗图片', 'Imagen emergente', 'Ảnh pop-up'),
      desc: L('Popup artwork sized for the platform that shows it.', '노출되는 플랫폼 규격에 맞춘 팝업 이미지입니다.', '表示されるプラットフォームの規格に合わせたポップアップ。', '按展示平台规格制作的弹窗图。', 'Arte emergente al tamaño de la plataforma.', 'Ảnh pop-up đúng quy cách nền tảng.') },
    { id: 'web-smartstore', cat: 'webdesign', tone: 'th-g', word: 'STORE', order: 12, price: { mode: 'quote', currency: 'KRW' },
      name: L('Smart Store Design', '스마트스토어 디자인', 'スマートストアデザイン', '智能商店设计', 'Diseño de Smart Store', 'Thiết kế Smart Store'),
      desc: L('Store skin, category images and thumbnail rules for a marketplace shop.', '마켓플레이스 매장의 스킨·카테고리 이미지·썸네일 규칙을 정리합니다.', 'モール店舗のスキン・カテゴリ画像・サムネイル規則を整えます。', '整理平台店铺皮肤、分类图与缩略图规则。', 'Skin de tienda, imágenes de categoría y reglas de miniaturas.', 'Giao diện shop, ảnh danh mục và quy tắc thumbnail.') },

    /* ④ SNS 디자인 ---------------------------------------------------------- */
    { id: 'sns-feed', cat: 'sns', tone: 'th-e', word: 'FEED', order: 13, price: { mode: 'quote', currency: 'KRW' },
      name: L('Instagram Feed', '인스타그램 피드', 'Instagramフィード', 'Instagram 帖文', 'Feed de Instagram', 'Feed Instagram'),
      desc: L('A grid of feed posts that reads as one brand at a glance.', '한눈에 하나의 브랜드로 읽히는 피드 그리드입니다.', '一目で1つのブランドに見えるフィードグリッド。', '一眼看去像一个品牌的帖文网格。', 'Una cuadrícula de publicaciones que se lee como una marca.', 'Lưới bài đăng đọc như một thương hiệu.') },
    { id: 'sns-cardnews', cat: 'sns', tone: 'th-a', word: 'CARD NEWS', order: 14, price: { mode: 'quote', currency: 'KRW' },
      name: L('Card News', '카드뉴스', 'カードニュース', '卡片新闻', 'Card news', 'Card news'),
      desc: L('A swipeable card sequence for one message, built to the last slide.', '하나의 메시지를 마지막 장까지 설계한 카드뉴스 시퀀스입니다.', '1つのメッセージを最後まで設計したカードニュース。', '围绕一个信息设计到最后一页的卡片序列。', 'Secuencia de tarjetas para un mensaje, diseñada hasta el final.', 'Chuỗi thẻ cho một thông điệp, thiết kế đến thẻ cuối.') },
    { id: 'sns-ad', cat: 'sns', tone: 'th-g', word: 'AD SET', order: 15, price: { mode: 'quote', currency: 'KRW' },
      name: L('SNS Ad Banner', 'SNS 광고 배너', 'SNS広告バナー', 'SNS 广告横幅', 'Banner publicitario', 'Banner quảng cáo'),
      desc: L('Ad creatives in every ratio the channel asks for.', '채널이 요구하는 모든 비율로 광고 소재를 준비합니다.', 'チャンネルが求める全比率で広告クリエイティブを用意。', '按渠道要求的全部比例准备广告素材。', 'Creativos en todas las proporciones que pide el canal.', 'Ấn phẩm đủ mọi tỷ lệ kênh yêu cầu.') },
    { id: 'sns-promo', cat: 'sns', tone: 'th-c', word: 'CONTENT', order: 16, price: { mode: 'quote', currency: 'KRW' },
      name: L('Online Promo Content', '온라인 홍보 콘텐츠', 'オンライン広報コンテンツ', '线上宣传内容', 'Contenido promocional', 'Nội dung quảng bá'),
      desc: L('A set of images and short copy for a launch or a seasonal push.', '런칭·시즌 홍보를 위한 이미지 세트와 짧은 카피입니다.', 'ローンチや季節PR向けの画像セットと短いコピー。', '为上线或季节推广准备的图片套组与短文案。', 'Set de imágenes y textos breves para un lanzamiento.', 'Bộ ảnh và nội dung ngắn cho ra mắt.') },

    /* ⑤ 인쇄 디자인 ---------------------------------------------------------- */
    { id: 'print-card', cat: 'print', tone: 'th-f', word: 'CARD', order: 17, price: { mode: 'quote', currency: 'KRW' },
      name: L('Business Card', '명함', '名刺', '名片', 'Tarjeta de visita', 'Danh thiếp'),
      desc: L('Front and back, print-ready, with the paper and finish noted for the printer.', '앞면·뒷면 인쇄용 원고와 인쇄소 전달용 용지·후가공 메모를 함께 드립니다.', '表裏の入稿データと、用紙・加工の指示メモを添えます。', '正反面印刷文件，并附纸张与工艺说明。', 'Anverso y reverso listos para imprimir, con nota de papel y acabado.', 'Hai mặt sẵn in, kèm ghi chú giấy và gia công.') },
    { id: 'print-xbanner', cat: 'print', tone: 'th-a', word: 'X-BANNER', order: 18, price: { mode: 'quote', currency: 'KRW' },
      name: L('X-Banner', 'X배너', 'Xバナー', 'X 展架', 'X-Banner', 'X-banner'),
      desc: L('Standing banner artwork at the printer’s output size.', '인쇄소 출력 규격에 맞춘 X배너 원고입니다.', '印刷所の出力規格に合わせたXバナー入稿データ。', '按印刷厂输出尺寸制作的 X 展架画面。', 'Arte de banner de pie al tamaño de salida.', 'File X-banner đúng khổ nhà in.') },
    { id: 'print-banner', cat: 'print', tone: 'th-d', word: 'BANNER', order: 19, price: { mode: 'quote', currency: 'KRW' },
      name: L('Large Banner', '현수막', 'のぼり・横断幕', '横幅布幔', 'Lona de gran formato', 'Băng rôn lớn'),
      desc: L('Outdoor banner artwork with distance-readable type.', '멀리서도 읽히는 타이포로 설계한 옥외 현수막 원고입니다.', '遠くから読める文字組みの屋外幕データ。', '远距离可读的户外布幔画面。', 'Arte para exterior con tipografía legible a distancia.', 'File ngoài trời với chữ đọc được từ xa.') },
    { id: 'print-menu', cat: 'print', tone: 'th-c', word: 'MENU', order: 20, price: { mode: 'quote', currency: 'KRW' },
      name: L('Menu Board', '메뉴판', 'メニューボード', '菜单板', 'Carta / menú', 'Bảng menu'),
      desc: L('A menu laid out for the way the shop actually serves.', '매장 운영 방식에 맞춰 정보 위계를 잡은 메뉴판입니다.', '店舗の運用に合わせた情報階層のメニュー。', '按门店实际运营方式编排信息层级的菜单。', 'Carta organizada según cómo sirve realmente el local.', 'Menu sắp xếp theo cách quán vận hành.') },
    { id: 'print-poster', cat: 'print', tone: 'th-g', word: 'POSTER', order: 21, price: { mode: 'quote', currency: 'KRW' },
      name: L('Poster', '포스터', 'ポスター', '海报', 'Póster', 'Poster'),
      desc: L('One strong image and one message, sized for the wall it hangs on.', '하나의 이미지와 하나의 메시지로 정리한 포스터입니다.', '1つの画像と1つのメッセージに絞ったポスター。', '一个画面、一个信息的海报。', 'Una imagen y un mensaje, al tamaño del muro.', 'Một hình ảnh, một thông điệp, đúng khổ treo.') },
    { id: 'print-flyer', cat: 'print', tone: 'th-a', word: 'FLYER', order: 22, price: { mode: 'quote', currency: 'KRW' },
      name: L('Flyer', '전단지', 'チラシ', '传单', 'Folleto', 'Tờ rơi'),
      desc: L('A hand-out sheet with a single offer and a clear next step.', '혜택 하나와 다음 행동이 분명한 배포용 전단입니다.', '特典1つと次の行動が明確な配布用チラシ。', '单一优惠与明确下一步的派发传单。', 'Hoja con una oferta y un paso siguiente claro.', 'Tờ rơi một ưu đãi, một bước tiếp theo rõ ràng.') },
    { id: 'print-leaflet', cat: 'print', tone: 'th-h', word: 'LEAFLET', order: 23, price: { mode: 'quote', currency: 'KRW' },
      name: L('Leaflet', '리플렛', 'リーフレット', '折页', 'Díptico / tríptico', 'Tờ gấp'),
      desc: L('Folded leaflet with a panel-by-panel reading order.', '접히는 면 순서대로 읽히도록 설계한 리플렛입니다.', '折り面ごとの読み順を設計したリーフレット。', '按折页面顺序设计阅读节奏的折页。', 'Díptico con orden de lectura panel a panel.', 'Tờ gấp với thứ tự đọc từng mặt.') },
    { id: 'print-etc', cat: 'print', tone: 'th-f', word: 'PRINT', order: 24, price: { mode: 'quote', currency: 'KRW' },
      name: L('Other Print Items', '기타 인쇄물', 'その他印刷物', '其他印刷品', 'Otros impresos', 'Ấn phẩm in khác'),
      desc: L('Signage, stickers, packaging inserts — tell us the item and the printer.', '사인물, 스티커, 패키지 동봉물 등 품목과 인쇄소를 알려 주세요.', 'サインツール、ステッカー、同梱物など、品目と印刷所をお知らせください。', '标识、贴纸、包装附件等，请告知品项与印刷厂。', 'Señalética, pegatinas, insertos: dinos el artículo y la imprenta.', 'Biển hiệu, sticker, phụ kiện đóng gói: cho chúng tôi biết hạng mục và nhà in.') },

    /* ⑥ 디자인 패키지 -------------------------------------------------------- */
    { id: 'pkg-brand', cat: 'package', tone: 'th-d', word: 'BRAND', order: 25, price: { mode: 'quote', currency: 'KRW' },
      name: L('Brand Promo Package', '브랜드 홍보 패키지', 'ブランドPRパッケージ', '品牌宣传套餐', 'Paquete de marca', 'Gói quảng bá thương hiệu'),
      desc: L('Identity pieces, detail page and SNS set planned as one brand system.', '아이덴티티물·상세페이지·SNS 세트를 하나의 브랜드 시스템으로 기획합니다.', 'アイデンティティ・詳細ページ・SNSを1つのブランド体系として企画。', '把品牌物料、详情页与 SNS 套组作为一套品牌系统策划。', 'Identidad, página de producto y set SNS como un sistema de marca.', 'Nhận diện, trang chi tiết và bộ SNS trong một hệ thống thương hiệu.') },
    { id: 'pkg-shop', cat: 'package', tone: 'th-g', word: 'LAUNCH', order: 26, price: { mode: 'quote', currency: 'KRW' },
      name: L('Shop Launch Package', '쇼핑몰 오픈 패키지', 'ショップ開業パッケージ', '网店开业套餐', 'Paquete de apertura', 'Gói mở shop'),
      desc: L('Store skin, detail pages and launch creatives for an opening date.', '오픈일에 맞춰 스토어 스킨·상세페이지·런칭 소재를 함께 준비합니다.', '開業日に合わせてストアスキン・詳細ページ・ローンチ素材を用意。', '围绕开业日准备店铺皮肤、详情页与上线素材。', 'Skin de tienda, páginas y creativos para la fecha de apertura.', 'Giao diện shop, trang chi tiết và ấn phẩm khai trương.') },
    { id: 'pkg-retainer', cat: 'package', tone: 'th-e', word: 'MONTHLY', order: 27, price: { mode: 'quote', currency: 'KRW' },
      name: L('Monthly Design Service', '정기 디자인 서비스', '定額デザインサービス', '包月设计服务', 'Servicio mensual', 'Dịch vụ thiết kế định kỳ'),
      desc: L('A monthly design slot for brands that publish every week.', '매주 콘텐츠를 내보내는 브랜드를 위한 월 단위 디자인 슬롯입니다.', '毎週発信するブランド向けの月額デザイン枠。', '为每周发布内容的品牌保留的按月设计额度。', 'Cupo de diseño mensual para marcas que publican cada semana.', 'Suất thiết kế hàng tháng cho thương hiệu đăng đều.') }
  ];

  /* ---------------------------------------------------------------- portfolio */
  var folioGroups = [
    { id: 'all', name: L('All', '전체', 'すべて', '全部', 'Todo', 'Tất cả') },
    { id: 'fnb', name: L('F&B', '식음료', '飲食', '餐饮', 'Gastronomía', 'F&B') },
    { id: 'clinic', name: L('Clinic', '클리닉', 'クリニック', '诊所', 'Clínica', 'Phòng khám') },
    { id: 'stay', name: L('Stay & Space', '숙박·공간', '宿泊・空間', '住宿与空间', 'Alojamiento', 'Lưu trú') },
    { id: 'leisure', name: L('Leisure', '레저·체험', 'レジャー', '休闲体验', 'Ocio', 'Trải nghiệm') },
    { id: 'brand', name: L('Brand & B2B', '브랜드·B2B', 'ブランド・B2B', '品牌与 B2B', 'Marca y B2B', 'Thương hiệu & B2B') }
  ];

  var folio = [
    { file: 'cha-cha.html', name: '차차티클럽', group: 'fnb', tone: 'th-a', sub: L('Hanok tea house · Bukchon', '한옥 티하우스 · 북촌', '韓屋ティーハウス・北村', '韩屋茶屋 · 北村', 'Casa de té hanok', 'Trà quán hanok') },
    { file: 'seoul-brewery.html', name: '서울브루어리 성수', group: 'fnb', tone: 'th-b', sub: L('Brewery & culture space', '브루어리 & 컬쳐 스페이스', 'ブリュワリー＆カルチャー', '精酿与文化空间', 'Cervecería y cultura', 'Nhà máy bia & văn hoá') },
    { file: 'sungsimdang.html', name: '성심당', group: 'fnb', tone: 'th-c', sub: L('Bakery · Daejeon', '베이커리 · 대전', 'ベーカリー・大田', '烘焙 · 大田', 'Panadería · Daejeon', 'Tiệm bánh · Daejeon') },
    { file: 'erowl-clinic.html', name: '이로울한의원', group: 'clinic', tone: 'th-f', sub: L('Korean medicine · Hongdae', '한의원 · 홍대', '韓医院・弘大', '韩医诊所 · 弘大', 'Medicina coreana', 'Y học cổ truyền') },
    { file: 'mode-dental.html', name: '모드치과의원', group: 'clinic', tone: 'th-h', sub: L('Aesthetic dentistry · Gangnam', '심미치과 · 강남', '審美歯科・江南', '美学牙科 · 江南', 'Odontología estética', 'Nha khoa thẩm mỹ') },
    { file: 'sydney-on-dental.html', name: '시드니 연치과', group: 'clinic', tone: 'th-a', sub: L('Dental clinic · Sydney', '치과 · 시드니', '歯科・シドニー', '牙科 · 悉尼', 'Clínica dental · Sídney', 'Nha khoa · Sydney') },
    { file: 'willbfine.html', name: '괜찮아요한의원', group: 'clinic', tone: 'th-c', sub: L('Korean medicine · Gongdeok', '한의원 · 공덕', '韓医院・孔徳', '韩医诊所 · 孔德', 'Medicina coreana', 'Y học cổ truyền') },
    { file: 'hanok-today.html', name: '한옥스테이 오늘', group: 'stay', tone: 'th-a', sub: L('Hanok stay · Jeonju', '한옥 독채 · 전주', '韓屋ステイ・全州', '韩屋独栋 · 全州', 'Estancia hanok', 'Nhà hanok') },
    { file: 'hongdae-guesthouse.html', name: 'Hongdae Guesthouse', group: 'stay', tone: 'th-d', sub: L('Guesthouse · Seoul', '게스트하우스 · 서울', 'ゲストハウス・ソウル', '民宿 · 首尔', 'Casa de huéspedes', 'Nhà nghỉ') },
    { file: 'mido-hostel.html', name: 'MIDO Hostel', group: 'stay', tone: 'th-g', sub: L('Hostel · Seogwipo', '호스텔 · 서귀포', 'ホステル・西帰浦', '旅舍 · 西归浦', 'Hostal · Seogwipo', 'Hostel · Seogwipo') },
    { file: 'pobi-guesthouse.html', name: '게스트하우스 포비', group: 'stay', tone: 'th-c', sub: L('Guesthouse · Haeundae', '게스트하우스 · 해운대', 'ゲストハウス・海雲台', '民宿 · 海云台', 'Casa de huéspedes', 'Nhà nghỉ') },
    { file: 'seomun-hanok.html', name: '서문한옥게스트하우스', group: 'stay', tone: 'th-f', sub: L('Hanok stay · Daegu', '한옥 숙소 · 대구', '韓屋宿・大邱', '韩屋住宿 · 大邱', 'Estancia hanok', 'Nhà hanok') },
    { file: 'bubble-tank.html', name: 'Bubble Tank', group: 'leisure', tone: 'th-d', sub: L('Scuba diving · Jeju', '스쿠버다이빙 · 제주', 'ダイビング・済州', '潜水 · 济州', 'Buceo · Jeju', 'Lặn biển · Jeju') },
    { file: 'daysurf.html', name: '데이서프', group: 'leisure', tone: 'th-e', sub: L('Surf school · Busan', '서핑 강습 · 부산', 'サーフィン・釜山', '冲浪教学 · 釜山', 'Surf · Busan', 'Lướt sóng · Busan') },
    { file: 'yangyang-surf.html', name: '양양서핑학교', group: 'leisure', tone: 'th-a', sub: L('Surf school · Yangyang', '서핑 강습 · 양양', 'サーフィン・襄陽', '冲浪教学 · 襄阳', 'Surf · Yangyang', 'Lướt sóng · Yangyang') },
    { file: 'jeju-horse-park.html', name: '제주승마공원', group: 'leisure', tone: 'th-c', sub: L('Horse riding · Aewol', '승마 · 애월', '乗馬・涯月', '骑马 · 涯月', 'Equitación · Aewol', 'Cưỡi ngựa · Aewol') },
    { file: 'parastory.html', name: '패러이야기', group: 'leisure', tone: 'th-h', sub: L('Paragliding · Danyang', '패러글라이딩 · 단양', 'パラグライダー・丹陽', '滑翔伞 · 丹阳', 'Parapente · Danyang', 'Dù lượn · Danyang') },
    { file: 'yacht-holic.html', name: 'Yachtholic', group: 'leisure', tone: 'th-b', sub: L('Yacht tour · Gwangalli', '요트투어 · 광안리', 'ヨットツアー・広安里', '游艇 · 广安里', 'Paseo en yate', 'Tour du thuyền') },
    { file: 'sura-seoul.html', name: 'SURA Seoul', group: 'leisure', tone: 'th-g', sub: L('Cooking class · Bukchon', '쿠킹클래스 · 북촌', '料理教室・北村', '料理课 · 北村', 'Clase de cocina', 'Lớp nấu ăn') },
    { file: 'gowoonsol-hanbok.html', name: '고운솔한복', group: 'leisure', tone: 'th-f', sub: L('Hanbok rental · Gyeongbokgung', '한복대여 · 경복궁', '韓服レンタル・景福宮', '韩服租赁 · 景福宫', 'Alquiler de hanbok', 'Cho thuê hanbok') },
    { file: 'eden-farm.html', name: '이든팜', group: 'brand', tone: 'th-e', sub: L('Cosmetics OEM · B2B', '화장품 OEM · B2B', '化粧品OEM・B2B', '化妆品 OEM', 'Cosmética OEM', 'Mỹ phẩm OEM') },
    { file: 'vitdam.html', name: '빛담 VITDAM', group: 'brand', tone: 'th-a', sub: L('Export OEM · B2B', '수출 OEM · B2B', '輸出OEM・B2B', '出口 OEM', 'Exportación OEM', 'Xuất khẩu OEM') },
    { file: 'yemat.html', name: '예맛 YEMAT', group: 'brand', tone: 'th-c', sub: L('Laver producer · Export', '김 제조 · 수출', '海苔製造・輸出', '海苔制造与出口', 'Productor de alga', 'Sản xuất rong biển') }
  ];

  /* legacy live builds — must keep working exactly as before */
  var liveBuilds = [
    { demo: 'cafe', file: 'sample_cafe_loom_roast.html', name: 'Loom & Roast', tone: 'cafe',
      tag: L('F&B · Café & Bakery', 'F&B · 카페 & 베이커리', 'F&B・カフェ＆ベーカリー', '餐饮 · 咖啡与烘焙', 'Gastronomía · Café', 'F&B · Cà phê & Bánh'),
      desc: L('A specialty coffee house with a filterable menu, a story page and a table-inquiry flow.', '필터형 메뉴, 매장 이야기, 테이블·단체 문의 흐름을 갖춘 스페셜티 카페.', 'フィルター付きメニュー、店舗ストーリー、席・団体の問い合わせ導線を備えたスペシャルティカフェ。', '带筛选菜单、门店故事与订位咨询流程的精品咖啡馆。', 'Café de especialidad con menú filtrable, historia y consulta de mesa.', 'Quán cà phê specialty với menu lọc, câu chuyện và luồng đặt bàn.'),
      meta: L('6 languages · menu filter · booking modal', '6개국어 · 메뉴 필터 · 예약 모달', '6言語・メニューフィルター・予約モーダル', '六语 · 菜单筛选 · 订位弹窗', '6 idiomas · filtro · reserva', '6 ngôn ngữ · lọc menu · đặt bàn') },
    { demo: 'clinic', file: 'sample_clinic_lumiere.html', name: 'Lumière Dental & Care', tone: 'clinic',
      tag: L('Healthcare · Dental & Wellness', '헬스케어 · 치과 & 웰니스', 'ヘルスケア・歯科＆ウェルネス', '医疗 · 齿科与健康', 'Salud · Dental', 'Y tế · Nha khoa'),
      desc: L('A calm clinic site for international patients: treatments, doctors and appointment requests.', '외국인 환자와 지역 고객을 함께 겨냥한 차분한 클리닉 사이트. 진료 과목, 의료진, 예약 신청.', '海外患者と地域の患者の両方に向けた落ち着いたクリニックサイト。診療科目、医師紹介、予約申込。', '面向外籍患者与本地客户的安静诊所网站：诊疗项目、医生、预约申请。', 'Sitio de clínica para pacientes internacionales: tratamientos, médicos y citas.', 'Website phòng khám cho bệnh nhân quốc tế: điều trị, bác sĩ, đặt hẹn.'),
      meta: L('6 languages · appointment modal · hours', '6개국어 · 예약 모달 · 진료 시간', '6言語・予約モーダル・診療時間', '六语 · 预约弹窗 · 门诊时间', '6 idiomas · cita · horario', '6 ngôn ngữ · đặt hẹn · giờ mở') },
    { demo: 'b2b', file: 'sample_b2b_apex.html', name: 'Apex Advisory', tone: 'b2b',
      tag: L('B2B · Consulting', 'B2B · 컨설팅', 'B2B・コンサルティング', 'B2B · 咨询', 'B2B · Consultoría', 'B2B · Tư vấn'),
      desc: L('A sharp agency presence with services, illustrative metrics and a consultation form.', '서비스 소개, 샘플 지표, 상담 폼을 갖춘 단정한 에이전시 사이트.', 'サービス紹介、参考指標、相談フォームを備えた鋭いエージェンシーサイト。', '包含服务介绍、示例指标与咨询表单的干练机构网站。', 'Presencia de agencia con servicios, métricas y formulario.', 'Website agency với dịch vụ, số liệu và form tư vấn.'),
      meta: L('6 languages · metrics band · consult form', '6개국어 · 지표 밴드 · 상담 폼', '6言語・指標バンド・相談フォーム', '六语 · 指标带 · 咨询表单', '6 idiomas · métricas · consulta', '6 ngôn ngữ · số liệu · form tư vấn') }
  ];

  /* ---------------------------------------------------------------- work status */
  var workStatuses = [
    { id: 'paid', key: 'ws_paid', def: L('Payment complete', '결제 완료', '支払完了', '付款完成', 'Pago completado', 'Đã thanh toán') },
    { id: 'await', key: 'ws_await', def: L('Awaiting materials', '자료 제출 대기', '資料提出待ち', '等待提交资料', 'Esperando materiales', 'Chờ tài liệu') },
    { id: 'review', key: 'ws_review', def: L('Reviewing materials', '자료 검토 중', '資料確認中', '资料审核中', 'Revisando materiales', 'Đang xem tài liệu') },
    { id: 'build', key: 'ws_build', def: L('In production', '제작 중', '制作中', '制作中', 'En producción', 'Đang thiết kế') },
    { id: 'draft', key: 'ws_draft', def: L('Draft delivered', '시안 전달', '初稿納品', '初稿交付', 'Borrador entregado', 'Đã gửi bản nháp') },
    { id: 'revise', key: 'ws_revise', def: L('Revising', '수정 진행 중', '修正中', '修改中', 'En revisión', 'Đang chỉnh sửa') },
    { id: 'done', key: 'ws_done', def: L('Delivered', '납품 완료', '納品完了', '交付完成', 'Entregado', 'Đã giao') }
  ];

  var paymentStatuses = [
    { id: 'paid_test', def: L('Paid (test)', '결제 완료(테스트)', '支払済（テスト）', '已付款（测试）', 'Pagado (prueba)', 'Đã trả (thử)') },
    { id: 'unpaid', def: L('Unpaid', '미결제', '未払い', '未付款', 'Sin pagar', 'Chưa trả') },
    { id: 'refunded', def: L('Refunded', '환불 완료', '返金済み', '已退款', 'Reembolsado', 'Đã hoàn') }
  ];

  var submissionStatuses = [
    { id: 'awaiting_materials', def: L('Awaiting materials', '자료 미제출', '資料未提出', '未提交资料', 'Sin materiales', 'Chưa gửi tài liệu') },
    { id: 'submitted', def: L('Submitted', '제출 완료', '提出済み', '已提交', 'Enviado', 'Đã gửi') },
    { id: 'incomplete', def: L('Needs more', '보완 필요', '追加必要', '需补充', 'Requiere más', 'Cần bổ sung') }
  ];

  global.CATALOG = {
    categories: categories,
    products: products,
    folioGroups: folioGroups,
    folio: folio,
    liveBuilds: liveBuilds,
    workStatuses: workStatuses,
    paymentStatuses: paymentStatuses,
    submissionStatuses: submissionStatuses,
    L: L,
    byId: function (id) { for (var i = 0; i < products.length; i++) { if (products[i].id === id) return products[i]; } return null; },
    byCat: function (cat) { return products.filter(function (p) { return p.cat === cat; }); },
    cat: function (id) { for (var i = 0; i < categories.length; i++) { if (categories[i].id === id) return categories[i]; } return null; }
  };
})(window);
