const navbarToggler = document.querySelector(".navbar-toggler");

// navbar toggler
const header = document.getElementById("header");
navbarToggler.addEventListener("click", function () {
  this.firstElementChild.classList.toggle("fa-times");
});

// navbar background change on scroll
window.onscroll = function () {
  if (window.scrollY >= 60 || window.pageYOffset >= 60) {
    header.classList.add("navbar-scroll");
  } else {
    header.classList.remove("navbar-scroll");
  }
};

// scroll reveal

window.addEventListener("scroll", function () {
  let revealElements = document.querySelectorAll(".reveals");
  for (let i = 0; i < revealElements.length; i++) {
    let revealElement = revealElements[i];
    let bounds = revealElement.getBoundingClientRect();
    let elemTop = bounds.top;
    if (elemTop < window.innerHeight / 1.1) {
      revealElement.classList.add("reveal-active");
    }
  }
});

// reviews slider
// vars


// team slider
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});