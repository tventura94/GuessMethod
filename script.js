const closeButton = document.querySelector(".close-nav");
const openButton = document.querySelector(".open-nav");
const openGame = document.querySelector(".open-game");
const nav = document.querySelector(".nav");
const ul = document.querySelector(".ul");
const main = document.querySelector(".jsBody");
const logo = document.querySelector(".logo");

///////////////////////////////////////////////////////////

//Button Functionality
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

main.addEventListener("click", () => {
  nav.classList.remove("navigation-open");
  closeButton.classList.remove("rotate");
  ul.classList.remove("fadeIn");
});
///////////////////////////////////////////////

//Picture Slideshow Carousel

let myIndex = 0;

let x = document.getElementsByClassName("mySlides");

function carousel() {
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 7000);
}

carousel();

////////////////////////////////////////////

//Preloader

let loader = document.getElementById("preloader");

window.addEventListener("load", function () {
  loader.style.display = "none";
  ul.classList.add("fadeIn");
  logo.classList.add("fadeInLogo");
  openGame.classList.add("fadeIn");
  openButton.classList.add("fadeIn");
});
