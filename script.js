const generateRandomColorButton = document.querySelector("#generate-random-color");
const addColorButton = document.querySelector("#add-color");

const colorSection = document.querySelector("#color-section");

randomizeColorFunction = function() {
  const color = document.querySelectorAll(".color");
  
  for (let i = 0; i < color.length; i++) {
  let r = Math.floor(Math.random()* 256);
  let g = Math.floor(Math.random()* 256);
  let b = Math.floor(Math.random()* 256);
  let randomColor = `rgb(${r}, ${g}, ${b})`;
  color[i].style.backgroundColor = randomColor;
  }
}

addColorFunction = function() {
  const newColor = document.createElement("div");
  newColor.classList.add("color");
  colorSection.appendChild(newColor);
}


generateRandomColorButton.addEventListener('click', randomizeColorFunction);

addColorButton.addEventListener('click', addColorFunction);