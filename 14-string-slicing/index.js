const fullName = "Sarit Rungjapoh";
const email = "sarit@gmail.com";

/*
  for split a string first param is what index you want to start slice and last param is
  what index you want to end of slice
  .slice(start, end);

Example: 
  let firstName = fullName.slice(0, 5);
  let lastName = fullName.slice(6, 15);
  let firstChar = fullName.slice(0, 1);
  let lastChar = fullName.slice(-3);

  let firstName = fullName.slice(0, fullName.indexOf(" "));
  let lastName = fullName.slice(fullName.indexOf(" "));
*/

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(username);
console.log(extension);