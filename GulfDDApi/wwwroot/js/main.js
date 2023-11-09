// Handle Sliders
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

////
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

// Handle Sliders Events
document.getElementById('main-slider-bullet-arrow-prev').addEventListener('click', () => {
  plusDivs(-1, 'mySlides', 'main-slider-bullet')
})
document.getElementById('main-slider-bullet-arrow-next').addEventListener('click', () => {
  plusDivs(+1, 'mySlides', 'main-slider-bullet')
})
document.getElementById('arrow-article-prev').addEventListener('click', () => {
  plusDivs(-1, 'article-content', 'main-article-bullet')
})
document.getElementById('arrow-article-next').addEventListener('click', () => {
  plusDivs(+1, 'article-content', 'main-article-bullet')
})
document.getElementById('arrow-partner-prev').addEventListener('click', () => {
  plusDivs(-1, 'partner-slider', 'main-partners-bullet')
})
document.getElementById('arrow-partner-next').addEventListener('click', () => {
  plusDivs(+1, 'partner-slider', 'main-partners-bullet')
})

var mainSliderBullets = document.querySelectorAll('.main-slider-bullet')
mainSliderBullets.forEach((e, i) => {
  mainSliderBullets[i].addEventListener('click', () => {
    setDivs(i, 'mySlides', 'main-slider-bullet')
  })
})

var articleSliderBullets = document.querySelectorAll('.main-article-bullet')
articleSliderBullets.forEach((e, i) => {
  articleSliderBullets[i].addEventListener('click', () => {
    setDivs(i, 'article-content', 'main-article-bullet')
  })
})
var partnersSliderBullets = document.querySelectorAll('.main-partners-bullet')
partnersSliderBullets.forEach((e, i) => {
  partnersSliderBullets[i].addEventListener('click', () => {
    setDivs(i, 'partner-slider', 'main-partners-bullet')
  })
})

showDivs(slideIndex, 'mySlides', 'main-slider-bullet')
showDivs(slideIndex, 'article-content', 'main-article-bullet')
showDivs(slideIndex, 'partner-slider', 'main-partners-bullet')
