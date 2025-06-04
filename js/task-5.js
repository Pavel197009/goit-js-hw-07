function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const span = document.querySelector(".color");
const body = document.querySelector("body");

const handleClick = (event) => {
    span.textContent = getRandomHexColor();
    span.style.color = span.textContent;
    body.style.backgroundColor = span.textContent;
};

button.addEventListener("click", handleClick);