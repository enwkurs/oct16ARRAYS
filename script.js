// Array with Object (Array with nested objects)
const disneyCharacters = [
  { type: "mouse", name: "Mickey" },
  { type: "mouse", name: "Minnie" },
  { type: "dog", name: "Pluto" },
  { type: "duck", name: "Donald" },
  { type: "duck", name: "Daisy" },
  { type: "dog", name: "Goofy" },
  { type: "cat", name: "Figaro" },
  { type: "chipmunk", name: "Chip" },
  { type: "chipmunk", name: "Dale" },
  { type: "bird", name: "Clara Cluck" },
];
console.log(disneyCharacters);
console.log(disneyCharacters[4].name);

// Make the data show on the HTML document
const list = document.querySelector("#list"); // Point to <ul id="list"> in HTML doc

for ( let index = 0; index < disneyCharacters.length; index++) {
const listItem = document.createElement("li");
listItem.textContent = `Name: ${disneyCharacters[index].name}`;
list.appendChild(listItem);
};

//
console.log("-------FOOD-ARRAY---------------------------------------------");
//

// Object with array (Object nested array)
const food = {
  vegetables: [
    { name: "Carrot", color: "orange" },
    { name: "Broccoli", color: "green" },
    { name: "Cabbage", color: "green" },
    { name: "Potato", color: "brown" },
    { name: "Cucumber", color: "green" },
  ],
  fruits: [
    { name: "Apple", color: "red" },
    { name: "Banana", color: "yellow" },
    { name: "Orange", color: "orange" },
    { name: "Pear", color: "green" },
    { name: "Mango", color: "orange" },
  ],
  berries: [
    { name: "Strawberry", color: "red" },
    { name: "Blueberry", color: "blue" },
    { name: "Raspberry", color: "red" },
    { name: "Blackberry", color: "black" },
    { name: "Cloudberry", color: "orange" },
  ],
};
console.log("---------------Whole Array---------");
console.log(food);

// console.log(food.vegetables[2].name);
// To call more you could keep repeatign ".vegetables[2].name" and name each [1] [2] etc, or use "loops"

// Set up a loop that grabs several items at once
console.log("---------------Check Vegetables---------");
for ( let index = 0; index < food.vegetables.length; index++) {
  // why do we start with 0?
  console.log(food.vegetables[index]);
}

console.log("-----------Check Foodnames Veggies---------");
for ( let index = 0; index < food.entries; index++) {
  const foodNames = food[index];
  console.log(foodNames.vegetables);
}

console.log("-----------Check Foodnames Veggies---------");
for (let index = 0; index < food.vegetables.length; index++) {
  const foodItem = food.vegetables[index];
  console.log(foodItem.name);
}



//
console.log("-----FOR-LOOPS-EXAMPLE---------------------------------");
//

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);
for ( let index = 0; index < numbers.length; index++) {
  console.log(numbers[index]);
};
// numbers.length - Checks how long the array is

