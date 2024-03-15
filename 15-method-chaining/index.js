let username = prompt("Enter your username: ")

/*
  no method chaining
*/

// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();
// let extraChars = username.slice(1);
// extraChars = extraChars.toLowerCase();
// username = letter + extraChars;

// console.log(username);

/*
  method chaining
*/

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLocaleLowerCase();

console.log(username);