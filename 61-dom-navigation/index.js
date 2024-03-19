/*
// DOM Navigation => The proces sof navigating through the structure 
//                   of an HTML document using JavaScript.

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

// Example 1-2 : first and last ElementChild
const element = document.getElementById('fruits');

// .firstElementChild
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = 'yellow';

// .lastElementChild
const lastChild = element.lastElementChild;
lastChild.style.backgroundColor = 'green';

const ulElement = document.querySelectorAll('ul');
ulElement.forEach((ul) => {

  // .firstElementChild
  const firstChild = ul.firstElementChild;
  firstChild.style.backgroundColor = 'yellow';

  // .lastElementChild
  const lastChild = ul.lastElementChild; 
  lastChild.style.backgroundColor = 'green';
})

// Example 3-4 : next and previous ElementSibling
const element = document.getElementById('orange');

// .nextElementSibling
const nextSibling = element.nextElementSibling;
nextSibling.style.backgroundColor = 'red';

// .previousElementSibling
const prevElement = element.previousElementSibling;
prevElement.style.backgroundColor = 'green';
*/

// Example 5-6 : parent and children Element
const element = document.getElementById('pie');
const element2 = document.getElementById('fruits');

// .parentElement
const parent = element.parentElement;
parent.style.backgroundColor = 'yellow';

// .children
const children = element2.children;
Array.from(children).forEach((child) => {
  child.style.backgroundColor = 'green';
})


