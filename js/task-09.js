function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль по кліку на button.change - color
// і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

const elememts = {
  button: document.querySelector(".change-color"),
  span: document.querySelector(".color"),
  body: document.querySelector("body"),
};

elememts.button.addEventListener("click", handlerClick);

function handlerClick(evt) {
  const changeColor = getRandomHexColor();
  elememts.body.style.backgroundColor = changeColor;
  elememts.span.textContent = changeColor;
}
