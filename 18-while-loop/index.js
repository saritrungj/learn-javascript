/*

while (username === "" || username === null) {
  username = prompt(`Enter your name:`)
}

*/

let loggedIn = false;
let username;
let password;

while (!loggedIn) {
  username = prompt("Enter your username");
  password = prompt("Enter your password");

  if (username === "myUsername" && password === "myPassword"){
    loggedIn = true;
    console.log('You are logged in');
  } else {
    console.log('Invalid credentials! Please try again');
  }
}