/*
let age = 21;

//shorthand if statements
let message = age >= 18 ? 'Your an adult' : 'Your a minor';
console.log(message);

let time = 16;
let greeting = time < 12 ? "Good morning!" : "Good afternoon";
console.log(greeting);

let isStudent = false;
let message = isStudent ? "You are a student" : "You are NOT a student";
console.log(message);
*/

let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`You total is $${purchaseAmount - purchaseAmount * (discount/100)}`);