// Example : 1 <h1>

// STEP 1 : CREATE THE ELEMENT
const newH1 = document.createElement('h1');
const newListItem = document.createElement('li');

// STEP 2 : ADD ATTRIBUTES / PROPERTIES
newH1.textContent = 'I like a noodles!';
newH1.id = 'myH1';
newH1.style.color = 'tomato';
newH1.style.textAlign = 'center';
newH1.style.margin = '1rem';

newListItem.textContent = 'coconut';
newListItem.id = 'coconut';
newListItem.style.fontWeight = 'bold';
newListItem.style.backgroundColor = 'lightgreen';

// STEP 3 : APPEND ELEMENT TO DOM
// NOTE: append your element must be a bottom of content
//       if you want to locate to first element of content
//       user prepend()

// document.body.append(newH1);
// document.body.prepend(newH1);
// const orange = document.getElementById('orange');
// document.getElementById('box3').append(newH1);
// document.getElementById('fruits').insertBefore(newListItem, orange);
// const box2 = document.getElementById('box2');
// document.body.insertBefore(newH1, box2);
const listItems = document.querySelectorAll('#fruits li');
document.getElementById('fruits').insertBefore(newListItem, listItems[0])

// REMOVE HTML ELEMENT
// document.body.removeChild(newH1);
document.getElementById('fruits').removeChild(newListItem);



