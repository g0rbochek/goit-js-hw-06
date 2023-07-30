const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");

const markup = ingredients.map((el) => {
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = el;
  return li;
});

list.append(...markup);
console.log(markup);
console.log(list);
