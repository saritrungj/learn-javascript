let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
let numbers = [1, 2, 3, 45, 66, 7888, 33, 21, 11, 12];
const people = [{name: "Spongebob", age: 30, gpa: 3.0}, 
{name: "Patrick", age: 34, gpa: 1.5}, 
{name: "Squidward", age: 38, gpa: 2.5}, 
{name: "Sandy", age: 28, gpa: 4.0}]

fruits.sort();
numbers.sort((a, b) => a - b); // a - b = asc, b - a = desc
people.sort((a, b) => a.name.localeCompare(b.name)); //localeCompare(param) for sort string

console.log(fruits);
console.log(numbers);
console.log(people);