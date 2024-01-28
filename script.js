const btnSearch = document.querySelector(".btn-search");
const btnSearchClose = document.querySelector(".btn-search-close");
const navbar = document.querySelector(".navbar");

btnSearch.addEventListener("click", () => {
  navbar.classList.add("search-active");
});

btnSearchClose.addEventListener("click", () => {
  navbar.classList.remove("search-active");
});
