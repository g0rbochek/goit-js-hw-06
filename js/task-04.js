const element = {
  clickPlus: document.querySelector('[data-action = "increment"]'),
  clickMinus: document.querySelector('[data-action = "decrement"]'),
  span: document.querySelector("#value"),
};

element.clickPlus.addEventListener("click", clickPluss);
element.clickMinus.addEventListener("click", clickMinuss);

let counterValue = 0;

function clickPluss(evt) {
  counterValue += 1;
  element.span.textContent = counterValue;
}

function clickMinuss(evt) {
  counterValue -= 1;
  element.span.textContent = counterValue;
}
