// ==PSUEDO CODE==
// get all my element from the dom
// arrange the slides next to one another
// when i click left, move slides to the left
// when i click right, move slides to the right
// when i click the nav indicators, move to that slide

const slides = document.getElementsByClassName("carousel-item");
const nextButton = document.getElementById("carousel-button-next");
const prevButton = document.getElementById("carousel-button-prev");
const dots = document.getElementsByClassName("dot");
let position = 0;
const numberOfSlides = slides.length;
