/* ==========================================================================
   Atelier Web — i18n.js
   Six-language dictionary (EN · KO · JA · ZH · ES · VI) + instant switch engine.
   Resolution order: ?lang= → localStorage.aw_lang → browser language (ko, else en)
   ========================================================================== */
(function (global) {
  'use strict';

  var LANGS = ['en', 'ko', 'ja', 'zh', 'es', 'vi'];
  var LABEL = { en: 'EN', ko: 'KO', ja: 'JA', zh: 'ZH', es: 'ES', vi: 'VI' };
  var HTML_LANG = { en: 'en', ko: 'ko', ja: 'ja', zh: 'zh-CN', es: 'es', vi: 'vi' };

  /* [key, en, ko, ja, zh, es, vi] */
  var ROWS = [
    /* ---- header / common ---- */
    ['meta_title', 'Atelier Web — Design studio & online shop', 'Atelier Web — 디자인 스튜디오 & 온라인 숍', 'Atelier Web — デザインスタジオ＆オンラインショップ', 'Atelier Web — 设计工作室与在线商店', 'Atelier Web — Estudio y tienda de diseño', 'Atelier Web — Studio & cửa hàng thiết kế'],
    ['brand_sub', 'Design studio & commerce', '디자인 스튜디오 & 커머스', 'デザインスタジオ＆コマース', '设计工作室与商店', 'Estudio y tienda de diseño', 'Studio & cửa hàng thiết kế'],
    ['nav_home', 'Home', '홈', 'ホーム', '首页', 'Inicio', 'Trang chủ'],
    ['nav_service', 'Design service', '디자인 서비스', 'デザインサービス', '设计服务', 'Servicios', 'Dịch vụ'],
    ['nav_portfolio', 'Portfolio', '포트폴리오', 'ポートフォリオ', '作品集', 'Portafolio', 'Dự án'],
    ['nav_process', 'Process', '프로세스', '制作の流れ', '流程', 'Proceso', 'Quy trình'],
    ['nav_about', 'About', '소개', '紹介', '关于', 'Nosotros', 'Giới thiệu'],
    ['nav_contact', 'Contact', '문의', 'お問い合わせ', '联系', 'Contacto', 'Liên hệ'],
    ['nav_cart', 'Cart', '장바구니', 'カート', '购物车', 'Carrito', 'Giỏ hàng'],
    ['nav_mypage', 'My page', '마이페이지', 'マイページ', '我的页面', 'Mi página', 'Trang của tôi'],
    ['nav_admin', 'Admin', '관리자', '管理', '管理', 'Admin', 'Quản trị'],
    ['cta_start', 'Start a project', '프로젝트 시작', '相談する', '开始项目', 'Empezar', 'Bắt đầu'],
    ['cta_products', 'All products', '전체 상품', '全商品', '全部商品', 'Todos los productos', 'Tất cả sản phẩm'],
    ['lang_label', 'Language', '언어', '言語', '语言', 'Idioma', 'Ngôn ngữ'],
    ['menu_open', 'Menu', '메뉴', 'メニュー', '菜单', 'Menú', 'Menu'],
    ['menu_close', 'Close', '닫기', '閉じる', '关闭', 'Cerrar', 'Đóng'],
    ['close', 'Close', '닫기', '閉じる', '关闭', 'Cerrar', 'Đóng'],
    ['back_to_products', 'All products', '상품 목록으로', '商品一覧へ', '返回商品列表', 'Volver a productos', 'Về danh sách'],

    /* ---- home hero ---- */
    ['hero_kicker', 'ATELIER WEB — CREATIVE DESIGN STUDIO', 'ATELIER WEB — CREATIVE DESIGN STUDIO', 'ATELIER WEB — CREATIVE DESIGN STUDIO', 'ATELIER WEB — CREATIVE DESIGN STUDIO', 'ATELIER WEB — CREATIVE DESIGN STUDIO', 'ATELIER WEB — CREATIVE DESIGN STUDIO'],
    ['hero_title', 'One Studio.<br><em>Every</em> Design<br>Your Brand Needs.', '브랜드에 필요한<br><em>모든 디자인,</em><br>하나의 스튜디오에서.', 'ブランドに必要な<br><em>すべてのデザインを、</em><br>ひとつのスタジオで。', '品牌所需的<br><em>一切设计，</em><br>都在同一个工作室。', '<em>Todo</em> el diseño<br>que tu marca necesita,<br>en un solo estudio.', '<em>Mọi</em> thiết kế<br>thương hiệu cần,<br>trong một studio.'],
    ['hero_lede', 'From brand identity and websites to e-commerce, digital marketing, and print design. We bring your brand together, from start to finish.', '로고와 브랜딩부터 웹사이트, 상세페이지, 마케팅, 인쇄물까지.<br>브랜드의 시작과 성장을 함께 디자인합니다.<br>브랜드를 만들고, 세상에 선보이고, 성장시키는 모든 과정에 필요한 디자인을 제공합니다.', 'ロゴとブランディングからウェブサイト、詳細ページ、マーケティング、印刷物まで。<br>ブランドの始まりと成長を一緒にデザインします。<br>ブランドをつくり、世に送り出し、成長させるすべての過程に必要なデザインを提供します。', '从标志与品牌设计到网站、详情页、营销与印刷品。<br>与品牌一同起步并成长。<br>为品牌的创建、亮相与成长的每个过程提供所需的设计。', 'De la identidad de marca y los sitios web al e-commerce, el marketing digital y el diseño impreso.<br>Diseñamos el inicio y el crecimiento de tu marca.<br>Ofrecemos el diseño que cada etapa necesita: crear la marca, presentarla y hacerla crecer.', 'Từ logo và nhận diện thương hiệu đến website, trang chi tiết, marketing và ấn phẩm in.<br>Đồng hành thiết kế từ khởi đầu đến khi thương hiệu lớn mạnh.<br>Cung cấp thiết kế cho mọi bước: tạo dựng thương hiệu, giới thiệu và phát triển.'],
    ['hero_cta1', 'EXPLORE SERVICES', '디자인 상품 보기', 'デザインサービスを見る', '浏览设计服务', 'Ver servicios', 'Xem dịch vụ'],
    ['hero_cta2', 'VIEW OUR WORKS', '포트폴리오 보기', '作品を見る', '查看作品', 'Ver proyectos', 'Xem dự án'],
    ['hero_fact1', 'BRANDING', 'BRANDING', 'BRANDING', 'BRANDING', 'BRANDING', 'BRANDING'],
    ['hero_fact2', 'DIGITAL', 'DIGITAL', 'DIGITAL', 'DIGITAL', 'DIGITAL', 'DIGITAL'],
    ['hero_fact3', 'CREATIVE', 'CREATIVE', 'CREATIVE', 'CREATIVE', 'CREATIVE', 'CREATIVE'],
    ['hp_kick', 'Live preview', '실시간 미리보기', 'ライブプレビュー', '实时预览', 'Vista previa', 'Xem trước'],
    ['hp_title', 'One page.<br>Six languages.', '한 페이지.<br>여섯 언어.', '1ページ。<br>6言語。', '一个页面。<br>六种语言。', 'Una página.<br>Seis idiomas.', 'Một trang.<br>Sáu ngôn ngữ.'],
    ['hp_sub', 'Tap a language — the page rewrites in place.', '언어를 누르면 페이지가 그 자리에서 바뀝니다.', '言語を押すと、その場で書き換わります。', '点击语言，页面就地切换。', 'Toca un idioma y la página cambia en el sitio.', 'Chạm ngôn ngữ, trang đổi ngay tại chỗ.'],
    ['hp_shot', 'Signature · 01', '시그니처 · 01', 'シグネチャー · 01', '招牌 · 01', 'Firma · 01', 'Đặc trưng · 01'],
    ['hp_badge', 'Live language switch', '실시간 언어 전환', 'その場で言語切替', '即时语言切换', 'Cambio instantáneo', 'Chuyển ngôn ngữ tức thì'],
    ['hp_badge_sub', 'No reload · no widget', '새로고침 없음 · 위젯 없음', '再読込なし・外部ウィジェットなし', '无需刷新 · 无第三方插件', 'Sin recarga · sin widget', 'Không tải lại · không widget'],
    ['live_band_kicker', 'Live preview', '실시간 미리보기', 'ライブプレビュー', '实时预览', 'Vista previa', 'Xem trước'],
    ['live_band_title', 'Six languages, in one website.', '여섯 개 언어, 하나의 웹사이트에서.', '6つの言語を、ひとつのウェブサイトで。', '六种语言，在同一个网站里。', 'Seis idiomas, en un solo sitio web.', 'Sáu ngôn ngữ, trong một website.'],
    ['live_band_body', 'Switch the content to the language you want without leaving the page. Try the multilingual build we deliver for global customers.', '별도의 페이지 이동 없이 원하는 언어로 콘텐츠를 전환할 수 있습니다. 글로벌 고객을 위한 다국어 웹사이트 제작 역량을 직접 확인해 보세요.', 'ページを移動せずに、見たい言語へ切り替えられます。海外のお客様向けに提供する多言語サイトの仕組みをその場でご確認ください。', '无需跳转页面即可切换所需语言。请直接体验我们为全球客户提供的多语网站制作能力。', 'Cambia el contenido al idioma que quieras sin salir de la página. Comprueba la capacidad multilingüe que entregamos a clientes globales.', 'Chuyển nội dung sang ngôn ngữ bạn muốn mà không cần rời trang. Trải nghiệm năng lực website đa ngôn ngữ cho khách hàng toàn cầu.'],
    ['live_band_note', 'This page runs on the same switch.', '이 페이지도 같은 방식으로 동작합니다.', 'このページも同じ仕組みで動いています。', '本页面也使用同一套切换。', 'Esta página usa el mismo selector.', 'Trang này cũng dùng bộ chuyển này.'],

    /* ---- about ---- */
    ['about_kicker', '01 ABOUT ATELIER WEB', '01 ABOUT ATELIER WEB', '01 ATELIER WEBについて', '01 关于 ATELIER WEB', '01 SOBRE ATELIER WEB', '01 GIỚI THIỆU ATELIER WEB'],
    ['about_quote', 'Beyond good design,<br>we build brand value.', '좋은 디자인을 넘어,<br>브랜드의 가치를 만듭니다.', '良いデザインを超えて、<br>ブランドの価値を形にします。', '超越好的设计，<br>创造品牌的价值。', 'Más allá del buen diseño,<br>creamos valor de marca.', 'Không chỉ là thiết kế đẹp,<br>chúng tôi tạo nên giá trị thương hiệu.'],
    ['about_p1', 'From brand identity to websites, detail pages, marketing and print, Atelier Web grows the work in one natural direction. We connect every piece of design into a single flow, so your brand stays consistent and the production stays efficient.', '브랜드의 아이덴티티부터 웹사이트, 상세페이지, 마케팅, 인쇄물까지 자연스럽게 확장될 수 있도록 아틀리에웹이 함께합니다. 다양한 디자인을 하나의 흐름으로 연결하여 브랜드의 일관성을 높이고, 효율적인 제작 경험을 제공합니다.', 'ブランドのアイデンティティからウェブサイト、詳細ページ、マーケティング、印刷物まで自然に広がるよう、Atelier Webが伴走します。さまざまなデザインをひとつの流れにつなぎ、ブランドの一貫性を高め、効率のよい制作体験を提供します。', '从品牌识别到网站、详情页、营销与印刷品，Atelier Web 陪伴品牌自然延展。将多样的设计连接成一条流程，提升品牌一致性，并带来高效的制作体验。', 'De la identidad de marca a los sitios web, las páginas de producto, el marketing y los impresos, Atelier Web acompaña ese crecimiento natural. Conectamos cada pieza en un solo flujo para dar coherencia a la marca y eficiencia a la producción.', 'Từ nhận diện thương hiệu đến website, trang chi tiết, marketing và ấn phẩm in, Atelier Web đồng hành để mọi thứ mở rộng tự nhiên. Chúng tôi kết nối các thiết kế thành một dòng chảy, giúp thương hiệu nhất quán và quá trình sản xuất hiệu quả.'],
    ['about_p2', 'Because the same team designs and produces, the price at checkout is the whole price. No hand-off, no separate production quote, no agency retainer.', '디자인과 제작을 같은 팀이 하기 때문에 결제 화면의 금액이 전부입니다. 외주 전달도, 별도 제작 견적도, 에이전시 리테이너도 없습니다.', 'デザインと制作を同じチームが行うため、決済画面の金額がすべてです。外注への引き継ぎも、別途の制作見積もりも、月額顧問料もありません。', '由于设计与制作由同一团队完成，结算页面的金额就是全部费用。没有转包、没有另行报价、没有月度顾问费。', 'Como el mismo equipo diseña y produce, el importe del pago es el total. Sin traspasos ni cuotas de agencia.', 'Vì cùng một đội thiết kế và sản xuất, số tiền ở bước thanh toán là toàn bộ. Không chuyển giao, không báo giá riêng.'],
    ['metric1', 'Years Experience', '디자인 경력', 'デザイン歴', '设计经验', 'Años de experiencia', 'Kinh nghiệm thiết kế'],
    ['metric2', 'Languages', '지원 언어', '対応言語', '支持语言', 'Idiomas', 'Ngôn ngữ'],
    ['metric3', 'Design Studio', '원스톱 디자인', 'ワンストップ制作', '一站式设计', 'Estudio integral', 'Thiết kế trọn gói'],
    ['metric4', 'Personal Service', '전담 디자인', '専任デザイン', '专属设计', 'Servicio personal', 'Thiết kế riêng'],

    /* ---- services section ---- */
    ['svc_kicker', '02 DESIGN SERVICES', '02 DESIGN SERVICES', '02 デザインサービス', '02 设计服务', '02 SERVICIOS DE DISEÑO', '02 DỊCH VỤ THIẾT KẾ'],
    ['svc_title', 'Every design your brand needs,<br>in one place.', '브랜드에 필요한 디자인을,<br>한곳에서.', 'ブランドに必要なデザインを、<br>ひとつの場所で。', '品牌所需的全部设计，<br>都在同一个地方。', 'Todo el diseño que tu marca necesita,<br>en un solo lugar.', 'Mọi thiết kế thương hiệu cần,<br>ở cùng một nơi.'],
    ['svc_lede', 'From logos and brand identity to websites, detail pages, marketing content and print. Atelier Web connects every design a brand needs into one flow.', '로고와 브랜드 아이덴티티부터 웹사이트, 상세페이지, 마케팅 콘텐츠, 인쇄물까지. 아뜰리에웹은 브랜드의 다양한 디자인을 하나의 흐름으로 연결합니다.', 'ロゴとブランドアイデンティティから、ウェブサイト、詳細ページ、マーケティングコンテンツ、印刷物まで。Atelier Webはブランドに必要なデザインをひとつの流れにつなぎます。', '从标志与品牌识别到网站、详情页、营销内容与印刷品，Atelier Web 把品牌所需的多样设计连接成一条流程。', 'De los logos y la identidad de marca a los sitios web, las páginas de producto, el contenido de marketing y los impresos. Atelier Web conecta todo el diseño de una marca en un solo flujo.', 'Từ logo và nhận diện thương hiệu đến website, trang chi tiết, nội dung marketing và ấn phẩm in. Atelier Web kết nối mọi thiết kế của thương hiệu thành một dòng chảy.'],
    ['svc_view_all', 'View all products', '전체 상품 보기', '全商品を見る', '查看全部商品', 'Ver todos', 'Xem tất cả'],
    ['prod_count', 'products', '개 상품', '点の商品', '件商品', 'productos', 'sản phẩm'],

    /* ---- featured ---- */
    ['feat_title', 'Design you can start today', '지금 시작할 수 있는 디자인', '今日から始められるデザイン', '现在就能开始的设计', 'Diseño que puedes empezar hoy', 'Thiết kế có thể bắt đầu ngay'],
    ['feat_lede', 'Pick the design you need and check the details and price.', '필요한 디자인을 선택하고, 상세 구성과 가격을 확인해 보세요.', '必要なデザインを選び、内容と価格をご確認ください。', '选择需要的设计，查看具体构成与价格。', 'Elige el diseño que necesitas y revisa el contenido y el precio.', 'Chọn thiết kế bạn cần và xem cấu hình, giá chi tiết.'],

    /* ---- why ---- */
    ['why_kicker', '03 WHY ATELIER WEB', '03 WHY ATELIER WEB', '03 Atelier Webの理由', '03 为什么选择我们', '03 POR QUÉ ATELIER WEB', '03 VÌ SAO ATELIER WEB'],
    ['why_title', 'From the finish of the design<br>to the trust in the work.', '디자인의 완성도부터,<br>작업의 신뢰까지.', 'デザインの完成度から、<br>仕事の信頼まで。', '从设计的完成度，<br>到合作的信任。', 'Del acabado del diseño<br>a la confianza en el trabajo.', 'Từ độ hoàn thiện của thiết kế<br>đến sự tin cậy trong công việc.'],
    ['why_lede', 'The rules below are in writing on every order. They are the reason a small studio can quote a fixed price.', '아래 원칙은 모든 주문에 문서로 안내됩니다. 작은 스튜디오가 고정 가격을 제시할 수 있는 이유입니다.', '以下の原則はすべてのご注文で書面に明記します。小さなスタジオが固定価格を出せる理由です。', '以下原则写入每一份订单。这是小工作室能给出固定价格的原因。', 'Estas reglas constan en cada pedido. Son la razón por la que un estudio pequeño puede dar un precio fijo.', 'Các nguyên tắc này có trong mọi đơn hàng. Đó là lý do studio nhỏ có thể báo giá cố định.'],
    ['why1_t', 'Clear scope and price', '명확한 작업 범위와 가격', '明確な作業範囲と価格', '明确的工作范围与价格', 'Alcance y precio claros', 'Phạm vi và giá rõ ràng'],
    ['why1_d', 'Scope and options are explained up front, so you can check the cost before you pay.', '작업 범위와 옵션을 사전에 안내하고 결제 전 비용을 확인할 수 있습니다.', '作業範囲とオプションを事前にご案内し、お支払い前に費用を確認できます。', '工作范围与选项事先说明，付款前即可确认费用。', 'El alcance y las opciones se explican antes, así que puedes ver el coste antes de pagar.', 'Phạm vi và tuỳ chọn được thông báo trước, bạn xem được chi phí trước khi thanh toán.'],
    ['why2_t', 'Design and production handled in-house', '디자인부터 제작까지 직접 진행', 'デザインから制作まで自社で進行', '从设计到制作全程亲自进行', 'Diseño y producción en el mismo equipo', 'Tự làm từ thiết kế đến sản xuất'],
    ['why2_d', 'We understand the direction of the project and keep design and production consistent.', '프로젝트의 방향을 이해하고 디자인과 제작 과정을 일관되게 관리합니다.', 'プロジェクトの方向性を理解し、デザインと制作の工程を一貫して管理します。', '理解项目方向，并一致地管理设计与制作过程。', 'Entendemos la dirección del proyecto y mantenemos el diseño y la producción coherentes.', 'Hiểu định hướng dự án và quản lý nhất quán quá trình thiết kế và sản xuất.'],
    ['why3_t', 'Six languages supported', '6개 언어 지원', '6言語に対応', '支持 6 种语言', 'Seis idiomas', 'Hỗ trợ 6 ngôn ngữ'],
    ['why3_d', 'We build multilingual websites and a communication environment for overseas customers.', '해외 고객을 위한 다국어 웹사이트 제작 및 커뮤니케이션 환경을 제공합니다.', '海外のお客様向けに、多言語サイトの制作とコミュニケーション環境を提供します。', '为海外客户提供多语网站制作与沟通环境。', 'Creamos sitios multilingües y un entorno de comunicación para clientes del exterior.', 'Cung cấp website đa ngôn ngữ và môi trường trao đổi cho khách hàng nước ngoài.'],
    ['why4_t', 'Clear schedule and refund terms', '명확한 작업 및 환불 안내', '明確な進行と返金のご案内', '明确的工期与退款说明', 'Plazos y reembolsos claros', 'Rõ ràng về tiến độ và hoàn tiền'],
    ['why4_d', 'The schedule, revision scope and cancellation and refund terms are explained before work starts.', '제작 일정, 수정 범위, 취소 및 환불 조건을 사전에 안내합니다.', '制作スケジュール、修正範囲、キャンセル・返金条件を事前にご案内します。', '制作日程、修改范围、取消与退款条件事先说明。', 'El calendario, el alcance de las revisiones y las condiciones de cancelación y reembolso se explican antes de empezar.', 'Tiến độ, phạm vi sửa và điều kiện huỷ hoàn được thông báo trước khi bắt đầu.'],

    /* ---- portfolio ---- */
    ['folio_kicker', '04 PORTFOLIO', '04 PORTFOLIO', '04 ポートフォリオ', '04 作品集', '04 PORTAFOLIO', '04 DỰ ÁN'],
    ['folio_title', '23 concept builds, three live sites.', '시안 23건, 라이브 사이트 3건.', 'コンセプト23件、ライブサイト3件。', '23 个概念方案，3 个线上站点。', '23 propuestas y tres sitios en vivo.', '23 bản thiết kế và 3 site đang chạy.'],
    ['folio_lede', 'Each card opens a real, clickable build. The three live sites below are full six-language projects; the rest are industry concept previews made for outreach.', '카드를 열면 실제로 클릭되는 결과물이 나옵니다. 아래 라이브 3건은 6개국어 전체 구현이고, 나머지는 업종별 제안용 시안입니다.', 'カードを開くと実際に動く制作物が開きます。下の3件は6言語の完全実装、他は業種別の提案用コンセプトです。', '点击卡片可打开真实可交互的成果。下方三个为完整六语项目，其余为行业提案概念稿。', 'Cada tarjeta abre una pieza real. Los tres sitios de abajo son proyectos completos en seis idiomas; el resto son conceptos por sector.', 'Mỗi thẻ mở một sản phẩm thật. Ba site dưới là dự án 6 ngôn ngữ hoàn chỉnh; còn lại là bản concept theo ngành.'],
    ['folio_live', 'Live six-language builds', '라이브 6개국어 구현', '6言語ライブ実装', '六语线上实现', 'Sitios en seis idiomas', 'Site 6 ngôn ngữ'],
    ['folio_open', 'Open the build', '완성 페이지 열기', '完成ページを開く', '打开成品', 'Abrir el sitio', 'Mở trang'],
    ['folio_preview', 'Quick preview', '빠른 미리보기', 'クイックプレビュー', '快速预览', 'Vista rápida', 'Xem nhanh'],
    ['folio_concepts', 'Concept previews', '업종별 시안', '業種別コンセプト', '行业概念稿', 'Conceptos por sector', 'Concept theo ngành'],
    ['folio_note', 'Each build opens in a new tab. Use the language bar on any page to switch the whole site instantly.', '각 결과물은 새 탭에서 열립니다. 어느 페이지에서든 상단 언어 버튼으로 즉시 바뀝니다.', '各ページは新しいタブで開きます。上部の言語ボタンで即座に切り替わります。', '各页面在新标签页打开，顶部语言按钮可即时切换整站。', 'Cada sitio abre en una pestaña nueva. La barra superior cambia todo al instante.', 'Mỗi trang mở tab mới. Thanh ngôn ngữ đổi toàn site ngay.'],
    ['modal_note', 'A styled preview of the layout. Open the live page for the real, clickable site.', '레이아웃을 재현한 미리보기입니다. 실제로 클릭되는 페이지는 라이브에서 확인하세요.', 'レイアウトを再現したプレビューです。実際に動くページはライブでご確認ください。', '这是版式的样式预览，实际可点击的页面请在线上查看。', 'Vista del diseño. Abre el sitio real para navegar.', 'Bản xem trước bố cục. Mở trang thật để tương tác.'],
    ['modal_eyebrow', 'Inline preview', '인라인 미리보기', 'インラインプレビュー', '内嵌预览', 'Vista previa', 'Xem trước'],

    /* ---- pricing ---- */
    ['price_kicker', '05 PRICING / PACKAGES', '05 PRICING / PACKAGES', '05 料金 / プラン', '05 价格 / 套餐', '05 PRECIOS / PAQUETES', '05 GIÁ / GÓI'],
    ['price_title', 'Website packages, unchanged.', '웹사이트 패키지, 그대로.', 'ウェブサイトパッケージはそのまま。', '网站套餐，保持不变。', 'Paquetes web, sin cambios.', 'Gói website, giữ nguyên.'],
    ['price_lede', 'The three website packages keep the scope and price they have always had. Design items are priced per option or quoted after a brief.', '웹사이트 패키지 3종은 기존 사양과 가격을 그대로 유지합니다. 디자인 상품은 옵션 단가 또는 브리프 후 견적으로 안내합니다.', 'ウェブサイト3プランは従来の仕様と価格を維持します。デザイン商品はオプション単価または見積もりでご案内します。', '三款网站套餐维持原有范围与价格；设计商品按选项计价或沟通后报价。', 'Los tres paquetes web mantienen alcance y precio. Los artículos de diseño se cotizan por opción.', 'Ba gói website giữ nguyên phạm vi và giá. Sản phẩm thiết kế tính theo tuỳ chọn.'],
    ['rate_title', 'Design rates at a glance', '디자인 단가 한눈에', 'デザイン単価の目安', '设计单价一览', 'Tarifas de diseño', 'Đơn giá thiết kế'],
    ['rate1_k', 'Detail page · 10,000px', '상세페이지 · 10,000px', '詳細ページ・10,000px', '详情页 · 10,000px', 'Página · 10.000px', 'Trang chi tiết · 10.000px'],
    ['rate1_v', '110,000 KRW', '110,000원', '110,000ウォン', '110,000韩元', '110.000 KRW', '110.000 KRW'],
    ['rate1_d', 'Planning excluded, source excluded, VAT included', '기획 미포함, 원본 미포함, 부가세 포함', '企画なし・元データなし・税込', '不含策划与源文件，含增值税', 'Sin planificación ni fuente, IVA incluido', 'Không kế hoạch, không nguồn, gồm VAT'],
    ['rate2_k', 'Detail page + planning', '상세페이지 + 기획', '詳細ページ＋企画', '详情页 + 策划', 'Página + planificación', 'Trang + kế hoạch'],
    ['rate2_v', '165,000 KRW', '165,000원', '165,000ウォン', '165,000韩元', '165.000 KRW', '165.000 KRW'],
    ['rate2_d', '10,000px with copywriting, VAT included', '10,000px, 카피라이팅 포함, 부가세 포함', '10,000px・コピー込み・税込', '10,000px 含文案，含增值税', '10.000px con textos, IVA incluido', '10.000px có nội dung, gồm VAT'],
    ['rate3_k', 'Website packages', '웹사이트 패키지', 'ウェブサイトプラン', '网站套餐', 'Paquetes web', 'Gói website'],
    ['rate3_v', 'from $390', '390달러부터', '$390〜', 'US$390 起', 'desde $390', 'từ $390'],
    ['rate3_d', 'Starter · Business · Global Multilingual Pro', 'Starter · Business · Global Multilingual Pro', 'Starter・Business・Global Multilingual Pro', 'Starter · Business · Global Multilingual Pro', 'Starter · Business · Global', 'Starter · Business · Global'],
    ['price_badge', 'Standard packages · fixed scope', '기준 패키지 · 사전 합의 정액제', '標準プラン・事前合意の固定範囲', '标准套餐 · 固定范围', 'Paquetes estándar · alcance fijo', 'Gói chuẩn · phạm vi cố định'],
    ['plan_inquiry', 'Request this', '이 패키지 문의', 'このプランを相談', '咨询此套餐', 'Consultar', 'Hỏi gói này'],
    ['plan1_name', 'Starter · 1-Page', 'Starter · 1페이지', 'Starter・1ページ', 'Starter 单页', 'Starter · 1 página', 'Starter · 1 trang'],
    ['plan1_title', 'One page, done well', '한 페이지를 제대로', '1ページを丁寧に', '把一页做好', 'Una página bien hecha', 'Một trang chỉn chu'],
    ['plan1_price', 'from $390', '390달러부터', '$390〜', 'US$390 起', 'desde $390', 'từ $390'],
    ['plan1_note', 'For a new brand, a launch or a single offer.', '새 브랜드, 런칭, 단일 상품 소개에.', '新ブランド、ローンチ、単一サービスの紹介に。', '适合新品牌、上线或单一服务。', 'Para una marca nueva o un lanzamiento.', 'Cho thương hiệu mới hoặc ra mắt.'],
    ['plan1_f1', '1 page, up to 6 sections', '1페이지, 최대 6개 섹션', '1ページ・最大6セクション', '1 页，最多 6 个版块', '1 página, hasta 6 secciones', '1 trang, tối đa 6 phần'],
    ['plan1_f2', 'Six-language switch included', '6개국어 전환 포함', '6言語切替つき', '含六语切换', 'Cambio de seis idiomas', 'Có chuyển 6 ngôn ngữ'],
    ['plan1_f3', 'Mobile + desktop layouts', '모바일·데스크톱 레이아웃', 'モバイル＋PC', '手机与桌面版式', 'Diseño móvil y escritorio', 'Bố cục di động và desktop'],
    ['plan1_f4', 'Contact form (front-end)', '문의 폼(프론트엔드)', 'お問い合わせフォーム（フロント）', '联系表单（前端）', 'Formulario de contacto', 'Form liên hệ (front-end)'],
    ['plan2_tag', 'Most requested', '가장 많이 선택', '最も選ばれる', '最常选择', 'Más solicitado', 'Được chọn nhiều'],
    ['plan2_title', 'Business · Multi-Page', 'Business · 멀티 페이지', 'Business・複数ページ', 'Business 多页', 'Business · multipágina', 'Business · nhiều trang'],
    ['plan2_price', 'from $890', '890달러부터', '$890〜', 'US$890 起', 'desde $890', 'từ $890'],
    ['plan2_note', 'For shops, clinics and local service businesses.', '매장, 클리닉, 지역 서비스업에.', '店舗、クリニック、地域サービス業に。', '适合门店、诊所与本地服务业。', 'Para tiendas, clínicas y servicios locales.', 'Cho cửa hàng, phòng khám và dịch vụ địa phương.'],
    ['plan2_f1', 'Up to 5 pages', '최대 5페이지', '最大5ページ', '最多 5 页', 'Hasta 5 páginas', 'Tối đa 5 trang'],
    ['plan2_f2', 'Six-language switch included', '6개국어 전환 포함', '6言語切替つき', '含六语切换', 'Cambio de seis idiomas', 'Có chuyển 6 ngôn ngữ'],
    ['plan2_f3', 'Menu, booking or inquiry flows', '메뉴·예약·문의 흐름', 'メニュー・予約・問い合わせ導線', '菜单、预约或咨询流程', 'Flujos de menú, reserva o consulta', 'Luồng menu, đặt chỗ, liên hệ'],
    ['plan2_f4', 'Basic SEO and sitemap', '기본 SEO와 사이트맵', '基本SEOとサイトマップ', '基础 SEO 与站点地图', 'SEO básico y sitemap', 'SEO cơ bản và sitemap'],
    ['plan3_name', 'Global Multilingual Pro', 'Global Multilingual Pro', 'Global Multilingual Pro', 'Global Multilingual Pro', 'Global Multilingual Pro', 'Global Multilingual Pro'],
    ['plan3_title', 'Two days, six markets', '이틀이면 여섯 시장', '2日で6市場', '两天进入六个市场', 'Dos días, seis mercados', 'Hai ngày, sáu thị trường'],
    ['plan3_price', 'from $1,490', '1,490달러부터', '$1,490〜', 'US$1,490 起', 'desde $1,490', 'từ $1,490'],
    ['plan3_note', 'For teams selling across borders from day one.', '첫날부터 국경을 넘어 판매하는 팀에.', '初日から国境を越えて販売するチームに。', '适合起步即跨境的团队。', 'Para equipos que venden fuera desde el inicio.', 'Cho đội bán xuyên biên giới.'],
    ['plan3_f1', 'Up to 10 pages', '최대 10페이지', '最大10ページ', '最多 10 页', 'Hasta 10 páginas', 'Tối đa 10 trang'],
    ['plan3_f2', 'Six languages, reviewed copy', '6개국어, 검수된 카피', '6言語・校閲済みコピー', '六语且文案经审校', 'Seis idiomas con textos revisados', 'Sáu ngôn ngữ, nội dung đã duyệt'],
    ['plan3_f3', 'Locale-aware forms and pricing', '로케일 맞춤 폼·가격', 'ロケール別フォームと価格', '本地化表单与价格', 'Formularios y precios por región', 'Form và giá theo khu vực'],
    ['plan3_f4', 'Deployment and handover session', '배포와 인수 세션', '公開と引き継ぎ', '部署与交接', 'Publicación y traspaso', 'Triển khai và bàn giao'],
    ['price_footnote', 'Every package is built to the scope agreed up front — no add-on costs and no monthly retainer. Send your industry and the pages you need, and we reply with a free first concept and a fixed quote.', '모든 패키지는 사전에 합의한 범위 그대로, 추가 비용이나 월 구독료 없이 제작합니다. 업종과 필요한 페이지를 보내 주시면 무료 첫 시안과 확정 견적을 회신드립니다.', 'すべてのプランは事前合意の範囲で、追加費用も月額料金もありません。業種と必要なページをお送りいただければ、無料の初回コンセプトと確定見積もりを返信します。', '所有套餐按事先约定的范围制作，无附加费用与月费。告知行业与所需页面，我们会回复免费初稿与确定报价。', 'Cada paquete se construye al alcance acordado, sin costes extra ni cuota mensual. Envía tu sector y páginas y respondemos con un primer concepto gratis.', 'Mọi gói làm đúng phạm vi đã thoả thuận, không phụ phí, không phí tháng. Gửi ngành và số trang, chúng tôi trả concept đầu miễn phí.'],

    /* ---- process ---- */
    ['process_kicker', '06 PROCESS', '06 PROCESS', '06 制作の流れ', '06 流程', '06 PROCESO', '06 QUY TRÌNH'],
    ['process_title', 'Five steps from option to delivery.', '옵션 선택에서 납품까지 다섯 단계.', 'オプション選択から納品まで5ステップ。', '从选配到交付，五个步骤。', 'Cinco pasos de la opción a la entrega.', 'Năm bước từ tuỳ chọn đến giao hàng.'],
    ['process_lede', 'Order number links every step: payment, materials, draft and final delivery. You can follow all of it in My Page.', '주문번호 하나로 결제·자료·시안·납품이 연결됩니다. 마이페이지에서 전 과정을 확인할 수 있습니다.', '注文番号1つで決済・資料・初稿・納品がつながります。マイページで全工程を確認できます。', '一个订单号串联付款、资料、初稿与交付，可在我的页面查看全程。', 'El número de pedido enlaza pago, materiales, borrador y entrega. Todo se sigue en Mi página.', 'Mã đơn nối thanh toán, tài liệu, bản nháp và giao hàng. Theo dõi ở Trang của tôi.'],
    ['step1_t', 'Choose &amp; price', '상품 선택·견적', '選択と見積もり', '选择与计价', 'Elegir y calcular', 'Chọn và tính giá'],
    ['step1_d', 'Pick the item, set the options and see the exact total before checkout.', '상품을 고르고 옵션을 설정하면 결제 전에 정확한 총액이 보입니다.', '商品を選び、オプションを設定すると決済前に正確な合計が見えます。', '选好商品与选项，结算前即可看到准确总额。', 'Elige el artículo, ajusta opciones y ve el total exacto.', 'Chọn sản phẩm, đặt tuỳ chọn và thấy tổng chính xác.'],
    ['step1_time', '5 minutes', '5분', '5分', '5 分钟', '5 minutos', '5 phút'],
    ['step2_t', 'Order &amp; pay', '주문·결제', '注文と決済', '下单与付款', 'Pedir y pagar', 'Đặt và thanh toán'],
    ['step2_d', 'Place the order; the order number connects payment, materials and production.', '주문을 생성하면 주문번호가 결제·자료·제작을 연결합니다.', '注文すると、注文番号が決済・資料・制作をつなぎます。', '下单后，订单号串联付款、资料与制作。', 'El pedido genera un número que enlaza pago, materiales y producción.', 'Đặt đơn tạo mã nối thanh toán, tài liệu và sản xuất.'],
    ['step2_time', 'Same day', '당일', '当日', '当天', 'Mismo día', 'Trong ngày'],
    ['step3_t', 'Submit materials', '작업 자료 제출', '資料提出', '提交资料', 'Enviar materiales', 'Gửi tài liệu'],
    ['step3_d', 'Send brand information, references and files through the submission form.', '브랜드 정보, 레퍼런스, 파일을 자료 제출 폼으로 보냅니다.', 'ブランド情報、参考資料、ファイルを提出フォームで送ります。', '通过资料提交表发送品牌信息、参考与文件。', 'Envía marca, referencias y archivos por el formulario.', 'Gửi thông tin thương hiệu, tham chiếu và tệp qua form.'],
    ['step3_time', 'Within 3 days', '3일 이내', '3日以内', '3 天内', 'En 3 días', 'Trong 3 ngày'],
    ['step4_t', 'Design &amp; revision', '제작·수정', '制作と修正', '制作与修改', 'Diseño y revisión', 'Thiết kế & sửa'],
    ['step4_d', 'First draft, then one basic revision inside the agreed direction.', '첫 시안을 드리고, 합의된 방향 안에서 기본 수정 1회를 진행합니다.', '初稿をお渡しし、合意した方向の範囲で基本修正1回を行います。', '交付初稿，并在约定方向内进行 1 次基础修改。', 'Primer borrador y una revisión básica en la dirección acordada.', 'Gửi bản nháp và một lần sửa cơ bản theo hướng đã chốt.'],
    ['step4_time', '3–7 days', '3–7일', '3〜7日', '3–7 天', '3–7 días', '3–7 ngày'],
    ['step5_t', 'Delivery', '납품', '納品', '交付', 'Entrega', 'Giao hàng'],
    ['step5_d', 'Final images, source file if selected, and the order archived in My Page.', '최종 이미지와 원본(선택 시), 그리고 마이페이지에 보관된 주문 내역을 드립니다.', '最終画像と元データ（選択時）、マイページに保管された注文履歴をお渡しします。', '交付最终图片与源文件（如选购），订单存档在我的页面。', 'Imágenes finales, archivo fuente si lo elegiste y el pedido archivado.', 'Ảnh cuối, tệp nguồn nếu chọn, và đơn lưu ở Trang của tôi.'],
    ['step5_time', '1 day', '1일', '1日', '1 天', '1 día', '1 ngày'],

    /* ---- faq ---- */
    ['faq_kicker', '07 FAQ', '07 FAQ', '07 よくある質問', '07 常见问题', '07 PREGUNTAS', '07 CÂU HỎI'],
    ['faq_title', 'Questions before you order.', '주문 전에 확인하세요.', 'ご注文前の確認。', '下单前的疑问。', 'Dudas antes de pedir.', 'Hỏi trước khi đặt.'],
    ['faq_lede', 'Short answers. For anything else, write to atelierweb.seoul@gmail.com or call 010-4369-5455.', '짧은 답입니다. 그 외는 atelierweb.seoul@gmail.com 또는 010-4369-5455로 문의해 주세요.', '短い回答です。それ以外は atelierweb.seoul@gmail.com または 010-4369-5455 まで。', '简短回答。其他问题请邮件致 atelierweb.seoul@gmail.com 或致电 010-4369-5455。', 'Respuestas breves. Para lo demás, escribe a atelierweb.seoul@gmail.com o llama al 010-4369-5455.', 'Trả lời ngắn. Việc khác, gửi atelierweb.seoul@gmail.com hoặc gọi 010-4369-5455.'],
    ['q1', 'Can I buy without asking first?', '문의 없이 바로 구매할 수 있나요?', '問い合わせなしで購入できますか？', '可以不咨询直接购买吗？', '¿Puedo comprar sin consultar?', 'Có thể mua mà không cần hỏi?'],
    ['a1', 'Yes for the detail page products. Options and VAT are calculated in front of you, so the total at checkout is the total.', '상세페이지 상품은 바로 구매할 수 있습니다. 옵션과 부가세가 화면에서 계산되므로 결제 화면의 금액이 최종 금액입니다.', '詳細ページ商品はすぐ購入できます。オプションと税がその場で計算されるので、決済画面の金額が最終金額です。', '详情页商品可以直接购买。选项与增值税当场计算，结算金额即为最终金额。', 'Sí, para las páginas de producto. Opciones e IVA se calculan a la vista.', 'Được, với sản phẩm trang chi tiết. Tuỳ chọn và VAT tính ngay.'],
    ['q2', 'How is the price calculated?', '가격은 어떻게 계산되나요?', '価格はどう計算されますか？', '价格如何计算？', '¿Cómo se calcula el precio?', 'Giá tính thế nào?'],
    ['a2', '(Design + planning + source) × quantity, then 10% VAT. 10,000px with no options is 110,000 KRW.', '(디자인 + 기획 + 원본) × 수량, 이후 부가세 10%. 옵션 없는 10,000px은 110,000원입니다.', '（デザイン＋企画＋元データ）×数量、その後10％の税。オプションなしの10,000pxは110,000ウォンです。', '（设计 + 策划 + 源文件）× 数量，再加 10% 增值税。10,000px 无选项为 110,000 韩元。', '(Diseño + planificación + fuente) × cantidad, más 10% de IVA. 10.000px sin opciones: 110.000 KRW.', '(Thiết kế + kế hoạch + tệp nguồn) × số lượng, rồi VAT 10%. 10.000px không tuỳ chọn: 110.000 KRW.'],
    ['q3', 'I have no copy or plan. What then?', '원고나 기획안이 없으면요?', '原稿や企画がない場合は？', '没有文案或策划怎么办？', 'No tengo textos ni plan. ¿Qué hago?', 'Không có nội dung hay kế hoạch?'],
    ['a3', 'Choose planning included: we build the structure and write the copy. If you have materials, choose planning excluded and upload them in the submission form.', '기획 포함을 선택하시면 구성과 카피라이팅을 저희가 합니다. 자료가 있으시면 기획 미포함을 고르고 제출 폼에 올려 주세요.', '企画込みを選べば、構成とコピーはこちらで行います。資料がある場合は企画なしを選び、提出フォームに添付してください。', '选择“含策划”，结构与文案由我们完成。已有资料则选“不含策划”，在提交表上传。', 'Elige planificación incluida: hacemos estructura y textos. Si tienes material, elige sin planificación y súbelo.', 'Chọn có kế hoạch: chúng tôi làm cấu trúc và nội dung. Có tài liệu thì chọn không kế hoạch và tải lên.'],
    ['q4', 'What does one basic revision cover?', '기본 수정 1회의 범위는?', '基本修正1回の範囲は？', '一次基础修改包括什么？', '¿Qué cubre una revisión básica?', 'Một lần sửa cơ bản gồm gì?'],
    ['a4', 'Text, image and partial layout changes inside the confirmed direction. Full re-planning or a new concept is a separate quote.', '확정된 방향 안에서 텍스트·이미지·부분 배치를 조정합니다. 전면 재기획이나 새 콘셉트는 별도 견적입니다.', '確定した方向の範囲でテキスト・画像・部分配置を調整します。全面的な再企画や新コンセプトは別途見積もりです。', '在已确认方向内调整文字、图片与局部版式。全面重做或新概念需另行报价。', 'Texto, imágenes y ajustes parciales dentro de la dirección confirmada. Replanificar se cotiza aparte.', 'Chữ, ảnh và bố cục trong hướng đã chốt. Làm lại toàn bộ tính phí riêng.'],
    ['q5', 'Is the payment real?', '결제는 실제로 되나요?', '決済は実際に発生しますか？', '真的会扣款吗？', '¿El pago es real?', 'Thanh toán có thật không?'],
    ['a5', 'This first stage runs in test-order mode. No money is taken. Card payment is connected in phase two with PayApp and server-side verification.', '이번 1차 구축은 테스트 주문 모드입니다. 실제 금액은 청구되지 않습니다. 카드 결제는 2차에서 페이앱과 서버 검증으로 연결됩니다.', 'この第1段階はテスト注文モードです。実際の請求はありません。カード決済は第2段階でPayAppとサーバー検証により接続します。', '本阶段为测试下单模式，不会实际扣款。刷卡支付将在第二阶段接入 PayApp 与服务器校验。', 'Esta primera fase es modo de prueba. No se cobra. El pago con tarjeta se conecta en la fase dos con PayApp.', 'Giai đoạn 1 là chế độ đơn thử. Không thu tiền. Thanh toán thẻ kết nối ở giai đoạn 2 với PayApp.'],
    ['q6', 'How do I send files?', '파일은 어떻게 보내나요?', 'ファイルはどう送りますか？', '文件怎么发？', '¿Cómo envío archivos?', 'Gửi tệp thế nào?'],
    ['a6', 'The submission form has six file slots with type and size checks, and prepares an email to atelierweb.seoul@gmail.com so nothing is lost on static hosting.', '자료 제출 폼에 6개 파일 항목이 있고 형식·용량을 검사합니다. 정적 호스팅에서 누락되지 않도록 atelierweb.seoul@gmail.com 메일도 함께 준비합니다.', '提出フォームには6つのファイル枠があり、形式と容量を確認します。静的ホスティングで欠けないよう、メールも同時に用意します。', '资料提交表有 6 个文件位并校验格式与大小，同时准备发往 atelierweb.seoul@gmail.com 的邮件，避免静态托管丢件。', 'El formulario tiene seis espacios con control de formato y peso, y prepara un correo para que nada se pierda.', 'Form có 6 ô tệp, kiểm tra định dạng và dung lượng, đồng thời chuẩn bị email để không mất tệp.'],
    ['q7', 'Can I get a refund?', '환불이 되나요?', '返金は可能ですか？', '可以退款吗？', '¿Puedo obtener reembolso?', 'Có được hoàn tiền?'],
    ['a7', '100% before work begins. After design or development starts, settlement follows the stage reached.', '작업 착수 전에는 100% 환불됩니다. 시안·개발 착수 후에는 진행 단계에 따라 정산합니다.', '作業着手前は100%返金。デザイン・開発着手後は進行段階に応じて精算します。', '开工前 100% 退款；设计或开发开始后按进度结算。', '100% antes de empezar. Después, se liquida según la etapa.', '100% trước khi bắt đầu. Sau đó quyết toán theo giai đoạn.'],
    ['q8', 'Where are my files kept?', '제 파일은 어디에 보관되나요?', 'ファイルはどこに保管されますか？', '我的文件保存在哪里？', '¿Dónde se guardan mis archivos?', 'Tệp của tôi lưu ở đâu?'],
    ['a8', 'In phase one your order stays in this browser and in the email you send. Phase two moves orders and files to private storage tied to the order number.', '1차에서는 주문이 이 브라우저와 보내신 메일에 남습니다. 2차에서는 주문과 파일이 주문번호에 연결된 비공개 저장소로 이전됩니다.', '第1段階では注文はこのブラウザと送信メールに残ります。第2段階で注文とファイルは注文番号に紐づく非公開ストレージへ移ります。', '第一阶段订单保存在此浏览器与您发送的邮件中。第二阶段将移至与订单号绑定的私有存储。', 'En la fase uno el pedido queda en este navegador y en el correo. En la fase dos pasa a almacenamiento privado por pedido.', 'Giai đoạn 1 đơn lưu trong trình duyệt và email. Giai đoạn 2 chuyển sang lưu trữ riêng theo mã đơn.'],

    /* ---- contact ---- */
    ['contact_kicker', '08 CONTACT', '08 CONTACT', '08 お問い合わせ', '08 联系', '08 CONTACTO', '08 LIÊN HỆ'],
    ['contact_title', 'Tell us what you are making.', '무엇을 만들고 있는지 알려주세요.', '何を作っているか教えてください。', '告诉我们你在做什么。', 'Cuéntanos qué estás creando.', 'Cho chúng tôi biết bạn đang làm gì.'],
    ['contact_lede', 'Send a short brief and we reply with a direction and a fixed quote — usually within one business day.', '짧은 브리프를 보내주시면 방향과 고정 견적을 보통 영업일 하루 안에 회신합니다.', '短いブリーフをお送りいただければ、方向性と確定見積もりを通常1営業日以内に返信します。', '发送简短需求，我们通常在一个工作日内回复方向与确定报价。', 'Envía un breve resumen y respondemos con dirección y precio fijo en un día laborable.', 'Gửi mô tả ngắn, chúng tôi trả lời hướng và giá cố định trong 1 ngày làm việc.'],
    ['contact_email_label', 'Email', '이메일', 'メール', '邮箱', 'Correo', 'Email'],
    ['contact_phone_label', 'Phone', '전화', '電話', '电话', 'Teléfono', 'Điện thoại'],
    ['contact_reply_label', 'Response', '회신', '返信', '回复', 'Respuesta', 'Phản hồi'],
    ['contact_reply', 'Within 1 business day, Mon–Fri', '영업일 1일 이내 (월–금)', '1営業日以内（月〜金）', '一个工作日内（周一至周五）', 'En 1 día laborable (lun–vie)', 'Trong 1 ngày làm việc (T2–T6)'],
    ['contact_scope_1', 'Cafés, clinics, studios and local services', '카페, 클리닉, 스튜디오, 지역 서비스', 'カフェ、クリニック、スタジオ、地域サービス', '咖啡馆、诊所、工作室与本地服务', 'Cafés, clínicas, estudios y servicios', 'Cà phê, phòng khám, studio, dịch vụ'],
    ['contact_scope_2', 'Brands selling in two or more languages', '두 개 이상 언어로 판매하는 브랜드', '2言語以上で販売するブランド', '以两种以上语言销售的品牌', 'Marcas en dos o más idiomas', 'Thương hiệu bán từ 2 ngôn ngữ'],
    ['contact_scope_3', 'Shops that need a detail page this week', '이번 주에 상세페이지가 필요한 쇼핑몰', '今週詳細ページが必要なショップ', '本周就需要详情页的店铺', 'Tiendas que necesitan una página esta semana', 'Shop cần trang chi tiết trong tuần này'],
    ['form_name', 'Name', '이름', 'お名前', '姓名', 'Nombre', 'Họ tên'],
    ['form_email', 'Email', '이메일', 'メール', '邮箱', 'Correo', 'Email'],
    ['form_type', 'Project type', '프로젝트 유형', 'プロジェクト種別', '项目类型', 'Tipo de proyecto', 'Loại dự án'],
    ['form_when', 'Ideal start', '희망 시작 시점', '希望開始時期', '希望开始时间', 'Inicio deseado', 'Thời gian mong muốn'],
    ['form_msg', 'What do you need?', '무엇이 필요하신가요?', 'ご要望は？', '你需要什么？', '¿Qué necesitas?', 'Bạn cần gì?'],
    ['form_ph_name', 'Your name', '성함', 'お名前', '您的姓名', 'Tu nombre', 'Tên của bạn'],
    ['form_ph_email', 'you@company.com', 'you@company.com', 'you@company.com', 'you@company.com', 'tu@empresa.com', 'ban@congty.com'],
    ['form_ph_msg', 'Product, page length, deadline, references…', '상품, 페이지 분량, 일정, 참고 사이트…', '商品、分量、納期、参考サイト…', '商品、页长、工期、参考…', 'Producto, longitud, plazo, referencias…', 'Sản phẩm, độ dài, hạn, tham chiếu…'],
    ['form_submit', 'Send inquiry', '문의 보내기', '送信する', '发送咨询', 'Enviar consulta', 'Gửi yêu cầu'],
    ['form_note', 'Submitting opens your email app prefilled for atelierweb.seoul@gmail.com, and you can copy the brief below.', '보내기를 누르면 atelierweb.seoul@gmail.com 앞으로 메일 작성 창이 열리고, 아래에서 브리프를 복사할 수 있습니다.', '送信を押すと atelierweb.seoul@gmail.com 宛てのメール作成画面が開き、下から内容をコピーできます。', '点击发送会打开发往 atelierweb.seoul@gmail.com 的邮件窗口，也可复制需求。', 'Al enviar se abre tu correo con atelierweb.seoul@gmail.com y puedes copiar el resumen.', 'Gửi sẽ mở email tới atelierweb.seoul@gmail.com và bạn có thể sao chép nội dung.'],
    ['form_success', 'Brief ready — if your mail app did not open, use the direct mail button or Copy brief below.', '문의 내용이 준비됐습니다. 메일 앱이 열리지 않으면 직접 메일 열기 또는 브리프 복사를 눌러 주세요.', '内容を用意しました。メールが開かない場合は、直接送信リンクかコピーをご利用ください。', '内容已准备好。若邮件未打开，请使用直接发信或复制。', 'Resumen listo. Si el correo no abrió, usa el enlace directo o copiar.', 'Nội dung sẵn sàng. Nếu email không mở, dùng nút gửi trực tiếp hoặc sao chép.'],
    ['form_copy', 'Copy brief', '브리프 복사', 'コピー', '复制需求', 'Copiar resumen', 'Sao chép'],
    ['form_mail', 'Open mail app', '직접 메일 열기', 'メールを開く', '直接发邮件', 'Abrir correo', 'Mở email'],
    ['form_consent', 'I agree to the collection and use of my personal information for this inquiry.', '문의 응대를 위한 개인정보 수집·이용에 동의합니다.', 'お問い合わせ対応のための個人情報の収集・利用に同意します。', '我同意为处理咨询而收集和使用个人信息。', 'Acepto la recogida y uso de mis datos para esta consulta.', 'Tôi đồng ý thu thập và sử dụng thông tin cá nhân để xử lý.'],
    ['opt_new', 'New website', '새 웹사이트', '新規サイト', '新网站', 'Sitio nuevo', 'Website mới'],
    ['opt_redesign', 'Redesign', '리디자인', 'リニューアル', '改版', 'Rediseño', 'Làm mới'],
    ['opt_multi', 'Multilingual expansion', '다국어 확장', '多言語展開', '多语言扩展', 'Expansión multilingüe', 'Mở rộng đa ngôn ngữ'],
    ['opt_landing', 'Landing page', '랜딩 페이지', 'ランディングページ', '落地页', 'Landing page', 'Landing page'],
    ['opt_other', 'Design product', '디자인 상품', 'デザイン商品', '设计商品', 'Producto de diseño', 'Sản phẩm thiết kế'],
    ['opt_48h', 'Within 48 hours', '48시간 이내', '48時間以内', '48 小时内', 'En 48 horas', 'Trong 48 giờ'],
    ['opt_week', 'This week', '이번 주', '今週中', '本周', 'Esta semana', 'Tuần này'],
    ['opt_month', 'This month', '이번 달', '今月中', '本月', 'Este mes', 'Tháng này'],
    ['opt_flex', 'Still flexible', '아직 유연함', 'まだ未定', '暂未确定', 'Aún flexible', 'Chưa cố định'],

    /* ---- footer / legal ---- */
    ['foot_tagline', 'Atelier Web — design studio and online shop. Detail pages, six-language websites, web design, SNS and print, produced by the same team that quotes them.', 'Atelier Web — 디자인 스튜디오 겸 온라인 쇼핑몰. 상세페이지, 6개국어 웹사이트, 웹디자인, SNS, 인쇄물을 견적 낸 팀이 그대로 제작합니다.', 'Atelier Web — デザインスタジオ兼オンラインショップ。詳細ページ、6言語サイト、ウェブデザイン、SNS、印刷物を見積もったチームがそのまま制作します。', 'Atelier Web — 设计工作室与在线商店。详情页、六语网站、网页设计、SNS 与印刷品，由报价团队直接制作。', 'Atelier Web — estudio y tienda online. Páginas, sitios en seis idiomas, diseño web, SNS e impresos por el mismo equipo.', 'Atelier Web — studio và cửa hàng online. Trang chi tiết, website 6 ngôn ngữ, thiết kế web, SNS và ấn phẩm in do cùng đội thực hiện.'],
    ['foot_nav', 'Sections', '섹션', 'セクション', '版块', 'Secciones', 'Mục'],
    ['foot_products', 'Products', '상품', '商品', '商品', 'Productos', 'Sản phẩm'],
    ['foot_contact', 'Contact', '연락', '連絡先', '联系', 'Contacto', 'Liên hệ'],
    ['foot_account', 'Account', '계정', 'アカウント', '账户', 'Cuenta', 'Tài khoản'],
    ['foot_privacy', 'Privacy policy', '개인정보처리방침', 'プライバシーポリシー', '隐私政策', 'Política de privacidad', 'Chính sách riêng tư'],
    ['foot_terms', 'Terms of service', '이용약관', '利用規約', '使用条款', 'Términos de servicio', 'Điều khoản'],
    ['biz_h', 'Business information', '사업자 정보', '事業者情報', '商户信息', 'Datos del negocio', 'Thông tin doanh nghiệp'],
    ['biz_company_l', 'Operator', '상호', '商号', '商户', 'Titular', 'Đơn vị'],
    ['biz_company_v', 'Campusway · brand Atelier Web', '캠퍼스웨이(Campusway) · 브랜드 아틀리에 웹(Atelier Web)', 'Campusway（ブランド：Atelier Web）', 'Campusway（品牌：Atelier Web）', 'Campusway · marca Atelier Web', 'Campusway · thương hiệu Atelier Web'],
    ['biz_ceo_l', 'Representative', '대표자', '代表者', '代表人', 'Representante', 'Đại diện'],
    ['biz_ceo_v', 'Go Eun-ha', '고은하', 'Go Eun-ha', '高恩河', 'Go Eun-ha', 'Go Eun-ha'],
    ['biz_reg_l', 'Business registration no.', '사업자등록번호', '事業者登録番号', '营业执照号', 'N.º de registro', 'Mã số doanh nghiệp'],
    ['biz_privacy_l', 'Privacy officer', '개인정보보호책임자', '個人情報保護責任者', '隐私负责人', 'Responsable de privacidad', 'Phụ trách dữ liệu'],
    ['biz_addr_l', 'Registered address', '사업장 소재지', '所在地', '注册地址', 'Domicilio', 'Địa chỉ'],
    ['biz_email_l', 'Contact', '고객문의', 'お問い合わせ', '联系', 'Contacto', 'Liên hệ'],
    ['biz_tel_l', 'Phone', '전화', '電話', '电话', 'Teléfono', 'Điện thoại'],
    ['biz_mailorder_l', 'Mail-order sales', '통신판매업 신고', '通信販売業の届出', '网络销售备案', 'Venta a distancia', 'Bán hàng online'],
    ['biz_mailorder_v', 'Registration pending — filed once the PG purchase-safety (escrow) certificate is issued', 'PG 구매안전서비스 확인증 발급 후 신고 등록 예정', 'PG購入安全サービス証明書の発行後に届出予定', '待支付机构出具购买安全证明后备案', 'Pendiente: se registra al emitirse el certificado del PG', 'Chờ chứng nhận escrow của PG để đăng ký'],
    ['foot_refund', 'Refunds: 100% before work begins; once design or development has started, settlement is agreed according to the stage reached.', '환불·취소: 작업 착수 전에는 100% 환불 가능하며, 시안·개발 착수 후에는 진행 단계에 따라 협의해 정산합니다.', '返金・キャンセル：着手前は100%返金、デザイン・開発着手後は進行段階に応じて協議のうえ精算します。', '退款与取消：开工前 100% 退款；设计或开发开始后按进度协商结算。', 'Reembolsos: 100% antes de empezar; después se acuerda según la etapa.', 'Hoàn tiền: 100% trước khi bắt đầu; sau đó thoả thuận theo giai đoạn.'],
    ['foot_rights', '© 2026 Atelier Web', '© 2026 Atelier Web', '© 2026 Atelier Web', '© 2026 Atelier Web', '© 2026 Atelier Web', '© 2026 Atelier Web'],
    ['foot_lang', 'Language: EN · KO · JA · ZH · ES · VI', '언어: EN · KO · JA · ZH · ES · VI', '言語: EN · KO · JA · ZH · ES · VI', '语言: EN · KO · JA · ZH · ES · VI', 'Idioma: EN · KO · JA · ZH · ES · VI', 'Ngôn ngữ: EN · KO · JA · ZH · ES · VI'],
    ['legal_privacy_title', 'Privacy policy', '개인정보처리방침', 'プライバシーポリシー', '隐私政策', 'Política de privacidad', 'Chính sách quyền riêng tư'],
    ['legal_terms_title', 'Terms of service', '이용약관', '利用規約', '使用条款', 'Términos del servicio', 'Điều khoản dịch vụ'],
    ['legal_privacy_body', '<h4>1. What we collect</h4><ul><li>Order: name, email, phone number, business or brand name, order details</li><li>Design request: references, brand colours, files you choose to send</li><li>Test stage: stored in your browser storage only, plus the email you send</li></ul><h4>2. Why we collect it</h4><ul><li>To produce the ordered design, contact you about the order and keep the order record</li><li>Not used for advertising or sold to a third party</li></ul><h4>3. How long we keep it</h4><ul><li>Orders and submitted materials: 3 years after delivery, then deleted</li><li>Inquiry emails: 1 year</li></ul><h4>4. Your rights</h4><ul><li>You may request access, correction or deletion at any time by email</li><li>Requests are answered within 10 business days</li></ul><h4>5. Responsible person</h4><ul><li>Go Eun-ha · atelierweb.seoul@gmail.com</li></ul>',
      '<h4>1. 수집하는 정보</h4><ul><li>주문: 이름, 이메일, 연락처, 업체·브랜드명, 주문 내역</li><li>디자인 요청: 레퍼런스, 브랜드 컬러, 제출하신 파일</li><li>테스트 단계: 브라우저 저장소와 보내신 메일에만 보관</li></ul><h4>2. 이용 목적</h4><ul><li>주문된 디자인 제작, 주문 관련 연락, 주문 기록 보관</li><li>광고에 사용하거나 제3자에게 판매하지 않습니다</li></ul><h4>3. 보관 기간</h4><ul><li>주문 및 제출 자료: 납품 후 3년 뒤 삭제</li><li>문의 메일: 1년</li></ul><h4>4. 정보주체의 권리</h4><ul><li>언제든지 이메일로 열람·정정·삭제를 요청할 수 있습니다</li><li>요청은 영업일 10일 이내에 회신합니다</li></ul><h4>5. 책임자</h4><ul><li>고은하 · atelierweb.seoul@gmail.com</li></ul>',
      '<h4>1. 収集する情報</h4><ul><li>注文：氏名、メール、電話番号、事業者・ブランド名、注文内容</li><li>デザイン依頼：参考資料、ブランドカラー、提出ファイル</li><li>テスト段階：ブラウザ保存領域と送信メールのみ</li></ul><h4>2. 利用目的</h4><ul><li>注文デザインの制作、注文に関する連絡、記録の保管</li><li>広告利用や第三者への販売は行いません</li></ul><h4>3. 保管期間</h4><ul><li>注文と提出資料：納品後3年で削除</li><li>お問い合わせメール：1年</li></ul><h4>4. 権利</h4><ul><li>いつでもメールで開示・訂正・削除を請求できます</li><li>10営業日以内に回答します</li></ul><h4>5. 責任者</h4><ul><li>Go Eun-ha · atelierweb.seoul@gmail.com</li></ul>',
      '<h4>1. 我们收集的信息</h4><ul><li>订单：姓名、邮箱、电话、商户或品牌名、订单内容</li><li>设计需求：参考、品牌色、您提交的文件</li><li>测试阶段：仅保存在浏览器存储与您发送的邮件中</li></ul><h4>2. 使用目的</h4><ul><li>制作所订设计、订单联络、保存订单记录</li><li>不用于广告，不出售给第三方</li></ul><h4>3. 保存期限</h4><ul><li>订单与提交资料：交付后 3 年删除</li><li>咨询邮件：1 年</li></ul><h4>4. 您的权利</h4><ul><li>可随时邮件申请查阅、更正或删除</li><li>10 个工作日内回复</li></ul><h4>5. 负责人</h4><ul><li>Go Eun-ha · atelierweb.seoul@gmail.com</li></ul>',
      '<h4>1. Qué recogemos</h4><ul><li>Pedido: nombre, correo, teléfono, marca, detalle del pedido</li><li>Solicitud de diseño: referencias, colores, archivos enviados</li><li>Fase de prueba: solo en el almacenamiento del navegador y el correo</li></ul><h4>2. Para qué</h4><ul><li>Producir el diseño, contactar sobre el pedido y conservar el registro</li><li>No se usa para publicidad ni se vende a terceros</li></ul><h4>3. Cuánto tiempo</h4><ul><li>Pedidos y materiales: 3 años tras la entrega</li><li>Correos de consulta: 1 año</li></ul><h4>4. Tus derechos</h4><ul><li>Puedes pedir acceso, corrección o supresión por correo</li><li>Respondemos en 10 días laborables</li></ul><h4>5. Responsable</h4><ul><li>Go Eun-ha · atelierweb.seoul@gmail.com</li></ul>',
      '<h4>1. Thông tin thu thập</h4><ul><li>Đơn hàng: tên, email, điện thoại, thương hiệu, nội dung đơn</li><li>Yêu cầu thiết kế: tham chiếu, màu thương hiệu, tệp gửi kèm</li><li>Giai đoạn thử: chỉ trong bộ nhớ trình duyệt và email</li></ul><h4>2. Mục đích</h4><ul><li>Thiết kế theo đơn, liên hệ về đơn, lưu hồ sơ</li><li>Không dùng quảng cáo, không bán cho bên thứ ba</li></ul><h4>3. Thời gian lưu</h4><ul><li>Đơn và tài liệu: 3 năm sau giao</li><li>Email tư vấn: 1 năm</li></ul><h4>4. Quyền của bạn</h4><ul><li>Có thể yêu cầu xem, sửa, xoá qua email</li><li>Phản hồi trong 10 ngày làm việc</li></ul><h4>5. Phụ trách</h4><ul><li>Go Eun-ha · atelierweb.seoul@gmail.com</li></ul>'],
    ['legal_terms_body', '<h4>1. Service</h4><ul><li>Atelier Web produces design goods and websites to the scope shown on each product page.</li><li>Fixed-price items are ordered with the options selected at checkout.</li></ul><h4>2. Payment</h4><ul><li>Prices are supply price plus 10% VAT unless stated otherwise.</li><li>Current checkout is a test-order mode: no card is charged. Real payment is connected with PayApp in phase two.</li></ul><h4>3. Production and revision</h4><ul><li>Production begins once payment and required materials are in.</li><li>One basic revision is included inside the confirmed direction; full re-planning is quoted separately.</li></ul><h4>4. Refund and cancellation</h4><ul><li>100% refund before work begins.</li><li>After work begins, settlement follows the stage reached.</li></ul><h4>5. Copyright</h4><ul><li>On final payment, the right to use the delivered design transfers to the client.</li><li>Source files transfer only when the source option is purchased.</li></ul>',
      '<h4>1. 서비스</h4><ul><li>Atelier Web은 상품 페이지에 표시된 범위대로 디자인물과 웹사이트를 제작합니다.</li><li>단가 확정 상품은 결제 화면에서 선택한 옵션으로 주문됩니다.</li></ul><h4>2. 결제</h4><ul><li>별도 표기가 없으면 가격은 공급가에 부가세 10%를 더한 금액입니다.</li><li>현재 결제는 테스트 주문 모드로 실제 카드 청구가 없습니다. 실결제는 2차에서 페이앱으로 연결됩니다.</li></ul><h4>3. 제작과 수정</h4><ul><li>결제와 필요 자료가 확인된 시점부터 제작을 시작합니다.</li><li>확정된 방향 안에서 기본 수정 1회가 포함되며, 전면 재기획은 별도 견적입니다.</li></ul><h4>4. 환불·취소</h4><ul><li>작업 착수 전에는 100% 환불됩니다.</li><li>착수 후에는 진행 단계에 따라 정산합니다.</li></ul><h4>5. 저작권</h4><ul><li>최종 대금 결제 시 납품된 디자인의 사용 권리가 고객에게 이전됩니다.</li><li>원본 파일은 원본 옵션을 구매한 경우에만 이전됩니다.</li></ul>',
      '<h4>1. サービス</h4><ul><li>Atelier Webは商品ページに示された範囲でデザインとサイトを制作します。</li><li>単価確定商品は決済画面で選んだオプションで注文されます。</li></ul><h4>2. 決済</h4><ul><li>別段の記載がない限り、価格は供給価格に10％の税を加えた額です。</li><li>現在の決済はテスト注文モードで、実際の請求はありません。実決済は第2段階でPayAppにより接続します。</li></ul><h4>3. 制作と修正</h4><ul><li>決済と必要資料の確認後に制作を開始します。</li><li>確定した方向の範囲で基本修正1回を含み、全面的な再企画は別途見積もりです。</li></ul><h4>4. 返金・キャンセル</h4><ul><li>着手前は100％返金します。</li><li>着手後は進行段階に応じて精算します。</li></ul><h4>5. 著作権</h4><ul><li>最終決済により、納品デザインの利用権はお客様に移転します。</li><li>元データは元データオプション購入時のみ移転します。</li></ul>',
      '<h4>1. 服务</h4><ul><li>Atelier Web 按商品页面所示范围制作设计与网站。</li><li>定价商品按结算页面所选选项下单。</li></ul><h4>2. 付款</h4><ul><li>除另有说明，价格为供应价加 10% 增值税。</li><li>当前为测试下单模式，不会实际扣款。真实支付将在第二阶段通过 PayApp 接入。</li></ul><h4>3. 制作与修改</h4><ul><li>确认付款与所需资料后开始制作。</li><li>含一次约定方向内的基础修改，全面重做另行报价。</li></ul><h4>4. 退款与取消</h4><ul><li>开工前 100% 退款。</li><li>开工后按进度结算。</li></ul><h4>5. 著作权</h4><ul><li>付清全款后，交付设计的使用权转移给客户。</li><li>源文件仅在购买源文件选项时转移。</li></ul>',
      '<h4>1. Servicio</h4><ul><li>Atelier Web produce diseños y sitios en el alcance indicado en cada página.</li><li>Los artículos con precio se piden con las opciones del pago.</li></ul><h4>2. Pago</h4><ul><li>Los precios son precio base más 10% de IVA salvo indicación.</li><li>El pago actual es modo de prueba: no se cobra. El pago real se conecta con PayApp en la fase dos.</li></ul><h4>3. Producción y revisión</h4><ul><li>La producción empieza con el pago y los materiales.</li><li>Incluye una revisión básica; replanificar se cotiza aparte.</li></ul><h4>4. Reembolso</h4><ul><li>100% antes de empezar; después, según la etapa.</li></ul><h4>5. Derechos</h4><ul><li>Al pagar, el derecho de uso pasa al cliente.</li><li>Los archivos fuente solo con la opción de fuente.</li></ul>',
      '<h4>1. Dịch vụ</h4><ul><li>Atelier Web sản xuất thiết kế và website theo phạm vi ghi trên trang sản phẩm.</li><li>Sản phẩm có giá được đặt theo tuỳ chọn ở bước thanh toán.</li></ul><h4>2. Thanh toán</h4><ul><li>Giá là giá gốc cộng VAT 10% trừ khi có ghi khác.</li><li>Hiện là chế độ đơn thử, không thu thẻ. Thanh toán thật kết nối PayApp ở giai đoạn 2.</li></ul><h4>3. Sản xuất và sửa</h4><ul><li>Bắt đầu khi đã thanh toán và có tài liệu.</li><li>Gồm một lần sửa cơ bản; làm lại toàn bộ tính riêng.</li></ul><h4>4. Hoàn tiền</h4><ul><li>100% trước khi bắt đầu; sau đó theo giai đoạn.</li></ul><h4>5. Bản quyền</h4><ul><li>Thanh toán xong, quyền sử dụng chuyển cho khách.</li><li>Tệp nguồn chỉ khi mua tuỳ chọn nguồn.</li></ul>'],
    ['noscript', 'JavaScript is off. Turn it on in Safari or Chrome to use the language switch and the shop.', 'JavaScript가 꺼져 있습니다. Safari나 Chrome에서 켜야 언어 전환과 구매 기능을 사용할 수 있습니다.', 'JavaScriptが無効です。SafariまたはChromeで有効にすると、言語切替と購入機能が使えます。', 'JavaScript 已关闭。请在 Safari 或 Chrome 中开启以使用语言切换与购买功能。', 'JavaScript está desactivado. Actívalo en Safari o Chrome para usar el cambio de idioma y la tienda.', 'JavaScript đang tắt. Bật trong Safari hoặc Chrome để dùng đổi ngôn ngữ và mua hàng.'],

    /* ---- services page ---- */
    ['svc_page_kicker', 'Products & services', '상품 & 서비스', '商品とサービス', '商品与服务', 'Productos y servicios', 'Sản phẩm & dịch vụ'],
    ['svc_page_title', 'Design service<br><em>products.</em>', '디자인 서비스<br><em>상품 목록.</em>', 'デザインサービス<br><em>商品一覧。</em>', '设计服务<br><em>商品列表。</em>', 'Productos de<br><em>diseño.</em>', 'Sản phẩm<br><em>dịch vụ thiết kế.</em>'],
    ['svc_page_lede', 'Every item we sell, in one list. Priced items can be bought online; the rest are quoted after a short brief — no price is set for you without asking.', '판매하는 모든 상품을 한 목록에 정리했습니다. 단가가 있는 상품은 온라인 구매가 가능하고, 나머지는 짧은 브리프 후 견적을 드립니다. 임의 가격은 만들지 않습니다.', '販売中の全商品を1つの一覧に。単価のある商品はオンライン購入でき、それ以外は短いヒアリング後に見積もります。勝手な価格は作りません。', '所有在售商品汇于一页。有定价的可在线购买，其余在简短沟通后报价，不擅自定价。', 'Todos nuestros artículos en una lista. Los que tienen precio se compran online; el resto se cotiza.', 'Toàn bộ sản phẩm trong một danh sách. Có giá thì mua online; còn lại báo giá.'],
    ['filter_all', 'All products', '전체 상품', '全商品', '全部商品', 'Todos', 'Tất cả'],
    ['badge_buy', 'Buy online', '온라인 구매', 'オンライン購入', '在线购买', 'Compra online', 'Mua online'],
    ['badge_quote', 'Quote request', '견적 문의', '見積もり依頼', '索取报价', 'Pedir presupuesto', 'Yêu cầu báo giá'],
    ['price_quote', 'Quote request', '견적 문의', '見積もり依頼', '索取报价', 'A pedir presupuesto', 'Yêu cầu báo giá'],
    ['price_from', 'from', '부터', '〜', '起', 'desde', 'từ'],
    ['price_vat', 'VAT included', '부가세 포함', '税込', '含增值税', 'IVA incluido', 'gồm VAT'],
    ['price_vat_add', 'VAT excluded', '부가세 별도', '税別', '不含税', 'IVA aparte', 'chưa VAT'],
    ['prod_view', 'View details', '상품 상세보기', '商品詳細を見る', '查看商品详情', 'Ver el producto', 'Xem chi tiết'],
    ['svc_side_note', 'Categories follow the same six groups used in the catalogue, so a new product only needs one data entry.', '카테고리는 카탈로그와 동일한 6개 그룹입니다. 새 상품은 데이터 한 줄만 추가하면 목록·상세·주문에 함께 나타납니다.', 'カテゴリはカタログと同じ6グループ。新商品はデータ1行の追加で一覧・詳細・注文に反映されます。', '分类与目录的六个组一致，新商品只需增加一条数据即可出现在列表、详情与订单中。', 'Las categorías son los seis grupos del catálogo: un producto nuevo solo necesita una entrada de datos.', 'Nhóm giống catalogue: sản phẩm mới chỉ cần một dòng dữ liệu.'],

    /* ---- product detail ---- */
    ['pd_options', 'Options', '옵션 선택', 'オプション', '选项', 'Opciones', 'Tuỳ chọn'],
    ['pd_qty', 'Quantity', '수량', '数量', '数量', 'Cantidad', 'Số lượng'],
    ['pd_supply', 'Supply price', '공급가', '供給価格', '供应价', 'Precio base', 'Giá gốc'],
    ['pd_vat_line', 'VAT (10%)', '부가세 (10%)', '消費税（10%）', '增值税（10%）', 'IVA (10%)', 'VAT (10%)'],
    ['pd_total', 'Total', '총 결제 금액', '合計金額', '合计金额', 'Total', 'Tổng cộng'],
    ['pd_buy', 'Buy now', '구매하기', '購入する', '立即购买', 'Comprar', 'Mua ngay'],
    ['pd_add_cart', 'Add to cart', '장바구니', 'カートに入れる', '加入购物车', 'Al carrito', 'Thêm vào giỏ'],
    ['pd_ask', 'Request a quote', '견적 문의하기', '見積もりを依頼', '索取报价', 'Pedir presupuesto', 'Yêu cầu báo giá'],
    ['pd_tab_info', 'Details', '상세정보', '詳細情報', '详细信息', 'Detalles', 'Chi tiết'],
    ['pd_tab_process', 'Process', '진행절차', '進行手順', '进行流程', 'Proceso', 'Quy trình'],
    ['pd_tab_notes', 'Notes', '유의사항', '注意事項', '注意事项', 'Notas', 'Lưu ý'],
    ['pd_tab_faq', 'FAQ', 'FAQ', 'FAQ', '常见问题', 'FAQ', 'FAQ'],
    ['pd_includes', 'What is included', '기본 제공 사항', '基本提供内容', '基本包含内容', 'Qué incluye', 'Bao gồm'],
    ['pd_revision', 'Basic revision scope', '기본 수정 범위', '基本修正の範囲', '基础修改范围', 'Alcance de la revisión', 'Phạm vi sửa cơ bản'],
    ['pd_price_note', 'All amounts are calculated as supply price + 10% VAT. The total shown is the amount you would pay.', '모든 금액은 공급가 + 부가세 10%로 계산됩니다. 표시된 총액이 결제 금액입니다.', 'すべて供給価格＋10％の税で計算されます。表示の合計が支払額です。', '所有金额按供应价 + 10% 增值税计算，显示总额即应付金额。', 'Todo se calcula como precio base + 10% IVA. El total mostrado es lo que pagarías.', 'Mọi số tiền là giá gốc + VAT 10%. Tổng hiển thị là số phải trả.'],
    ['pd_quote_note', 'This item has no fixed price. Send a short brief and we reply with a written quote — the price is never invented on the page.', '이 상품은 확정 단가가 없습니다. 짧은 브리프를 보내주시면 서면 견적을 드립니다. 페이지에 임의 가격을 표시하지 않습니다.', 'この商品に確定単価はありません。短いブリーフをお送りいただければ書面で見積もります。ページに勝手な価格は表示しません。', '该商品没有固定价格。发送简短需求，我们以书面报价回复，不会在页面擅自标价。', 'Este artículo no tiene precio fijo. Envía un resumen y respondemos con presupuesto escrito.', 'Sản phẩm không có giá cố định. Gửi mô tả ngắn, chúng tôi báo giá bằng văn bản.'],
    ['pd_cat_label', 'Category', '카테고리', 'カテゴリ', '分类', 'Categoría', 'Nhóm'],
    ['pd_purchase', 'How to order', '구매 방식', '購入方法', '购买方式', 'Cómo pedir', 'Cách đặt'],
    ['pd_options_label', 'Options', '옵션', 'オプション', '选项', 'Opciones', 'Tuỳ chọn'],
    ['pd_turnaround', 'Production time', '제작 기간', '制作期間', '制作周期', 'Plazo de producción', 'Thời gian sản xuất'],
    ['pd_related', 'Related items', '같은 카테고리 상품', '同カテゴリの商品', '同类商品', 'Artículos relacionados', 'Sản phẩm cùng nhóm'],
    ['pd_sticky_total', 'Total', '총액', '合計', '总额', 'Total', 'Tổng'],
    ['pd_plan_note', 'Planning included covers content structure and copywriting. Without it, you send the plan, copy and photos.', '기획 포함은 콘텐츠 구성과 카피라이팅을 포함합니다. 미포함이면 기획안·원고·사진을 고객이 제출합니다.', '企画込みは構成とコピーを含みます。なしの場合は企画書・原稿・写真をご提出ください。', '含策划包括内容结构与文案；不含时由客户提策划、文案与照片。', 'Con planificación: estructura y textos. Sin ella, envías plan, textos y fotos.', 'Có kế hoạch: cấu trúc và nội dung. Không: bạn gửi kế hoạch, nội dung, ảnh.'],
    ['pd_source_note', 'Source file is charged once per product, not per page length.', '원본 파일은 페이지 길이와 무관하게 상품 1개당 1회 청구됩니다.', '元データは長さに関係なく商品1点につき1回の課金です。', '源文件按每件商品计一次，与页长无关。', 'El archivo fuente se cobra una vez por producto.', 'Tệp nguồn tính một lần mỗi sản phẩm.'],
    ['pd_no_options', 'This item is produced after a short quotation. Use the button below to send your brief — no option calculator is shown because no unit price has been set.', '이 상품은 견적 후 제작합니다. 아래 버튼으로 브리프를 보내주세요. 단가가 확정되지 않아 옵션 계산기는 제공하지 않습니다.', 'この商品は見積もり後に制作します。下のボタンからご依頼ください。単価未定のため計算機は表示しません。', '该商品报价后制作。请用下方按钮发送需求。因单价未定，不提供计算器。', 'Este artículo se produce tras presupuesto. Usa el botón para enviar tu resumen; no hay calculadora porque no hay precio unitario.', 'Sản phẩm làm sau khi báo giá. Dùng nút bên dưới để gửi mô tả; không có máy tính vì chưa có đơn giá.'],

    /* ---- cart / order ---- */
    ['order_kicker', 'Cart', '장바구니', 'カート', '购物车', 'Carrito', 'Giỏ hàng'],
    ['order_title', 'Cart &amp; <em>test order.</em>', '장바구니 &amp; <em>테스트 주문.</em>', 'カート＆<em>テスト注文。</em>', '购物车与<em>测试下单</em>', 'Carrito y <em>pedido de prueba</em>', 'Giỏ hàng và <em>đơn thử</em>'],
    ['order_empty_t', 'Your cart is empty.', '장바구니가 비어 있습니다.', 'カートは空です。', '购物车是空的。', 'Tu carrito está vacío.', 'Giỏ hàng trống.'],
    ['order_empty_p', 'Pick a design item and add it here — the detail page calculator sets the price.', '디자인 상품을 골라 담아 주세요. 상세 페이지 계산기에서 금액이 정해집니다.', 'デザイン商品を選んで追加してください。詳細ページの計算機で金額が決まります。', '挑选设计商品加入购物车，价格由详情页计算器确定。', 'Elige un artículo y añádelo: el calculador de la página fija el precio.', 'Chọn sản phẩm và thêm vào: máy tính ở trang chi tiết đặt giá.'],
    ['order_summary', 'Order summary', '주문 요약', '注文概要', 'Resumen del pedido', 'Tóm tắt đơn', 'Tóm tắt đơn'],
    ['sum_items', 'Items', '상품', '商品', '商品', 'Artículos', 'Sản phẩm'],
    ['sum_supply', 'Supply price', '공급가', '供給価格', '供应价', 'Precio base', 'Giá gốc'],
    ['sum_vat', 'VAT (10%)', '부가세 (10%)', '消費税（10%）', '增值税（10%）', 'IVA (10%)', 'VAT (10%)'],
    ['sum_total', 'Total', '총 결제 금액', '合計金額', '合计金额', 'Total', 'Tổng cộng'],
    ['order_checkout', 'Continue to test order', '테스트 주문으로 진행', 'テスト注文へ', '前往测试下单', 'Continuar al pedido', 'Tiếp tục đặt đơn'],
    ['order_test_flag', 'TEST MODE', '테스트 모드', 'テストモード', '测试模式', 'MODO PRUEBA', 'CHẾ ĐỘ THỬ'],
    ['order_test_text', 'This first build runs test orders only. No card is charged and no payment leaves the browser. Real payment is connected in phase two with PayApp and server-side verification.', '이번 1차 구축은 테스트 주문만 동작합니다. 카드 청구도, 외부 결제도 발생하지 않습니다. 실결제는 2차에서 페이앱과 서버 검증으로 연결됩니다.', 'この第1段階はテスト注文のみです。カード請求も外部決済も発生しません。実決済は第2段階でPayAppとサーバー検証により接続します。', '本阶段仅支持测试下单，不会扣款，也不会对外支付。真实支付将在第二阶段通过 PayApp 与服务器校验接入。', 'Esta primera versión solo permite pedidos de prueba. No se cobra ni sale ningún pago del navegador. El pago real llega en la fase dos.', 'Bản đầu chỉ chạy đơn thử. Không trừ thẻ, không thanh toán ra ngoài. Thanh toán thật ở giai đoạn 2.'],
    ['order_contact_h', 'Contact for this order', '주문자 정보', '注文者情報', '下单人信息', 'Datos del pedido', 'Thông tin đơn'],
    ['order_name', 'Name', '이름', 'お名前', '姓名', 'Nombre', 'Họ tên'],
    ['order_email', 'Email', '이메일', 'メール', '邮箱', 'Correo', 'Email'],
    ['order_phone', 'Phone', '연락처', '電話番号', '电话', 'Teléfono', 'Điện thoại'],
    ['order_consent', 'I agree to the collection and use of personal information described in the privacy policy.', '개인정보처리방침에 따른 개인정보 수집·이용에 동의합니다.', 'プライバシーポリシーに基づく個人情報の収集・利用に同意します。', '我同意按隐私政策收集和使用个人信息。', 'Acepto la recogida y uso de datos descritos en la política.', 'Tôi đồng ý thu thập và sử dụng dữ liệu theo chính sách.'],
    ['order_place', 'Place test order', '테스트 주문 생성', 'テスト注文を作成', '创建测试订单', 'Crear pedido de prueba', 'Tạo đơn thử'],
    ['order_remove', 'Remove', '삭제', '削除', '删除', 'Quitar', 'Xoá'],
    ['order_qty_label', 'Qty', '수량', '数量', '数量', 'Cant.', 'SL'],
    ['order_next_note', 'After the order you will be sent to the materials form with the order number attached.', '주문이 생성되면 주문번호가 붙은 자료 제출 화면으로 이동합니다.', '注文後、注文番号付きの資料提出画面へ移動します。', '下单后将跳转到附带订单号的资料提交页。', 'Tras el pedido irás al formulario de materiales con el número de pedido.', 'Sau khi đặt, bạn sẽ sang form tài liệu kèm mã đơn.'],

    /* ---- submit ---- */
    ['sub_kicker', 'Project submission', '작업 자료 제출', '資料提出', '提交资料', 'Entrega de materiales', 'Gửi tài liệu'],
    ['sub_title', 'Send the materials <em>for your order.</em>', '주문에 필요한 <em>작업 자료를 보내주세요.</em>', 'ご注文の<em>資料をお送りください。</em>', '发送订单所需的<em>工作资料</em>', 'Envía los materiales <em>de tu pedido.</em>', 'Gửi tài liệu <em>cho đơn của bạn.</em>'],
    ['sub_lede', 'Everything you send is tied to the order number. Payment, materials and production status are tracked separately, so you can always see which step is waiting on you.', '보내주신 자료는 주문번호에 연결됩니다. 결제·자료 제출·작업 상태를 따로 관리하므로 지금 어느 단계에서 기다리는지 항상 확인할 수 있습니다.', 'お送りいただいた資料は注文番号に紐づきます。決済・提出・作業状況を別々に管理するため、どの段階で待っているか常に分かります。', '提交内容与订单号绑定。付款、资料与制作状态分别管理，随时可见当前等待环节。', 'Todo lo enviado se vincula al pedido. Pago, materiales y producción se siguen por separado.', 'Mọi tài liệu gắn với mã đơn. Thanh toán, tài liệu và sản xuất theo dõi riêng.'],
    ['sub_pick_h', 'Select your order', '주문 선택', '注文を選択', '选择订单', 'Selecciona tu pedido', 'Chọn đơn'],
    ['sub_pick_empty', 'No order found in this browser. Place a test order first, then come back.', '이 브라우저에 주문이 없습니다. 먼저 테스트 주문을 만든 뒤 다시 와 주세요.', 'このブラウザに注文がありません。先にテスト注文を作成してください。', '此浏览器中没有订单。请先创建测试订单。', 'No hay pedidos en este navegador. Crea uno primero.', 'Không có đơn trong trình duyệt này. Hãy tạo đơn thử trước.'],
    ['sub_pick_go', 'Go to products', '상품 보러 가기', '商品へ', '去看商品', 'Ir a productos', 'Xem sản phẩm'],
    ['sub_basic_h', 'Basic information', '기본 정보', '基本情報', '基本信息', 'Información básica', 'Thông tin cơ bản'],
    ['sub_basic_sub', 'Who we are producing for and where the item is sold today.', '누구를 위해 만들고, 지금 어디에서 판매 중인지 알려 주세요.', '誰のために作り、現在どこで販売しているかを教えてください。', '请告知为谁制作，以及目前在何处销售。', 'Para quién producimos y dónde se vende hoy.', 'Làm cho ai và hiện bán ở đâu.'],
    ['f_company', 'Business / brand name', '업체명 / 브랜드명', '事業者名／ブランド名', '商户名 / 品牌名', 'Empresa / marca', 'Tên shop / thương hiệu'],
    ['f_manager', 'Contact name', '담당자명', '担当者名', '联系人', 'Persona de contacto', 'Người phụ trách'],
    ['f_phone', 'Phone', '연락처', '電話番号', '电话', 'Teléfono', 'Điện thoại'],
    ['f_email', 'Email', '이메일', 'メール', '邮箱', 'Correo', 'Email'],
    ['f_product', 'Product', '상품명', '商品名', '商品名', 'Producto', 'Sản phẩm'],
    ['f_saleslink', 'Current sales link', '기존 판매 링크', '既存の販売URL', '现有销售链接', 'Enlace de venta actual', 'Link bán hiện tại'],
    ['sub_design_h', 'Design requests', '디자인 요청사항', 'デザインのご要望', '设计需求', 'Peticiones de diseño', 'Yêu cầu thiết kế'],
    ['sub_design_sub', 'The more concrete, the fewer revisions later.', '구체적일수록 수정이 줄어듭니다.', '具体的なほど修正が減ります。', '越具体，后续修改越少。', 'Cuanto más concreto, menos revisiones.', 'Càng cụ thể càng ít sửa.'],
    ['f_style', 'Preferred style', '원하는 디자인 스타일', '希望するデザイン', '希望的设计风格', 'Estilo deseado', 'Phong cách mong muốn'],
    ['f_style_ph', 'Clean and minimal, warm and editorial, bold and promotional…', '깔끔하고 미니멀하게, 따뜻한 에디토리얼, 강한 프로모션 톤…', 'クリーンでミニマル、温かいエディトリアル、強いプロモーション調…', '干净极简、温暖编辑风、强促销风…', 'Limpio y minimal, cálido editorial, promocional fuerte…', 'Tối giản, biên tập ấm, khuyến mãi mạnh…'],
    ['f_color', 'Brand colours', '브랜드 컬러', 'ブランドカラー', '品牌色', 'Colores de marca', 'Màu thương hiệu'],
    ['f_color_ph', 'HEX codes, or describe the tone', 'HEX 코드 또는 색감 설명', 'HEXコードまたは色の説明', 'HEX 代码或色调描述', 'Códigos HEX o describe el tono', 'Mã HEX hoặc mô tả tông'],
    ['f_ref', 'Reference URLs', '레퍼런스 URL', '参考URL', '参考链接', 'URL de referencia', 'URL tham chiếu'],
    ['f_feature', 'Features to emphasise', '강조할 상품 특징', '強調する商品特徴', '需强调的商品特点', 'Características a destacar', 'Đặc điểm cần nhấn'],
    ['f_extra', 'Anything else', '추가 요청사항', 'その他のご要望', '其他要求', 'Otros comentarios', 'Yêu cầu khác'],
    ['sub_files_h', 'File upload', '파일 업로드', 'ファイルアップロード', '文件上传', 'Subir archivos', 'Tải tệp lên'],
    ['sub_files_sub', 'Allowed: JPG, PNG, WEBP, GIF, PDF, AI, PSD, ZIP · up to 20 MB per file. Files are checked before the form is accepted.', '허용: JPG, PNG, WEBP, GIF, PDF, AI, PSD, ZIP · 파일당 20MB까지. 접수 전에 형식과 용량을 검사합니다.', '許可：JPG、PNG、WEBP、GIF、PDF、AI、PSD、ZIP・1ファイル20MBまで。受付前に形式と容量を確認します。', '允许：JPG、PNG、WEBP、GIF、PDF、AI、PSD、ZIP，单个不超过 20MB。受理前校验格式与大小。', 'Permitido: JPG, PNG, WEBP, GIF, PDF, AI, PSD, ZIP · hasta 20 MB por archivo.', 'Cho phép: JPG, PNG, WEBP, GIF, PDF, AI, PSD, ZIP · tối đa 20MB/tệp.'],
    ['file_product_img', 'Product images', '상품 이미지', '商品画像', '商品图片', 'Imágenes del producto', 'Ảnh sản phẩm'],
    ['file_logo', 'Brand logo', '브랜드 로고', 'ブランドロゴ', '品牌标志', 'Logotipo', 'Logo thương hiệu'],
    ['file_copy', 'Detail page copy', '상세페이지 원고', '詳細ページ原稿', '详情页文案', 'Textos de la página', 'Nội dung trang'],
    ['file_plan', 'Planning document', '기획안', '企画書', '策划案', 'Documento de plan', 'Tài liệu kế hoạch'],
    ['file_ref', 'Reference images', '레퍼런스 이미지', '参考画像', '参考图片', 'Imágenes de referencia', 'Ảnh tham chiếu'],
    ['file_etc', 'Other working files', '기타 작업 파일', 'その他作業ファイル', '其他工作文件', 'Otros archivos', 'Tệp khác'],
    ['file_none', 'No file selected', '선택된 파일 없음', 'ファイル未選択', '未选择文件', 'Sin archivo', 'Chưa chọn tệp'],
    ['file_choose', 'Choose file', '파일 선택', 'ファイル選択', '选择文件', 'Elegir archivo', 'Chọn tệp'],
    ['file_replace', 'Change file', '다른 파일', '変更', '更换文件', 'Cambiar', 'Đổi tệp'],
    ['err_file_type', 'This file type is not allowed. Use JPG, PNG, WEBP, GIF, PDF, AI, PSD or ZIP.', '허용되지 않는 형식입니다. JPG, PNG, WEBP, GIF, PDF, AI, PSD, ZIP만 가능합니다.', '許可されていない形式です。JPG、PNG、WEBP、GIF、PDF、AI、PSD、ZIPのみ可能です。', '不支持该格式。请使用 JPG、PNG、WEBP、GIF、PDF、AI、PSD 或 ZIP。', 'Formato no permitido. Usa JPG, PNG, WEBP, GIF, PDF, AI, PSD o ZIP.', 'Định dạng không cho phép. Dùng JPG, PNG, WEBP, GIF, PDF, AI, PSD hoặc ZIP.'],
    ['err_file_size', 'This file is over 20 MB. Compress it or send a download link in the notes.', '파일이 20MB를 넘습니다. 용량을 줄이거나 다운로드 링크를 요청사항에 적어 주세요.', 'ファイルが20MBを超えています。圧縮するか、ダウンロードリンクをご記入ください。', '文件超过 20MB。请压缩或在备注中提供下载链接。', 'El archivo supera 20 MB. Comprímelo o deja un enlace.', 'Tệp vượt 20MB. Hãy nén hoặc gửi link tải.'],
    ['err_required', 'Please fill this in.', '필수 입력입니다.', '必須項目です。', '请填写此项。', 'Obligatorio.', 'Bắt buộc.'],
    ['err_email', 'Check the email address.', '이메일 형식을 확인해 주세요.', 'メール形式をご確認ください。', '请检查邮箱格式。', 'Revisa el correo.', 'Kiểm tra email.'],
    ['err_consent', 'Please agree to the personal information notice.', '개인정보 수집·이용에 동의해 주세요.', '個人情報の収集・利用に同意してください。', '请同意个人信息收集与使用。', 'Acepta el aviso de privacidad.', 'Hãy đồng ý điều khoản dữ liệu.'],
    ['err_order', 'Select the order this submission belongs to.', '제출할 주문을 선택해 주세요.', '提出先の注文を選択してください。', '请选择对应订单。', 'Selecciona el pedido.', 'Chọn đơn tương ứng.'],
    ['sub_privacy_h', 'Personal information', '개인정보 수집·이용 안내', '個人情報の収集・利用', '个人信息说明', 'Información personal', 'Thông tin cá nhân'],
    ['sub_privacy_body', 'Items: business/brand name, contact name, phone, email, order details, submitted files. Purpose: design production, order contact, record keeping. Retention: 3 years after delivery. You may refuse consent; in that case the order cannot be processed. In this first stage files stay in your browser and in the email you send.', '수집 항목: 업체·브랜드명, 담당자명, 연락처, 이메일, 주문 내역, 제출 파일. 이용 목적: 디자인 제작, 주문 관련 연락, 기록 보관. 보관 기간: 납품 후 3년. 동의를 거부할 수 있으며, 이 경우 주문 처리가 제한됩니다. 1차 단계에서 파일은 브라우저와 보내신 메일에 보관됩니다.', '収集項目：事業者・ブランド名、担当者名、電話、メール、注文内容、提出ファイル。利用目的：制作、注文連絡、記録保管。保管期間：納品後3年。同意は拒否できますが、その場合注文処理が制限されます。第1段階ではファイルはブラウザと送信メールに保管されます。', '收集项目：商户或品牌名、联系人、电话、邮箱、订单内容、提交文件。目的：设计制作、订单联络、记录保存。保存期限：交付后 3 年。可拒绝同意，但订单将无法处理。第一阶段文件保存在浏览器与您发送的邮件中。', 'Datos: marca, contacto, teléfono, correo, pedido y archivos. Fin: producción, contacto y registro. Conservación: 3 años. Puedes rechazar; entonces no se puede procesar.', 'Thu thập: thương hiệu, người liên hệ, điện thoại, email, đơn hàng, tệp. Mục đích: sản xuất, liên hệ, lưu hồ sơ. Lưu 3 năm. Có thể từ chối, khi đó không xử lý đơn.'],
    ['sub_consent', 'I agree to the collection and use of personal information above.', '위 개인정보 수집·이용에 동의합니다.', '上記の個人情報の収集・利用に同意します。', '我同意上述个人信息的收集与使用。', 'Acepto la recogida y uso de datos arriba.', 'Tôi đồng ý thu thập và sử dụng dữ liệu trên.'],
    ['sub_submit', 'Submit materials', '자료 제출하기', '資料を提出する', '提交资料', 'Enviar materiales', 'Gửi tài liệu'],
    ['sub_success_msg', 'Your project materials have been received. We will review them and let you know the production schedule.', '작업 자료가 정상적으로 접수되었습니다. 제출하신 자료를 검토한 후 제작 일정을 안내해 드리겠습니다.', '作業資料を正常に受け付けました。ご提出内容を確認のうえ、制作スケジュールをご案内します。', '工作资料已正常接收。我们将在审核后告知制作日程。', 'Hemos recibido los materiales. Los revisaremos y te informaremos del calendario.', 'Đã nhận tài liệu. Chúng tôi sẽ xem xét và thông báo lịch sản xuất.'],
    ['sub_done_h', 'Materials received', '자료 접수 완료', '資料受付完了', '资料已接收', 'Materiales recibidos', 'Đã nhận tài liệu'],
    ['sub_mail_hint', 'Static hosting cannot receive files. Send the same summary by email so nothing is missing — the order number is already in the subject.', '정적 호스팅은 파일을 받을 수 없습니다. 같은 요약을 메일로 보내 주시면 누락이 없습니다. 제목에 주문번호가 들어갑니다.', '静的ホスティングはファイルを受け取れません。同じ要約をメールでお送りください。件名に注文番号が入ります。', '静态托管无法接收文件。请将同一摘要邮件发出，标题已带订单号，避免遗漏。', 'El hosting estático no recibe archivos. Envía el mismo resumen por correo; el número de pedido va en el asunto.', 'Hosting tĩnh không nhận tệp. Hãy gửi email cùng nội dung; mã đơn có trong tiêu đề.'],
    ['sub_copy', 'Copy summary', '요약 복사', '要約をコピー', '复制摘要', 'Copiar resumen', 'Sao chép tóm tắt'],
    ['sub_mail', 'Open mail with summary', '메일로 보내기', 'メールで送る', '用邮件发送', 'Enviar por correo', 'Gửi bằng email'],
    ['sub_view_order', 'View in My page', '마이페이지에서 보기', 'マイページで見る', '在我的页面查看', 'Ver en Mi página', 'Xem ở Trang của tôi'],
    ['sub_another', 'Submit for another order', '다른 주문 자료 제출', '別の注文を提出', '提交其他订单', 'Enviar otro pedido', 'Gửi cho đơn khác'],

    /* ---- my page ---- */
    ['my_kicker', 'My page', '마이페이지', 'マイページ', '我的页面', 'Mi página', 'Trang của tôi'],
    ['my_title', 'Orders and <em>progress.</em>', '주문과 <em>진행 상태.</em>', '注文と<em>進捗。</em>', '订单与<em>进度</em>', 'Pedidos y <em>avance</em>', 'Đơn hàng và <em>tiến độ</em>'],
    ['my_lede', 'Every order keeps its payment, materials and production status separately, so you can see exactly which step is waiting.', '모든 주문은 결제·자료·제작 상태를 따로 보관합니다. 지금 어느 단계에서 기다리는지 정확히 보입니다.', '各注文は決済・資料・制作状況を別々に保持します。どの段階で待っているかが分かります。', '每笔订单分别保存付款、资料与制作状态，可清楚看到当前等待环节。', 'Cada pedido guarda pago, materiales y producción por separado.', 'Mỗi đơn lưu riêng thanh toán, tài liệu và sản xuất.'],
    ['my_static_note', 'Phase one runs on GitHub Pages static hosting. Orders and materials are kept in this browser’s local storage for testing. Phase two moves them to Supabase (database, storage, auth) with PayApp server verification.', '1차는 GitHub Pages 정적 호스팅 기반입니다. 주문과 자료는 테스트 목적으로 이 브라우저의 로컬 저장소에 보관됩니다. 2차에서 Supabase(DB·스토리지·인증)와 페이앱 서버 검증으로 이전합니다.', '第1段階はGitHub Pagesの静的ホスティングです。注文と資料はテスト用にこのブラウザのローカル保存領域に保管されます。第2段階でSupabase（DB・ストレージ・認証）とPayAppのサーバー検証へ移行します。', '第一阶段基于 GitHub Pages 静态托管。订单与资料为测试目的保存在此浏览器本地存储。第二阶段迁移至 Supabase（数据库、存储、认证）与 PayApp 服务器校验。', 'La fase uno usa GitHub Pages. Pedidos y materiales se guardan en el almacenamiento local del navegador para pruebas. La fase dos pasa a Supabase y PayApp.', 'Giai đoạn 1 dùng GitHub Pages. Đơn và tài liệu lưu trong bộ nhớ trình duyệt để thử. Giai đoạn 2 chuyển sang Supabase và PayApp.'],
    ['my_orders', 'Orders', '주문 내역', '注文履歴', '订单记录', 'Pedidos', 'Đơn hàng'],
    ['my_sample', 'SAMPLE', '샘플', 'サンプル', '示例', 'MUESTRA', 'MẪU'],
    ['my_empty_t', 'No orders yet.', '아직 주문이 없습니다.', 'まだ注文はありません。', '还没有订单。', 'Aún no hay pedidos.', 'Chưa có đơn.'],
    ['my_empty_p', 'Start with a detail page — options and VAT are calculated before checkout.', '상세페이지부터 시작해 보세요. 결제 전에 옵션과 부가세가 계산됩니다.', '詳細ページから始めてみてください。決済前にオプションと税が計算されます。', '从详情页开始吧，结算前会计算选项与增值税。', 'Empieza con una página de producto: opciones e IVA antes de pagar.', 'Bắt đầu với trang chi tiết: tuỳ chọn và VAT tính trước khi trả.'],
    ['my_paid', 'Payment', '결제', '決済', '付款', 'Pago', 'Thanh toán'],
    ['my_submission', 'Materials', '자료', '資料', '资料', 'Materiales', 'Tài liệu'],
    ['my_work', 'Production', '작업', '作業', '制作', 'Producción', 'Sản xuất'],
    ['my_files', 'Submitted files', '제출한 파일', '提出ファイル', '已提交文件', 'Archivos enviados', 'Tệp đã gửi'],
    ['my_no_files', 'No materials submitted yet', '아직 제출한 자료가 없습니다', '資料は未提出です', '尚未提交资料', 'Sin materiales aún', 'Chưa gửi tài liệu'],
    ['my_draft_area', 'Draft review &amp; delivery', '시안 확인·수정·납품', '初稿確認・修正・納品', '初稿、修改与交付', 'Borrador, revisión y entrega', 'Bản nháp, sửa và giao'],
    ['my_request_rev', 'Request a revision', '수정 요청', '修正を依頼', '申请修改', 'Pedir revisión', 'Yêu cầu sửa'],
    ['my_confirm_draft', 'Approve the draft', '시안 확정', '初稿を承認', '确认初稿', 'Aprobar borrador', 'Duyệt bản nháp'],
    ['my_download', 'Download final files', '최종 파일 받기', '最終ファイル', '下载最终文件', 'Descargar finales', 'Tải tệp cuối'],
    ['my_submit_link', 'Submit materials', '자료 제출', '資料提出', '提交资料', 'Enviar materiales', 'Gửi tài liệu'],
    ['my_new_order', 'New order', '새 주문', '新規注文', '新订单', 'Nuevo pedido', 'Đơn mới'],
    ['my_clear', 'Clear test data', '테스트 데이터 초기화', 'テストデータ初期化', '清除测试数据', 'Borrar datos de prueba', 'Xoá dữ liệu thử'],
    ['my_rev_prompt', 'What should be changed?', '어떤 부분을 수정할까요?', 'どこを修正しますか？', '需要修改什么？', '¿Qué cambiamos?', 'Cần sửa gì?'],
    ['my_rev_saved', 'Revision request recorded on this order (test).', '이 주문에 수정 요청을 기록했습니다(테스트).', 'この注文に修正依頼を記録しました（テスト）。', '已在此订单记录修改请求（测试）。', 'Solicitud de revisión registrada (prueba).', 'Đã ghi yêu cầu sửa (thử).'],
    ['my_draft_ok', 'Draft approved. Production moves to revision and delivery.', '시안을 확정했습니다. 수정·납품 단계로 넘어갑니다.', '初稿を承認しました。修正・納品へ進みます。', '已确认初稿，进入修改与交付阶段。', 'Borrador aprobado. Pasamos a revisión y entrega.', 'Đã duyệt bản nháp. Chuyển sang sửa và giao.'],

    /* ---- admin ---- */
    ['ad_kicker', 'Admin', '관리자', '管理', '管理', 'Admin', 'Quản trị'],
    ['ad_title', 'Catalogue and <em>orders.</em>', '카탈로그와 <em>주문 관리.</em>', 'カタログと<em>注文管理。</em>', '目录与<em>订单管理</em>', 'Catálogo y <em>pedidos</em>', 'Danh mục và <em>đơn hàng</em>'],
    ['ad_lede', 'A demonstration console for the first stage: catalogue structure, orders and the three statuses. Nothing here is server-side yet.', '1차 단계의 데모 콘솔입니다. 카탈로그 구조, 주문, 세 가지 상태를 다룹니다. 아직 서버 기능은 없습니다.', '第1段階のデモコンソールです。カタログ構造、注文、3つの状態を扱います。サーバー機能はまだありません。', '第一阶段演示控制台：目录结构、订单与三种状态。尚无服务器功能。', 'Consola de demostración de la fase uno: catálogo, pedidos y los tres estados. Aún sin servidor.', 'Bảng điều khiển demo giai đoạn 1: danh mục, đơn hàng và ba trạng thái. Chưa có server.'],
    ['ad_gate_t', 'Admin access', '관리자 인증', '管理者認証', '管理员验证', 'Acceso admin', 'Truy cập quản trị'],
    ['ad_gate_p', 'This gate is a front-end demo. It hides the console from casual visitors, not from anyone who reads the JavaScript. Real administrator authentication is part of phase two.', '이 인증은 프론트엔드 데모입니다. 일반 방문자에게서 콘솔을 가릴 뿐, 코드를 읽는 사람까지 막지는 못합니다. 실제 관리자 인증은 2차 범위입니다.', 'この認証はフロントエンドのデモです。一般の訪問者から隠すだけで、コードを読む人までは防げません。実際の管理者認証は第2段階です。', '此为前端演示验证，只对普通访客隐藏控制台，无法阻止阅读代码的人。真实管理员认证属于第二阶段。', 'Esta puerta es una demo de front-end: oculta la consola a visitantes, no a quien lea el código. La autenticación real es de la fase dos.', 'Cổng này là demo front-end: ẩn bảng điều khiển với khách, không chặn người đọc mã. Xác thực thật thuộc giai đoạn 2.'],
    ['ad_pass_label', 'Demo password', '데모 비밀번호', 'デモパスワード', '演示密码', 'Contraseña demo', 'Mật khẩu demo'],
    ['ad_enter', 'Enter console', '콘솔 열기', 'コンソールを開く', '进入控制台', 'Entrar', 'Mở bảng'],
    ['ad_wrong', 'Wrong password.', '비밀번호가 맞지 않습니다.', 'パスワードが違います。', '密码不正确。', 'Contraseña incorrecta.', 'Sai mật khẩu.'],
    ['ad_demo_hint', 'Demo key', '데모 키', 'デモキー', '演示密钥', 'Clave demo', 'Khoá demo'],
    ['ad_note', 'Static hosting, phase one. Orders are read from this browser’s local storage; payments and file storage are not server-verified yet.', '정적 호스팅 1차 단계입니다. 주문은 이 브라우저 로컬 저장소에서 읽습니다. 결제와 파일 저장은 아직 서버 검증 전입니다.', '静的ホスティング第1段階。注文はこのブラウザのローカル保存領域から読みます。決済とファイル保存は未検証です。', '静态托管第一阶段。订单读取自浏览器本地存储，付款与文件存储尚未经服务器校验。', 'Fase uno en hosting estático. Los pedidos se leen del almacenamiento local; pago y archivos aún sin verificar.', 'Giai đoạn 1 hosting tĩnh. Đơn đọc từ bộ nhớ trình duyệt; thanh toán và tệp chưa xác thực server.'],
    ['ad_tab_catalog', 'Catalogue', '카탈로그', 'カタログ', '目录', 'Catálogo', 'Danh mục'],
    ['ad_tab_orders', 'Orders', '주문', '注文', '订单', 'Pedidos', 'Đơn hàng'],
    ['ad_tab_structure', 'Data structure', '데이터 구조', 'データ構造', '数据结构', 'Estructura', 'Cấu trúc dữ liệu'],
    ['ad_col_order', 'Order', '주문번호', '注文番号', '订单号', 'Pedido', 'Mã đơn'],
    ['ad_col_customer', 'Customer', '고객', '顧客', '客户', 'Cliente', 'Khách'],
    ['ad_col_payment', 'Payment', '결제 상태', '決済状態', '付款状态', 'Pago', 'Thanh toán'],
    ['ad_col_submission', 'Materials', '자료 상태', '資料状態', '资料状态', 'Materiales', 'Tài liệu'],
    ['ad_col_work', 'Production', '작업 상태', '作業状態', '制作状态', 'Producción', 'Sản xuất'],
    ['ad_col_amount', 'Amount', '금액', '金額', '金额', 'Importe', 'Số tiền'],
    ['ad_products', 'Products', '상품', '商品', '商品', 'Productos', 'Sản phẩm'],
    ['ad_categories', 'Categories', '카테고리', 'カテゴリ', '分类', 'Categorías', 'Nhóm'],
    ['ad_saved', 'Status updated in this browser (test).', '이 브라우저에서 상태를 변경했습니다(테스트).', 'このブラウザで状態を更新しました（テスト）。', '已在此浏览器更新状态（测试）。', 'Estado actualizado en este navegador (prueba).', 'Đã cập nhật trạng thái (thử).'],
    ['ad_logout', 'Lock console', '콘솔 잠그기', 'コンソールを閉じる', '锁定控制台', 'Bloquear', 'Khoá bảng'],
    ['ad_no_orders', 'No orders in this browser yet.', '이 브라우저에 주문이 없습니다.', 'このブラウザに注文はありません。', '此浏览器暂无订单。', 'Aún no hay pedidos.', 'Chưa có đơn.'],
    ['ad_files', 'Files', '파일', 'ファイル', '文件', 'Archivos', 'Tệp'],
    ['ad_struct_note', 'One entry in catalog.js feeds the list, the detail page, the cart, the order and the admin view. Order records keep paymentStatus, submissionStatus and workStatus apart.', 'catalog.js의 한 항목이 목록·상세·장바구니·주문·관리자 화면에 모두 쓰입니다. 주문 레코드는 paymentStatus, submissionStatus, workStatus를 분리해 보관합니다.', 'catalog.jsの1エントリが一覧・詳細・カート・注文・管理画面に使われます。注文はpaymentStatus、submissionStatus、workStatusを分けて保持します。', 'catalog.js 中的一条数据供列表、详情、购物车、订单与管理界面使用。订单分别保存 paymentStatus、submissionStatus、workStatus。', 'Una entrada de catalog.js alimenta lista, detalle, carrito, pedido y admin. El pedido separa paymentStatus, submissionStatus y workStatus.', 'Một mục trong catalog.js dùng cho danh sách, chi tiết, giỏ, đơn và admin. Đơn lưu riêng paymentStatus, submissionStatus, workStatus.'],

    /* ---- toasts ---- */
    ['toast_added', 'Added to cart.', '장바구니에 담았습니다.', 'カートに追加しました。', '已加入购物车。', 'Añadido al carrito.', 'Đã thêm vào giỏ.'],
    ['toast_removed', 'Removed.', '삭제했습니다.', '削除しました。', '已删除。', 'Eliminado.', 'Đã xoá.'],
    ['toast_copied', 'Copied.', '복사했습니다.', 'コピーしました。', '已复制。', 'Copiado.', 'Đã sao chép.'],
    ['toast_empty_cart', 'Your cart is empty.', '장바구니가 비어 있습니다.', 'カートは空です。', '购物车是空的。', 'El carrito está vacío.', 'Giỏ trống.'],
    ['toast_need_order', 'Select an order first.', '주문을 먼저 선택해 주세요.', '先に注文を選択してください。', '请先选择订单。', 'Selecciona un pedido.', 'Chọn đơn trước.'],
    ['toast_saved', 'Saved in this browser.', '이 브라우저에 저장했습니다.', 'このブラウザに保存しました。', '已保存在此浏览器。', 'Guardado en el navegador.', 'Đã lưu trong trình duyệt.']
  ];

  var DICT = {};
  LANGS.forEach(function (l) { DICT[l] = {}; });
  ROWS.forEach(function (r) {
    for (var i = 0; i < LANGS.length; i++) {
      var v = r[i + 1];
      if (v === undefined || v === null) v = r[1];
      DICT[LANGS[i]][r[0]] = v;
    }
  });

  var current = 'en';
  var listeners = [];

  function detect() {
    var q = null;
    try { q = new URLSearchParams(location.search).get('lang'); } catch (e) { q = null; }
    if (q && LANGS.indexOf(q) >= 0) {
      try { localStorage.setItem('aw_lang', q); } catch (e) {}
      return q;
    }
    var stored = null;
    try { stored = localStorage.getItem('aw_lang'); } catch (e) { stored = null; }
    if (stored && LANGS.indexOf(stored) >= 0) return stored;
    var nav = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    return nav.indexOf('ko') === 0 ? 'ko' : 'en';
  }

  function t(key, fallback) {
    var d = DICT[current] || DICT.en;
    if (d[key] !== undefined) return d[key];
    if (DICT.en[key] !== undefined) return DICT.en[key];
    return fallback !== undefined ? fallback : key;
  }

  /* localized value from an object map {en,ko,...} */
  function tv(map, fallbackLang) {
    if (map === null || map === undefined) return '';
    if (typeof map === 'string') return map;
    if (map[current] !== undefined && map[current] !== '') return map[current];
    if (fallbackLang && map[fallbackLang]) return map[fallbackLang];
    if (map.en !== undefined) return map.en;
    var k = Object.keys(map);
    return k.length ? map[k[0]] : '';
  }

  function num(n) { return Number(n || 0).toLocaleString('en-US'); }

  /* ₩110,000 / 110,000원 */
  function money(amount, currency) {
    currency = currency || 'KRW';
    if (currency === 'USD') {
      var usd = num(amount);
      return current === 'ko' ? usd + '달러' : '$' + usd;
    }
    if (current === 'ko') return num(amount) + '원';
    return '₩' + num(amount);
  }

  function fromMoney(amount, currency) {
    currency = currency || 'KRW';
    if (currency === 'USD') {
      var usd = num(amount);
      switch (current) {
        case 'ko': return usd + '달러부터';
        case 'ja': return '$' + usd + '〜';
        case 'zh': return 'US$' + usd + ' 起';
        case 'es': return 'desde $' + usd;
        case 'vi': return 'từ $' + usd;
        default: return 'from $' + usd;
      }
    }
    var kr = num(amount);
    switch (current) {
      case 'ko': return kr + '원부터';
      case 'ja': return '₩' + kr + '〜';
      case 'zh': return '₩' + kr + ' 起';
      case 'es': return 'desde ₩' + kr;
      case 'vi': return 'từ ₩' + kr;
      default: return 'from ₩' + kr;
    }
  }

  function apply(root) {
    var scope = root || document;
    var html = HTML_LANG[current] || 'en';
    document.documentElement.lang = html;
    document.documentElement.setAttribute('data-lang', current);

    var nodes = scope.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute('data-i18n');
      var val = t(key);
      if (val !== key) nodes[i].innerHTML = val;
    }
    var ph = scope.querySelectorAll('[data-i18n-ph]');
    for (var j = 0; j < ph.length; j++) ph[j].setAttribute('placeholder', t(ph[j].getAttribute('data-i18n-ph')));

    var ar = scope.querySelectorAll('[data-i18n-aria]');
    for (var k = 0; k < ar.length; k++) ar[k].setAttribute('aria-label', t(ar[k].getAttribute('data-i18n-aria')));

    var tt = scope.querySelectorAll('[data-i18n-title]');
    for (var m = 0; m < tt.length; m++) tt[m].setAttribute('title', t(tt[m].getAttribute('data-i18n-title')));

    var ti = scope.querySelectorAll('[data-i18n-content]');
    for (var n = 0; n < ti.length; n++) ti[n].setAttribute('content', t(ti[n].getAttribute('data-i18n-content')));

    var tk = document.body && document.body.getAttribute('data-title-key');
    if (tk) document.title = t(tk, document.title);

    var catEls = scope.querySelectorAll('[data-i18n-cat]');
    for (var q = 0; q < catEls.length; q++) {
      var cid = catEls[q].getAttribute('data-i18n-cat');
      var cobj = (window.CATALOG && window.CATALOG.cat) ? window.CATALOG.cat(cid) : null;
      if (cobj) catEls[q].textContent = tv(cobj.name);
    }

    var langBtns = document.querySelectorAll('[data-lang-set]');
    for (var p = 0; p < langBtns.length; p++) {
      var on = langBtns[p].getAttribute('data-lang-set') === current;
      langBtns[p].classList.toggle('is-on', on);
      langBtns[p].setAttribute('aria-pressed', on ? 'true' : 'false');
    }
  }

  function setLang(lang, opts) {
    if (LANGS.indexOf(lang) < 0) return;
    current = lang;
    try { localStorage.setItem('aw_lang', lang); } catch (e) {}
    apply();
    listeners.forEach(function (fn) { try { fn(lang); } catch (e) {} });
    try {
      window.dispatchEvent(new CustomEvent('cw:langchange', { detail: { lang: lang } }));
    } catch (e) {}
  }

  function init() {
    current = detect();
    apply();
    listeners.forEach(function (fn) { try { fn(current); } catch (e) {} });
  }

  global.CWI18N = {
    LANGS: LANGS,
    LABEL: LABEL,
    dict: DICT,
    t: t,
    tv: tv,
    money: money,
    fromMoney: fromMoney,
    num: num,
    apply: apply,
    setLang: setLang,
    init: init,
    get lang() { return current; },
    onChange: function (fn) { listeners.push(fn); }
  };

  /* every [data-lang-set] button switches language */
  document.addEventListener('click', function (e) {
    var el = e.target.closest ? e.target.closest('[data-lang-set]') : null;
    if (el) { setLang(el.getAttribute('data-lang-set')); }
  });
})(window);
