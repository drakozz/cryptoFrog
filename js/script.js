const nav = document.querySelector('#header nav')
const toogle = document.querySelectorAll('nav .toogle')

for (const element of toogle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

window.addEventListener('scroll', function () {
  backToTop()
})

/* scroll reveal js*/

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 1000,
  reset: true
})

scrollReveal.reveal(
  `
#home .text-home, #home .image, #home .powered, #home h3,
#about .about-text, #about .image img,
#token .tokentext, #token .tokencards,
#road-map .tokentext, #road-map .row,
#contact .contact-text, #contact .contact-form, #contact .contact-form .content,
footer .socials, footer .text-footer
`,
  { interval: 100 }
)
