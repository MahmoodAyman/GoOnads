const navbarToggler = document.querySelector(".navbar-toggler");

const header= document.getElementById("header");
navbarToggler.addEventListener("click", function () {
  this.firstElementChild.classList.toggle("fa-times");
});

window.onscroll = function () {
  if (window.scrollY >= 60 || window.pageYOffset >= 60) {
    header.classList.add("navbar-scroll");
  } else {
   header.classList.remove("navbar-scroll");
  }
};
