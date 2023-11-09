const langFromSession = sessionStorage.getItem('lang')
const urlParams = new URLSearchParams(window.location.search)
const myParam = urlParams.get('lang')
let loading = true
if (langFromSession && !myParam) {
  window.location.search = `?lang=${langFromSession}`
}
if ((!myParam && langFromSession) || myParam === 'en' || (!myParam && !langFromSession)) {
  document.body.style.display = 'none'
  document.querySelectorAll('.ar').forEach((e) => {
    e.remove()
  })
  document.body.style.display = 'block'
} else {
  document.body.style.display = 'none'
  document.querySelectorAll('.en').forEach((e) => {
    e.remove()
    document.body.style.display = 'block'

    let sectionToChangeDir = document.querySelectorAll('.switch-dir')
    if (sectionToChangeDir) {
      sectionToChangeDir.forEach((e) => {
        e.style.direction = 'rtl'
      })
    }
    let sectionTorRvirseDir = document.querySelectorAll('.switch-dir-rev')
    sectionTorRvirseDir.forEach((e) => {
      e.style.direction = 'ltr'
    })
    let buttonsContainer = document.querySelectorAll('.buttons-container')
    if (buttonsContainer) {
      buttonsContainer.forEach((e) => {
        e.style.justifyContent = 'center'
      })
    }
    let bullets = document.querySelectorAll('.bullets')
    if (bullets) {
      bullets.forEach((e) => {
        e.style.justifyContent = 'center'
        e.style.direction = 'rtl'
        e.style.marginLeft = '0'
      })
    }
    let partnerItem = document.querySelectorAll('.partner-item')
    if (partnerItem) {
      partnerItem.forEach((e) => {
        e.style.marginLeft = '0px'
        e.style.marginRight = '50px'
      })
    }
    let contactFormTextArea = document.querySelector('.contact-form-textarea')
    if (contactFormTextArea) {
      contactFormTextArea.style.right = '0%'
    }
    let arrows = document.querySelectorAll('.arrow-switch')
    let articelArrowPrev = document.getElementById('arrow-article-prev')
    let articelArrowNext = document.getElementById('arrow-article-next')
    if (arrows) {
      arrows.forEach((e) => {
        e.style.transform = 'rotateY(180deg)'
      })
      if (articelArrowPrev) {
        articelArrowPrev.style.left = '95%'
      }
      if (articelArrowNext) {
        articelArrowNext.style.right = '95%'
      }
    }
  })
}
let switchArButton = document.querySelector('.switch-ar')
let switchEnButton = document.querySelector('.switch-en')
let switchArButtonRes = document.querySelector('.res-switch-ar')
let switchEnButtonRes = document.querySelector('.res-switch-en')
if (switchArButton) {
  switchArButton.addEventListener('click', () => {
    console.log('tes')
    window.location.search = '?lang=ar'
    sessionStorage.setItem('lang', 'ar')
  })
}
if (switchArButtonRes) {
  switchArButtonRes.addEventListener('click', () => {
    console.log('tes')
    window.location.search = '?lang=ar'
    sessionStorage.setItem('lang', 'ar')
  })
}
if (switchEnButton) {
  switchEnButton.addEventListener('click', () => {
    window.location.search = '?lang=en'
    sessionStorage.setItem('lang', 'en')
  })
}
if (switchEnButtonRes) {
  switchEnButtonRes.addEventListener('click', () => {
    window.location.search = '?lang=en'
    sessionStorage.setItem('lang', 'en')
  })
}
