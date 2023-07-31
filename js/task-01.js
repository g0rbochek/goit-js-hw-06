const liItems = document.querySelectorAll(".item");
console.log("Number of categories:", liItems.length);

//    <li class="item">
//      <h2>Animals</h2>

//      <ul>
//        <li>Cat</li>
//        <li>Hamster</li>
//        <li>Horse</li>
//        <li>Parrot</li>
//      </ul>
//    </li>
//    <li class="item">
//      <h2>Products</h2>

//      <ul>
//        <li>Bread</li>
//        <li>Prasley</li>
//        <li>Cheese</li>
//      </ul>
//    </li>
//    <li class="item">
//      <h2>Technologies</h2>

//      <ul>
//        <li>HTML</li>
//        <li>CSS</li>
//        <li>JavaScript</li>
//        <li>React</li>
//        <li>Node.js</li>
//      </ul>
//    </li>
//  </ul>;

liItems.forEach(function (el) {
  const list = el.querySelector("h2");
  const listEl = el.querySelectorAll("li");
  console.log("Categoty:", list.textContent);
  console.log("Elements", listEl.length);
});
