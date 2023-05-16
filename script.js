const closeButton = document.querySelector(".close-nav");
const openButton = document.querySelector(".open-nav");
const nav = document.querySelector(".nav");
const ul = document.querySelector(".ul");
const main = document.querySelector(".jsBody");
const logo = document.querySelector(".logo");
const upcomingShows = document.querySelector(".upcoming-shows");
const showsButton = document.getElementById("link-item4");
const contactButton = document.getElementById("link-item2");
const booking = document.querySelector(".contact-div");
const imgSlideShow = document.querySelector(".imageGallery");
const hidden = document.querySelector(".hidden");

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

showsButton.addEventListener("click", (event) => {
  event.preventDefault();
  nav.classList.remove("navigation-open");
  closeButton.classList.remove("rotate");
  ul.classList.remove("fadeIn");
  upcomingShows.scrollIntoView({
    behavior: "smooth",
  });
});

contactButton.addEventListener("click", (event) => {
  event.preventDefault();
  nav.classList.remove("navigation-open");
  closeButton.classList.remove("rotate");
  ul.classList.remove("fadeIn");
  booking.scrollIntoView({
    behavior: "smooth",
  });
});

///////////////////////////////////////////////

//Picture Slideshow Carousel

let myIndex = -1;
const slides = document.getElementsByClassName("mySlides");

function carousel() {
  for (const slide of slides) {
    slide.style.display = "none";
  }
  myIndex = (myIndex + 1) % slides.length;
  slides[myIndex].style.display = "block";
  setTimeout(carousel, 7000);
}

carousel();

////////////////////////////////////////////

//Preloader

let loader = document.getElementById("preloader");

const preLoader = window.addEventListener("load", function () {
  setTimeout(function () {
    loader.style.animation = "fadeOut 1.4s linear";
    ul.classList.add("fadeIn");
    logo.classList.add("fadeInLogo");
    //openGame.classList.add("fadeIn");
    openButton.classList.add("fadeIn");

    setTimeout(function () {
      loader.style.display = "none";
    }, 1400);
  }, 1400);
});

////////////////////////
