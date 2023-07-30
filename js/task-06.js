// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
//  перевіряє його вміст щодо правильної кількості введених символів.

const elements = {
  input: document.querySelector("#validation-input"),
};

elements.input.addEventListener("blur", handler);

function handler(evt) {
  if (
    evt.currentTarget.value.length === Number(evt.currentTarget.dataset.length)
  ) {
    evt.currentTarget.classList.remove("invalid");
    evt.currentTarget.classList.add("valid");
  } else {
    evt.currentTarget.classList.remove("valid");
    evt.currentTarget.classList.add("invalid");
  }
}
