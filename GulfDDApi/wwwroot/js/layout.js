var navbar = document.querySelector('.nav-container')
var subscribeToNews = document.querySelector('.subscribe-news')
var footer = document.querySelector('footer')

if (navbar) {
  navbar.innerHTML = ` 
  <img src="assets/round-language-24px.svg" alt="Icon" class="localization-res res-switch-ar en" />
  <img src="assets/round-language-24px.svg" alt="Icon" class="localization-res res-switch-en ar" />
  <a href="/"><img src="assets/GDD.png" alt="Nav Logo" class="nav-logo-res" loading="lazy"></a>
    <img class="sidebar-icon" src="assets/lines-svgrepo-com.svg" alt="Sidebar" loading="lazy">
    <ul class="nav-items">
        <li><a class='nav-link en' href="index.html">Home</a></li>
        <li><a class='nav-link ar' href="index.html">الرئيسية</a></li>
        <li><a class='nav-link en' href="news.html">News</a></li>
        <li><a class='nav-link ar' href="news.html">الجديد</a></li>
        <li><a class='nav-link en' href="solutions.html">Solutions</a></li>
        <li><a class='nav-link ar' href="solutions.html">الحلول</a></li>
        <li class="logo"><a class='nav-link' class="logo" href="index.html"><img src="assets/GDD.png" alt="Nav Logo" class="nav-logo"></a></li>
        <li><a class='nav-link en' href="articles.html">Articles</a></li>
        <li><a class='nav-link ar' href="articles.html">المقالات</a></li>
        <li><a class='nav-link en' href="about.html">About GDD</a></li>
        <li><a class='nav-link ar' href="about.html">معلومات عنا</a></li>
        <li><a class='nav-link en' href="contact.html">Contact</a></li>
        <li><a class='nav-link ar' href="contact.html">تواصل</a></li>
        <img src="assets/close-bold-svgrepo-com.svg" alt="Close" class="res-nav-close-icon">
        <img src="assets/round-language-24px.svg" alt="Icon" class="localization-desk en switch-ar" />
        <img src="assets/round-language-24px.svg" alt="Icon" class="localization-desk ar switch-en" />

    </ul>
    `

  // Handle Sidebar
  document.querySelector('.sidebar-icon').addEventListener('click', () => {
    document.querySelector('.nav-items').style.left = 'calc(100% - 350px)'
    document.querySelectorAll('.nav-link').forEach((e) => {
      e.addEventListener('click', () => {
        document.querySelector('.nav-items').style.left = 'calc(100% + 350px)'
      })
    })
  })
  document.querySelector('.res-nav-close-icon').addEventListener('click', () => {
    document.querySelector('.nav-items').style.left = 'calc(100% + 350px)'
  })
}
if (subscribeToNews) {
  subscribeToNews.innerHTML = ` <img src="assets/Group 29863.svg" alt="Layout" class="layout1" loading="lazy">
    <img src="assets/Group 29863.svg" alt="Layout" class="layout2" loading="lazy">
    <h2 class="en">Get Notified | News and Offers</h2>
    <h2 class="ar">احصل على إشعار | الأخبار والعروض</h2>
    <div class="subscribe-container">
        <input class="en" type="text" placeholder="Enter your email">
        <button class="en">Submit</button>
        <input class="ar" type="text" placeholder="ادخل بريدك الالكتروني">
        <button class="ar">اشترك</button>

    </div>`
}
if (footer) {
  footer.innerHTML = `<div class="info">
  <div class="img-container">
      <img src="assets/NoPath@2x.png" alt="Footer Image" loading="lazy">
      <img src="assets/logo.svg" alt="Footer Image" loading="lazy">
      <img src="assets/logo-btv.svg" alt="Footer Image" loading="lazy">
  </div>
  <article class="en">GDD today avails most of the gaming, entertainment and mobile top-up vouchers for the globally
      well-known publishers and services providers over its network.</article>
      <article class="ar">توفر GDD اليوم معظم قسائم الألعاب والترفيه وشحن رصيد الهاتف المحمول للناشرين ومقدمي الخدمات المشهورين عالميًا عبر شبكتها.</article>
  <div class="ul-container">
      <ul>
          <li class="en"><a href="index.html">Home</a></li>
          <li class="en"><a href="news.html">News</a></li>
          <li class="en"><a href="solutions.html">Solutions</a></li>
          <li class="ar"><a href="index.html">الرئيسية</a></li>
          <li class="ar"><a href="news.html">الاخبار</a></li>
          <li class="ar"><a href="solutions.html">الحلول</a></li>
      </ul>
      <ul>
          <li class="en"><a href="articles.html">Articles</a></li>
          <li class="en"><a href="about.html">About GDD</a></li>
          <li class="en"><a href="contact.html">Contact</a></li>
          <li class="ar"><a href="articles.html">المقالات</a></li>
          <li class="ar"><a href="about.html">تعرف علينا</a></li>
          <li class="ar"><a href="contact.html">تواصل معنا</a></li>
      </ul>
  </div>
  <div class="get-in-touch">
      <h4 class="en">Get in touch now</h4>
      <h4 class="ar">تواصل معنا الان</h4>
      <a class="en" href="#">Become a Resseller</a>
      <a class="en" href="#">Become a Provider</a>
      <a class="ar" href="#">كن موزعًا</a>
      <a class="ar" href="#">كن مزودًا</a>

  </div>
</div>
<div class="breaker"></div>

<div class="copy-right switch-dir">
  <img src="assets/payment.png" alt="Payment Methods" loading="lazy">
  <p class="en">All Copyright reserved for Goluf Direct Distrpuoion 2024</p>
  <p class="ar">جميع حقوق الطبع والنشر محفوظة لشركة Goluf Direct Distrpuoion 2024</p>
</div>`
}
