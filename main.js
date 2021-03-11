// MENU MOBILE
const menuIcon = document.querySelector(".hamburger-menu");
const mobileList = document.querySelector(".mobile-list ");
const navMobile = document.querySelector(".nav-mobile");
const navDesktop = document.querySelector(".nav-desktop");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("hamburger-menu--change");
  mobileList.classList.toggle("show");
});

window.addEventListener("scroll", (e) => {
  if (window.scrollY >= 20) {
    navMobile.classList.add("nav-mobile--bcg-col");
    navDesktop.classList.add("nav-mobile--bcg-col");
  } else {
    navDesktop.classList.remove("nav-mobile--bcg-col");
  }

  // SHOW EFFECT
  window.addEventListener("scroll", () => {
    const revs = document.querySelectorAll(".rev");

    revs.forEach((rev) => {
      let windowHeight = window.innerHeight;
      let revTop = rev.getBoundingClientRect().top;
      const revPoint = 150;

      if (revTop < windowHeight - revPoint) {
        rev.classList.add("active");
      } else rev.classList.remove("active");
    });
  });
});

const headerText =
  "For over 17 Years, Fetch! Pet Care has been a trusted partner in keeping pets healthy and happy!";
let i = 0;

function type() {
  if (i < headerText.length) {
    document.querySelector(".header-desc").innerHTML += headerText.charAt(i);
    i++;
    setTimeout(type, 20);
  }
}
type();
