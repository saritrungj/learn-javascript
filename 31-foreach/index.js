let numbers = [1, 2, 3, 4, 5];

// default foreach
numbers.forEach(display);
numbers.forEach(double);
numbers.forEach(triple);
numbers.forEach(squre);
numbers.forEach(cube);

function display(element) {
  console.log(element);
}

function double(element, index, array) {
  array[index] = element * 2;
}

function triple(element, index, array) {
  array[index] = element * 3;
}

function squre(element, index, array) {
  array[index] = Math.pow(element, 2);
}

function cube(element, index, array) {
  array[index] = Math.pow(element, 3);
}


// foreach with arrow functions
numbers.forEach((element) => {
  console.log(element);
});


let fruits = ['apple', 'banana', 'orange', 'coconut'];

fruits.forEach(display);
fruits.forEach(upperCase);
fruits.forEach(lowerCase);
fruits.forEach(capitalize);

function display(element) {
  console.log(element);
}

fruits.forEach((element) => {
  console.log(element);
})

function upperCase(element, index, array) {
  array[index] = element.toUpperCase();
}

function lowerCase(element, index, array) {
  array[index] = element.toLowerCase();
}

function capitalize(element, index, array) {
  array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}
