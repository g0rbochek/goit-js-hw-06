// Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input),
//     підставляє його поточне значення в span#name - output.Якщо інпут порожній, у
//     спані повинен відображатися рядок "Anonymous".

const elements = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
};

elements.input.addEventListener("input", handler);

function handler(evt) {
  elements.span.textContent = evt.currentTarget.value.trim();
}
