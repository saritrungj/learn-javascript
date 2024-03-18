/*
function sayHello() {
  console.log('Hello');
}

setTimeout(sayHello(), 3000);

setTimeout(function() {
  alert('Hello')
}, 3000);

setTimeout(() => alert('Hello'), 3000);


const timeoutId = setTimeout(() => alert('Hello'), 3000);

clearTimeout(timeoutId);

*/
let timeoutId;

function startTimer() {
  console.log('Timer started!');
  timeoutId = setTimeout(() => alert('Hello'), 3000);
}

function clearTimer() {
  clearTimeout(timeoutId);
  console.log('Timer cleared!');
}