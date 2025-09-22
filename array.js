// Array of fruits
const fruits = ["Apple", "Banana", "Orange", "Mango", "Watermelon"];

// Display original fruits
const originalList = document.getElementById("original");
fruits.forEach((fruit) => {
  const li = document.createElement("li");
  li.textContent = fruit;
  originalList.appendChild(li);
});

// Output box
const output = document.getElementById("output");

// 1. map()
function showMap() {
  const result = fruits.map((fruit) => fruit.toUpperCase());
  console.log("map() result:", result);
  output.innerHTML =
    "<strong>map():</strong><ul>" +
    result.map((f) => `<li>${f}</li>`).join("") +
    "</ul>";
}

// 2. filter()
function showFilter() {
  const result = fruits.filter((fruit) => fruit.length > 5);
  console.log("filter() result:", result);
  output.innerHTML =
    "<strong>filter():</strong><ul>" +
    result.map((f) => `<li>${f}</li>`).join("") +
    "</ul>";
}

// 3. reduce()
function showReduce() {
  const totalLetters = fruits.reduce((sum, fruit) => sum + fruit.length, 0);
  console.log("reduce() result (total letters):", totalLetters);
  output.innerHTML = `<strong>reduce():</strong> Total number of letters = ${totalLetters}`;
}

// 4. forEach()
function showForEach() {
  console.log("forEach() result:");
  let listItems = "";
  fruits.forEach((fruit) => {
    console.log(fruit);
    listItems += `<li>${fruit}</li>`;
  });
  output.innerHTML = "<strong>forEach():</strong><ul>" + listItems + "</ul>";
}
