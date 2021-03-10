// MENU MOBILE
const menuIcon = document.querySelector(".hamburger-menu");
const mobileList = document.querySelector(".mobile-list ");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("hamburger-menu--change");
  mobileList.classList.toggle("show");
});
