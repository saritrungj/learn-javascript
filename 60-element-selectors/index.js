// getElementById()          <=  ELEMENT OR NULL
// getElementsByClassName()  <=  HTML COLLECTION        
// getElementsByTagName()    <=  HTML COLLECTION      
// querySelector()           <=  ELEMENT OR NULL
// querySelectorAll()        <=  NODELIST



// getElementById()          <=  ELEMENT OR NULL
const myHeading = document.getElementById('my-heading');
myHeading.style.backgroundColor = 'Yellow';
myHeading.style.textAlign = 'center';

console.log(myHeading);

// getElementsByClassName()  <=  HTML COLLECTION  
const fruits = document.getElementsByClassName('fruits');
fruits[0].style.backgroundColor = 'red';
fruits[1].style.backgroundColor = 'orange';
fruits[2].style.backgroundColor = 'green';

/*
for(let fruit of fruits) {
  fruit.style.backgroundColor = 'black';
  fruit.style.color = 'white';
}
*/

Array.from(fruits).forEach((fruit) => {
  fruit.style.backgroundColor = 'lightgreen';
})
console.log(fruits);

// getElementsByTagName()    <=  HTML COLLECTION  
const h4Elements = document.getElementsByTagName('h4');
const liElements = document.getElementsByTagName('li');

/*
for(let h4Element of h4Elements) {
  h4Element.style.backgroundColor = 'red';
}

for(let liElement of liElements) {
  liElement.style.backgroundColor = 'lightblue';
}
*/

Array.from(h4Elements).forEach((h4Element) => {
  h4Element.style.backgroundColor = 'red';
})

Array.from(liElements).forEach((liElement) => {
  liElement.style.backgroundColor = 'lightblue';
})

console.log(h4Elements);

// querySelector()           <=  ELEMENT OR NULL
const element = document.querySelector('.fruits');

element.style.backgroundColor = 'green';


// querySelectorAll()        <=  NODELIST
const foods = document.querySelectorAll('.fruits');

foods[0].style.backgroundColor = 'yellow';

foods.forEach((food) => {
  food.style.backgroundColor = 'yellow';
});