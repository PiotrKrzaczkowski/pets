// MENU MOBILE
const menuIcon = document.querySelector(".hamburger-menu");
const mobileList = document.querySelector(".mobile-list ");
const navMobile = document.querySelector(".nav-mobile");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("hamburger-menu--change");
  mobileList.classList.toggle("show");
});

window.addEventListener("scroll", (e) => {
  if (window.scrollY >= 20) {
    navMobile.classList.add("nav-mobile--bcg-col");
  } else {
    navMobile.classList.remove("nav-mobile--bcg-col");
  }
});
