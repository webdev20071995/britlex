elToggler = document.querySelector(".js-toggler"),
elSitenav = document.querySelector(".js-list");

// TOGGLER
if (elToggler) {
  elToggler.addEventListener("click", function () {
    document.body.classList.toggle("body--overflow")
    elToggler.classList.toggle("toggler--open");
    elSitenav.classList.toggle("site-header__sitenav--open");
  });
}