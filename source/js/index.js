var header = document.querySelector(".page-header");
var link = header.querySelector(".main-nav__toggle");
var popup = header.querySelector(".main-nav");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.toggle("modal-close");
});
