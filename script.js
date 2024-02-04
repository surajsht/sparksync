const btnSearch = document.querySelector(".btn-search");

if (btnSearch) {
  const btnSearchClose = document.querySelector(".btn-search-close");
  const navbar = document.querySelector(".navbar");

  btnSearch.addEventListener("click", () => {
    navbar.classList.add("search-active");
  });

  btnSearchClose.addEventListener("click", () => {
    navbar.classList.remove("search-active");
  });
}

var swiper = new Swiper(".partnered-companies-detail", {
  loop: true,
  speed: 950,
  slidesPerView: 1,
  spaceBetween: 24,
  autoplay: {
    delay: 4400,
    disableOnInteraction: false,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1025: {
      slidesPerView: 5,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".our-projects-content", {
  loop: true,
  speed: 1000,
  slidesPerView: 1,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1025: {
      slidesPerView: 3,
    },
    1600: {
      slidesPerView: 4,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "progressbar",
  },
  navigation: {
    nextEl: ".our-projects-btn-next",
    prevEl: ".our-projects-btn-prev",
  },
});

var swiper = new Swiper(".testimonial-content", {
  spaceBetween: 32,
  loop: true,
  speed: 1000,
  slidesPerView: 1,
  autoplay: {
    delay: 5150,
    disableOnInteraction: false,
  },
  breakpoints: {
    992: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".testimonial-btn-next",
    prevEl: ".testimonial-btn-prev",
  },
});
