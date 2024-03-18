// Example 1 : swap a number in an array

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);

// Example 2 : elements in an array

const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);
// now array swap to like this : ['white', 'green', 'blue', 'black', 'red']

// Example 3 : assign array elements to variables

const [firstColor, secondColor, thirdColor, ...extraColros] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColros);

// Example 4 : extract values from objects
const person1 = {
  firstName: "Spongebob",
  lastName: "Squarepants",
  age: 30,
  job: "Fry Cook"
}

const person2 = {
  firstName: "Patrick",
  lastName: "Star",
  age: 34,
}

const {firstName, lastName, age, job='Unemployed'} = person2;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

// Example 5 : destructure in function parameters
function displayPerson({firstName, lastName, age, job="Unemployed"}) {
  console.log(`Name: ${firstName} ${lastName}`);
  console.log(`Age: ${age}`);
  console.log(`Job: ${job}`);
}

const person3 = {
  firstName: "Spongebob",
  lastName: "Squarepants",
  age: 30,
  job: "Fry Cook"
}

const person4 = {
  firstName: "Patrick",
  lastName: "Star",
  age: 34,
}

displayPerson(person3);
displayPerson(person4);
