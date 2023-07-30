const elements = {
  input: document.querySelector("#font-size-control"),
  span: document.querySelector("#text"),
};

elements.input.addEventListener("input", handlerValue);

function handlerValue(evt) {
  elements.span.style.fontSize = `${evt.currentTarget.value}px`;
}
