const closeButton = document.querySelector(".close-nav");
const openButton = document.querySelector(".open-nav");
const nav = document.querySelector(".nav");
const ul = document.querySelector(".ul");

openButton.addEventListener("click", () => {
  nav.classList.add("navigation-open");
  closeButton.classList.add("rotate");
  ul.classList.add("fadeIn");
});

closeButton.addEventListener("click", () => {
  nav.classList.remove("navigation-open");
  closeButton.classList.remove("rotate");
  ul.classList.remove("fadeIn");
});
