const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");
const arr = [];

console.log(arr);

const markup = ingredients.forEach((el) => {
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = el;
  arr.push(li);
});

list.append(...arr);
console.log(markup);
console.log(list);
