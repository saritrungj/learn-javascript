const fruits = [{name: "apple", color: "red", calories: 95}, 
{name: "orange", color: "orange", calories: 45}, 
{name: "banana", color: "yellow", calories: 105}, 
{name: "coconut", color: "green", calories: 159},
{name: "pineapple", color: "yellow", calories: 37}];

fruits.push({name: "grapes", color: "purple", calories: 160})
// fruits.splice(0,1)

console.log(fruits);

// foreach
fruits.forEach(fruits => console.log(fruits))

// map
const fruitNames = fruits.map(fruit => fruit.name);
const fruitColor = fruits.map(fruit => fruit.color);
const fruitCalories = fruits.map(fruit => fruit.calories);

console.log(fruitNames);
console.log(fruitColor);
console.log(fruitCalories);

// filter
const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

console.log(yellowFruits);
console.log(lowCalFruits);
console.log(highCalFruits);

// reduce
const maxFruit = fruits.reduce((max, fruit) => 
fruit.calories > max.calories ? fruit : max)
const minFruit = fruits.reduce((min, fruit) => 
fruit.calories < min.calories ? fruit : min)

console.log(maxFruit.calories);
console.log(minFruit.calories);