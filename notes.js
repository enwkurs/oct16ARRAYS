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
  
  //
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
  console.log(food);
  console.log(food.vegetables[2].name);
  // To call more you could keep repeatign ".vegetables[2].name" and name each [1] [2] etc, or use "loops"
  
  //
  //
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  //
  //
  //
  
  // For loop
  for ( let index = 0; index < 10; index++) {
    console.log(`Counting up ${index}`)
  };
  // index can also be written as "i" 
  // index++ is the same as "index + 1"
  // index =+  1 ???? Every 1 item , =+ 2 Every second item
  // ++ Increment by 1
  // -- Decrease by 1
  
  for ( let index = 10; index > 0; index--) {
    console.log(`Counting down ${index}`);
  }