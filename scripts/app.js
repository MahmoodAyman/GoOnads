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
  var reveals = document.querySelectorAll(".reveals");
  for (var i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let scrollTop = reveals[i].getBoundingClientRect().top;
    let scrollBottom = scrollTop + reveals[i].clientHeight;
    if (scrollTop <= windowHeight-150) {
      reveals[i].classList.add("reveal-active");
    }
    else {
      reveals[i].classList.remove("reveal-active");
    }
  }
});
