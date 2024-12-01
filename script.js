const button = document.querySelector("button");
const colorSection = document.querySelector("#color-section");

randomizeColorFunction = function() {
  let r = Math.floor(Math.random()* 256);
  let g = Math.floor(Math.random()* 256);
  let b = Math.floor(Math.random()* 256);
  let randomColor = `rgb(${r}, ${g}, ${b})`;
  colorSection.style.backgroundColor = randomColor;
}

button.addEventListener('click', randomizeColorFunction);