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
