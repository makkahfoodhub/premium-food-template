(() => {
  const cfg = window.PLATFORM_CONFIG || {};
  const $ = id => document.getElementById(id);
  const dict = {
    en: {
      navRestaurants:"Restaurants", navMenu:"Menus", navHow:"How it works", orderNow:"Order now",
      heroEyebrow:"YOUR CRAVINGS, YOUR CHOICE", heroTitle:'More choices.<br><em>One easy order.</em>',
      heroText:"Browse real restaurant menus supplied by us. Choose food from different restaurants and send one hotel delivery request on WhatsApp.",
      explore:"Explore restaurants", howItWorks:"How it works", hotelDelivery:"Hotel delivery", localService:"Personal ordering service",
      manyRestaurants:"Multiple restaurants", oneCart:"One WhatsApp request", benefit1:"More food choices", benefit1sub:"Browse restaurant menus",
      benefit2:"Hotel delivery", benefit2sub:"Delivered to your hotel", benefit3:"Simple ordering", benefit3sub:"Confirm on WhatsApp",
      restaurantEyebrow:"CHOOSE YOUR RESTAURANTS", restaurantTitle:'Good food, <em>great choices.</em>',
      restaurantIntro:"Browse the restaurant menus below. More restaurants can be added later.", menuEyebrow:"REAL MENUS", menuTitle:'Explore the <em>menus.</em>',
      menuIntro:"Open the menu images to check available dishes and prices. Restaurant prices and availability may change.",
      howEyebrow:"HOW IT WORKS", howTitle:'You choose.<br><em>We pick it up.</em>',
      howText:"Choose dishes from the menu images, write your order with hotel details and send it. We confirm availability and the delivery service charge with you on WhatsApp before purchasing.",
      startOrder:"Start your order", ctaEyebrow:"READY TO ORDER?", ctaTitle:"Your favourites,<br>from more than one place.", browse:"Browse restaurants",
      footerText:"Your food, picked up and delivered with care.", rights:"All rights reserved.", viewMenu:"View menu image", orderFrom:"Order request",
      noMenu:"No menu image has been added yet."
    },
    ar: {
      navRestaurants:"المطاعم", navMenu:"القوائم", navHow:"كيف نعمل", orderNow:"اطلب الآن",
      heroEyebrow:"اختر ما تشتهي", heroTitle:'خيارات أكثر.<br><em>طلب واحد سهل.</em>',
      heroText:"تصفح قوائم المطاعم الحقيقية المضافة. اختر من مطاعم مختلفة وأرسل طلب توصيل واحدًا إلى الفندق عبر واتساب.",
      explore:"استكشف المطاعم", howItWorks:"كيف نعمل", hotelDelivery:"توصيل للفنادق", localService:"خدمة طلب شخصية",
      manyRestaurants:"مطاعم متعددة", oneCart:"طلب واحد عبر واتساب", benefit1:"خيارات طعام أكثر", benefit1sub:"تصفح قوائم المطاعم",
      benefit2:"توصيل للفندق", benefit2sub:"نوصل طلبك إلى الفندق", benefit3:"طلب سهل", benefit3sub:"التأكيد عبر واتساب",
      restaurantEyebrow:"اختر المطاعم", restaurantTitle:'طعام لذيذ، <em>خيارات رائعة.</em>',
      restaurantIntro:"تصفح قوائم المطاعم أدناه. يمكن إضافة المزيد من المطاعم لاحقًا.", menuEyebrow:"القوائم الأصلية", menuTitle:'تصفح <em>القوائم.</em>',
      menuIntro:"افتح صور القوائم لمعرفة الأطباق والأسعار. قد تتغير الأسعار والتوفر لدى المطعم.",
      howEyebrow:"كيف نعمل", howTitle:'أنت تختار.<br><em>ونحن نستلم.</em>',
      howText:"اختر الأطباق من صور القوائم، واكتب طلبك وبيانات الفندق ثم أرسله. نؤكد التوفر ورسوم التوصيل عبر واتساب قبل الشراء.",
      startOrder:"ابدأ طلبك", ctaEyebrow:"هل أنت مستعد للطلب؟", ctaTitle:"مفضلاتك من<br>أكثر من مطعم.", browse:"تصفح المطاعم",
      footerText:"نستلم طعامك ونوصله إليك بعناية.", rights:"جميع الحقوق محفوظة.", viewMenu:"عرض صورة القائمة", orderFrom:"طلب الطعام",
      noMenu:"لم تتم إضافة صورة قائمة بعد."
    }
  };
  const restaurants = cfg.restaurants || [];
  let lang = "en";
  const t = key => dict[lang][key] || key;
  $("brandName").textContent = cfg.brandName || "Food Hub";
  $("footerBrand").textContent = cfg.brandName || "Food Hub";
  $("copyrightName").textContent = cfg.brandName || "Food Hub";
  $("footerLocation").textContent = cfg.location || "";
  $("year").textContent = new Date().getFullYear();
  $("announcement").textContent = cfg.announcement || "";
  const number = String(cfg.whatsapp || "").replace(/\D/g, "");
  $("footerPhone").href = number ? `https://wa.me/${number}` : "#order";

  function renderRestaurants() {
    $("restaurantList").innerHTML = restaurants.map(r => `
      <a class="restaurant-tile" href="#restaurant-${r.id}">
        <span class="restaurant-logo">${r.name.slice(0,1)}</span>
        <span><strong>${r.name}</strong><small>${lang === "ar" ? (r.categoryAr || r.category) : r.category}</small></span>
      </a>`).join("");
  }
  function renderMenus() {
    $("menuGrid").innerHTML = restaurants.map(r => `
      <article class="food-card restaurant-menu-card" id="restaurant-${r.id}">
        <div class="restaurant-menu-heading"><div><span class="restaurant-label">${lang === "ar" ? (r.categoryAr || r.category) : r.category}</span><h3>${r.name}</h3></div><a class="small-order-link" href="#order" data-restaurant="${r.name}">${t("orderFrom")} ↗</a></div>
        <div class="menu-image-stack">${(r.menuImages || []).map((src, i) => `<a class="menu-image-link" href="${src}" target="_blank" rel="noopener"><img src="${src}" alt="${r.name} menu page ${i+1}" loading="lazy"><span>${t("viewMenu")}</span></a>`).join("") || `<p>${t("noMenu")}</p>`}</div>
      </article>`).join("");
    document.querySelectorAll("[data-restaurant]").forEach(link => link.addEventListener("click", () => {
      const box = $("orderForm");
      const order = box.elements.order;
      if (!order.value.trim()) order.value = `${link.dataset.restaurant} — `;
      else if (!order.value.includes(link.dataset.restaurant)) order.value += `\n${link.dataset.restaurant} — `;
    }));
  }
  function applyLanguage() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    $("langToggle").textContent = lang === "en" ? "عربي" : "English";
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (dict[lang][key]) el.innerHTML = dict[lang][key];
    });
    renderRestaurants(); renderMenus();
  }
  $("langToggle").addEventListener("click", () => { lang = lang === "en" ? "ar" : "en"; applyLanguage(); });
  $("menuToggle").addEventListener("click", () => document.querySelector(".desktop-nav").classList.toggle("mobile-open"));
  $("orderForm").addEventListener("submit", event => {
    event.preventDefault();
    if (!number) { alert("WhatsApp number is missing in config.js."); return; }
    const data = new FormData(event.currentTarget);
    const msg = [
      "Hello Food Hub! I would like to place a hotel food delivery request.",
      `Name: ${data.get("customer")}`,
      `Hotel: ${data.get("hotel")}`,
      `Room: ${data.get("room") || "Not provided"}`,
      "Food order:", data.get("order"),
      data.get("notes") ? `Notes: ${data.get("notes")}` : "",
      "Please confirm item availability and the final distance-based service charge before purchase."
    ].filter(Boolean).join("\n");
    const url = `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
    window.location.href = url;
  });
  renderRestaurants(); renderMenus();
})();
