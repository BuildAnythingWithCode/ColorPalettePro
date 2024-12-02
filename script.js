const generateRandomColorButton = document.querySelector("#generate-random-color");
const addColorButton = document.querySelector("#add-color");
const colorSection = document.querySelector("#color-section");
const color = document.querySelector(".color");
const removeText = document.querySelectorAll(".color-text-paragraph-two");

randomizeColorFunction = function() {
  const color = document.querySelectorAll(".color");
  for (let i = 0; i < color.length; i++) {
  let r = Math.floor(Math.random()* 256);
  let g = Math.floor(Math.random()* 256);
  let b = Math.floor(Math.random()* 256);
  let randomColor = `rgb(${r}, ${g}, ${b})`;
  color[i].style.backgroundColor = randomColor;
  }
};

addColorFunction = function() {
  const newColor = document.createElement("div");
  const newColorText = document.createElement("div");
  const newColorTextParagraphOne = document.createElement("p");
  const newColorTextParagraphTwo = document.createElement("p");

  newColorText.classList.add("color-text", "hide");
  newColorTextParagraphOne.classList.add("color-text-paragraph-one");
  newColorTextParagraphTwo.classList.add("color-text-paragraph-two");

  newColorTextParagraphOne.textContent = "Change Color";
  newColorTextParagraphTwo.textContent = "Remove";
  newColor.classList.add("color");

  colorSection.appendChild(newColor);
  newColor.appendChild(newColorText);
  newColorText.appendChild(newColorTextParagraphOne);
  newColorText.appendChild(newColorTextParagraphTwo);

  newColor.addEventListener('mouseover', showText);
  newColor.addEventListener('mouseleave', hideText);
  newColorTextParagraphTwo.addEventListener('click', removeColorFunction);
  };

removeColorFunction = function(event) {
  const currentColor = event.currentTarget.closest(".color");
  colorSection.removeChild(currentColor);
};

showText = function(event) {
  const colorText = event.currentTarget.querySelector(".color-text");
  colorText.classList.remove("hide");
  colorText.classList.add("show");
};

hideText = function(event) {
  const colorText = event.currentTarget.querySelector(".color-text");
  colorText.classList.remove("show");
  colorText.classList.add("hide");
};

color.addEventListener('mouseover', showText);
color.addEventListener('mouseleave', hideText);
generateRandomColorButton.addEventListener('click', randomizeColorFunction);
addColorButton.addEventListener('click', addColorFunction);
removeText.addEventListener('click', removeColorFunction);