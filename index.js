const hamburgerMenu = document.querySelector(".hamburger-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMenu = document.querySelector(".close-menu");
const mobileLink = document.querySelectorAll(".mobile-link");

hamburgerMenu.addEventListener("click", () => {
  mobileMenu.style.visibility = "visible";
});

closeMenu.addEventListener("click", () => {
  mobileMenu.style.visibility = "hidden";
});

mobileLink.forEach((e) => {
  e.addEventListener("click", () => {
    mobileMenu.style.visibility = "hidden";
  });
});
