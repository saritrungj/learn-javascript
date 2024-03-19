// NodeList = Static collection of HTML elements by (id, class, element)
//            Can be created by using querySelectorAll()
//            Similar to an array, but no (map, filter, reduce)
//            NodeList won't update to automatically reflect changes

const buttons = document.querySelectorAll('.myButtons');

// ADD HTML/CSS PROPERTIES
/*

// Default
buttons.forEach(button => {
  button.textContent = 'Click';
})

// Event: Click
buttons.forEach(button => {
  button.addEventListener('click', event => {
    event.target.style.backgroundColor = 'tomato';
  })
})
*/

buttons.forEach(button => {
  button.addEventListener('mouseover', event => {
    event.target.style.backgroundColor = 'limegreen';
    button.textContent = `Hover`;
  })
})

buttons.forEach(button => {
  button.addEventListener('mouseout', event => {
    event.target.style.backgroundColor = 'orange';
    button.textContent = `Button`;
  })
})

// ADD AN ELEMENT
const newButton = document.createElement('button');
newButton.classList = 'myButtons';
newButton.textContent = 'New Button';

document.body.appendChild(newButton);

console.log(newButton);
console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener('click', event => {
    event.target.remove();
    console.log(buttons);
  })
})