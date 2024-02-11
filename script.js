// switch website theme

let themeSwitcher = document.querySelector(".theme-switcher");

themeSwitcher.addEventListener("click", () => {
  let darkModeCss = document.querySelector("#darkmode-css");

  document.body.classList.toggle("darkmode");

  if (document.body.classList.contains("darkmode")) {
    darkModeCss.disabled = false;
  } else {
    darkModeCss.disabled = true;
  }
});

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

// swiper sliders

let swiperSlider = document.querySelector(".swiper");

if (swiperSlider) {
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

  var swiper = new Swiper(".our-team-carousel", {
    effect: "coverflow",
    centeredSlides: true,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5150,
      disableOnInteraction: false,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

// word steps popup

let wordSteps = document.querySelector(".word-steps");

if (wordSteps) {
  let mainContainer = document.querySelector(
    ".work-steps .section-body-bottom"
  );
  let workStepPopup = document.querySelector(".work-steps-popup");
  let workStepPopupClose = workStepPopup.querySelector(".fa-solid");

  mainContainer.addEventListener("click", () => {
    workStepPopup.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  workStepPopupClose.addEventListener("click", () => {
    workStepPopup.classList.remove("active");
    document.body.style.overflow = "visible";
  });
}
