var width = window.innerWidth
if (width <= 900) {
  document.querySelector('.service-products').innerHTML += `
  <div class="title">
  <h2 class='en'><span>Services</span><span> & </span><span>Products</span></h2>
  <h2 class='ar'><span>المتجات</span><span> و </span><span>الخدمات</span></h2>

  <div class="buttons-container">
      <div>
          <button class="arrow" id="arrow-services-prev"><img src="./assets/arrow-right-svgrepo-com.png"
                  alt="Arrow"></button>
          <button class="arrow" id="arrow-services-next"><img src="./assets/arrow-left-svgrepo-com.svg"
                  alt="Arrow"></button>
      </div>
      <ul class="bullets">
          <li key="bullet-1" id="main-slider-bullets" class="main-slider-bullets-services"></li>
          <li key="bullet-1" id="main-slider-bullets" class="main-slider-bullets-services"></li>
          <li key="bullet-1" id="main-slider-bullets" class="main-slider-bullets-services"></li>
      </ul>
  </div>
</div>
  <div class="content">
  <div class="item service-item">
      <div class="title">
          <h3 class="red">Our last Deal</h3>
          <img src="./assets/logo.svg" alt="Logo" loading="lazy">
      </div>
      <article>Your chance to <br/> integrate like Uber</article>
      <p>Your chance with us like Uber Your chance with us like Uber</p>
      <div class="button-container">
          <button>Talk to Agent</button>
          <button>Discover more</button>
      </div>
  </div>
  <div class="item service-item">
      <div class="title">
          <h3 class="blue">Our last Feature</h3>
          <img src="./assets/logo-btv.svg" alt="">
      </div>
      <article>New dashboard <br/> consolidate all numbers</article>
      <p>Your chance with us like Uber Your chance with us like Uber</p>
      <div class="button-container">
          <button>Talk to Agent</button>
          <button>Discover more</button>
      </div>
  </div>
</div>
`
} else {
  document.querySelector('.service-products').innerHTML += `
  <div class="title">
  <h2 class='en'><span>Services</span><span> & </span><span>Products</span></h2>
  <h2 class='ar'><span>المتجات</span><span> و </span><span>الخدمات</span></h2>  <div class="buttons-container">
      <div>
          <button class="arrow" id="arrow-services-prev"><img class="arrow-switch" src="./assets/arrow-right-svgrepo-com.png"
                  alt="Arrow"></button>
          <button class="arrow" id="arrow-services-next"><img class="arrow-switch" src="./assets/arrow-left-svgrepo-com.svg"
                  alt="Arrow"></button>
      </div>
      <ul class="bullets">
          <li key="bullet-1" id="main-slider-bullets" class="main-slider-bullets-services"></li>
          <li key="bullet-1" id="main-slider-bullets" class="main-slider-bullets-services"></li>
          <li key="bullet-1" id="main-slider-bullets" class="main-slider-bullets-services"></li>
      </ul>
  </div>
</div>
  <div class="content service-content">
  <div class="item service-item">
      <div class="title">
          <h3 class="red">Our last Deal</h3>
          <img src="./assets/logo.svg" alt="Logo" loading="lazy">
      </div>
      <article>Your chance to <br/> integrate like Uber</article>
      <p>Your chance with us like Uber Your chance with us like Uber</p>
      <div class="button-container">
          <button>Talk to Agent</button>
          <button>Discover more</button>
      </div>
  </div>
  <div class="item service-item">
      <div class="title">
          <h3 class="blue">Our last Feature</h3>
          <img src="./assets/logo-btv.svg" alt="">
      </div>
      <article>New dashboard <br/> consolidate all numbers</article>
      <p>Your chance with us like Uber Your chance with us like Uber</p>
      <div class="button-container">
          <button>Talk to Agent</button>
          <button>Discover more</button>
      </div>
  </div>
</div>
<div class="content service-content">
  <div class="item service-item">
      <div class="title">
          <h3 class="red">Lorem, ipsum.</h3>
          <img src="./assets/logo.svg" alt="Logo" loading="lazy">
      </div>
      <article>Lorem, ipsum dolor. <br/> Lorem, ipsum dolor.</article>
      <p>Lorem ipsum dolor sit.</p>
      <div class="button-container">
          <button>Talk to Agent</button>
          <button>Discover more</button>
      </div>
  </div>
  <div class="item service-item">
      <div class="title">
          <h3 class="red">Lorem, ipsum.</h3>
          <img src="./assets/logo-btv.svg" alt="Logo" loading="lazy">
      </div>
      <article>Lorem, ipsum dolor. <br/> Lorem, ipsum dolor.</article>
      <p>Lorem ipsum dolor sit.</p>
      <div class="button-container">
          <button>Talk to Agent</button>
          <button>Discover more</button>
      </div>
  </div>
</div>
<div class="content service-content">
  <div class="item service-item">
      <div class="title">
          <h3 class="red">Lorem, ipsum.3</h3>
          <img src="./assets/logo.svg" alt="Logo" loading="lazy">
      </div>
      <article>Lorem, ipsum dolor. <br/> Lorem, ipsum dolor.</article>
      <p>Lorem ipsum dolor sit.</p>
      <div class="button-container">
          <button>Talk to Agent</button>
          <button>Discover more</button>
      </div>
  </div>
  <div class="item service-item">
      <div class="title">
          <h3 class="red">Lorem, ipsum.3</h3>
          <img src="./assets/logo-btv.svg" alt="Logo" loading="lazy">
      </div>
      <article>Lorem, ipsum dolor. <br/> Lorem, ipsum dolor.</article>
      <p>Lorem ipsum dolor sit.</p>
      <div class="button-container">
          <button>Talk to Agent</button>
          <button>Discover more</button>
      </div>
  </div>
</div>
  `
}

var slideIndex = 1
function plusDivs(n, classStr, bulletsClassStr) {
  showDivs((slideIndex += n), classStr, bulletsClassStr)
}
function showDivs(n, classStr, bulletsClassStr) {
  var i
  var slides = document.getElementsByClassName(classStr)
  var bullets = document.getElementsByClassName(bulletsClassStr)
  if (slides && bullets) {
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none'
      bullets[i].style.opacity = 0.56
    }
    if (classStr === 'mySlides') {
      slides[slideIndex - 1].style.display = 'block'
    }

    slides[slideIndex - 1].style.display = 'flex'
    bullets[slideIndex - 1].style.opacity = 1
  }
}

function setDivs(n, classStr, bulletsClassStr) {
  var slides = document.getElementsByClassName(classStr)
  var bullets = document.getElementsByClassName(bulletsClassStr)
  if (slides && bullets) {
    for (var index = 0; index < slides.length; index++) {
      slides[index].style.display = 'none'
      bullets[index].style.opacity = 0.56
    }
    slides[n].style.display = 'flex'
    bullets[n].style.opacity = 1
  }
}

showDivs(slideIndex, 'service-content', 'main-slider-bullets-services')
document.getElementById('arrow-services-prev').addEventListener('click', () => {
  plusDivs(-1, 'service-content', 'main-slider-bullets-services')
})
document.getElementById('arrow-services-next').addEventListener('click', () => {
  plusDivs(+1, 'service-content', 'main-slider-bullets-services')
})
var serviceSliderBullets = document.querySelectorAll('.main-slider-bullets-services')
serviceSliderBullets.forEach((e, i) => {
  serviceSliderBullets[i].addEventListener('click', () => {
    setDivs(i, 'service-content', 'main-slider-bullets-services')
  })
})
