// classList = Element property in JavaScript used to interact 
//             with an element's list of classes (CSS Classes)
//             Allows you to make reusable classes for many elements
//             across your webpage.

//  add(for add Class to element)             
//  remove(for remove Class on element)       
//  toggle(Remove if present, Add if not)            
//  replace(oldClass, newClass)               
//  contains()                                

const myH1 = document.getElementById('myH1');
const myBtn = document.getElementById('myButton');

// // add()
// myBtn.addEventListener('mouseover', event => {
//   myBtn.classList.add('hover');
// })

// // remove()
// myBtn.addEventListener('mouseout', event => {
//   myBtn.classList.remove('hover');
// })

// // toggle()
// myBtn.addEventListener('click', event => {
//   myBtn.classList.toggle('enabled');
// })

// replace()
// myBtn.addEventListener('click', event => {
//   myBtn.classList.replace('enabled', 'disabled');
// })

myH1.classList.add('enabled');
myBtn.classList.add('enabled');

// contains()
myBtn.addEventListener('click', event => {
  if (event.target.classList.contains('disabled')) {
    event.target.textContent += '🤬';
  } else {
    event.target.classList.replace('enabled', 'disabled');
  }

})

console.log(myBtn);

let buttons = document.querySelectorAll('.myButtons');

buttons.forEach(button => {
  button.classList.add('enabled');
})

buttons.forEach(button => {
  button.addEventListener('mouseover', event => {
    event.target.classList.toggle('hover')
  })
})

buttons.forEach(button => {
  button.addEventListener('mouseout', event => {
    event.target.classList.toggle('hover')
  })
})

buttons.forEach(button => {
  button.addEventListener('click', event => {
    if (event.target.classList.contains('disabled')) {
      event.target.textContent += '😡';
    } else {
      event.target.textContent = 'Disabled';
      event.target.classList.replace('enabled', 'disabled')
    }
  })
})
