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
("use strict");
var testim = document.getElementById("reviews__slider"),
  reviewDot = Array.prototype.slice.call(
    document.getElementById("slider-dots").children
  ),
  reviewContent = Array.prototype.slice.call(
    document.getElementById("review-content").children
  ),
  leftArrow = document.getElementById("left-arrow"),
  rightArrow = document.getElementById("right-arrow"),
  testimSpeed = 4500,
  currentSlide = 0,
  currentActive = 0,
  testimTimer,
  touchStartPos,
  touchEndPos,
  touchPosDiff,
  ignoreTouch = 30;
window.onload = function () {
  // Testim Script
  function playSlide(slide) {
    for (var k = 0; k < reviewDot.length; k++) {
      reviewContent[k].classList.remove("active");
      reviewContent[k].classList.remove("inactive");
      reviewDot[k].classList.remove("active");
    }

    if (slide < 0) {
      slide = currentSlide = reviewContent.length - 1;
    }

    if (slide > reviewContent.length - 1) {
      slide = currentSlide = 0;
    }

    if (currentActive != currentSlide) {
      reviewContent[currentActive].classList.add("inactive");
    }
    reviewContent[slide].classList.add("active");
    reviewDot[slide].classList.add("active");

    currentActive = currentSlide;

    clearTimeout(testimTimer);
    testimTimer = setTimeout(function () {
      playSlide((currentSlide += 1));
    }, testimSpeed);
  }

  leftArrow.addEventListener("click", function () {
    playSlide((currentSlide += 1));
  });

  rightArrow.addEventListener("click", function () {
    playSlide((currentSlide -= 1));
  });

  for (var l = reviewDot.length - 1; l >= 0; l--) {
    reviewDot[l].addEventListener("click", function () {
      playSlide((currentSlide = reviewDot.indexOf(this)));
    });
  }

  playSlide(currentSlide);

  // keyboard shortcuts
  document.addEventListener("keyup", function (e) {
    switch (e.keyCode) {
      case 37:
        leftArrow.click();
        break;

      case 39:
        rightArrow.click();
        break;

      case 39:
        rightArrow.click();
        break;

      default:
        break;
    }
  });

  testim.addEventListener("touchstart", function (e) {
    touchStartPos = e.changedTouches[0].clientX;
  });

  testim.addEventListener("touchend", function (e) {
    touchEndPos = e.changedTouches[0].clientX;
    touchPosDiff = touchStartPos - touchEndPos;
    if (touchPosDiff > 0 + ignoreTouch) {
      leftArrow.click();
    } else if (touchPosDiff < 0 - ignoreTouch) {
      rightArrow.click();
    } else {
      return;
    }
  });
};

// team slider
var multipleCardCarousel = document.querySelector("#carouselExampleControls");
if (window.matchMedia("(min-width: 768px)").matches) {
  var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false,
  });
  var carouselWidth = $(".carousel-inner")[0].scrollWidth;
  var cardWidth = $(".carousel-item").width();
  var scrollPosition = 0;
  $("#carouselExampleControls .carousel-control-next").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 4) {
      scrollPosition += cardWidth;
      $("#carouselExampleControls .carousel-inner").animate(
        { scrollRight: scrollPosition },
        600
      );
    }
  });
  $("#carouselExampleControls .carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      $("#carouselExampleControls .carousel-inner").animate(
        { scrollRight: scrollPosition },
        600
      );
    }
  });
} else {
  $(multipleCardCarousel).addClass("slide");
}
