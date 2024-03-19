// eventListener = Listen for specific events to create 
//                 interactive web pages events: click, mouseover, mouseout
//                 .addEventListener(event, callback);

const myBox = document.getElementById('myBox');
const myBtn = document.getElementById('myBtn');

// without arrow function
/*
  function changeColor(event) {
    event.target.style.backgroundColor = 'lightpink';
    event.target.textContent = 'OUCH! 🤓';
    event.target.textAlign = 'center';
  }

  myBox.addEventListener('click', changeColor());
*/

myBox.addEventListener('click', (event) => {
  event.target.style.backgroundColor = 'lightpink';
  event.target.textContent = 'OUCH! 🤓';
  event.target.textAlign = 'center';
})

myBox.addEventListener('mouseover', (event) => {
  event.target.style.backgroundColor = 'lightyellow';
  event.target.textContent = 'Dont do it! 😜';
  event.target.textAlign = 'center';
})

myBox.addEventListener('mouseout', (event) => {
  event.target.style.backgroundColor = 'lightblue';
  event.target.textContent = 'Click Me 😟';
  event.target.textAlign = 'center';
})

myBtn.addEventListener('click', (event) => {
  event.target.textContent = 'Oops!';
})

myBtn.addEventListener('mouseover', (event) => {
  event.target.textContent = 'Do not touch me too long!';
})

myBtn.addEventListener('mouseout', (event) => {
  event.target.textContent = 'Click me';
})

