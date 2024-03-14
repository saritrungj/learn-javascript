const pi = 3.14159;
let radius;
let circumference;

// PI = 420.69;
// radius = prompt("Enter the radius of a circle");
// radius = Number(radius);

// circumference = 2 * pi * radius;

// console.log(circumference);

document.getElementById('mySubmit').onclick = () => {
  radius = document.getElementById('myText').value
  radius = Number(radius);
  circumference = 2 * pi * radius;
  document.getElementById('myH3').textContent = `${circumference} cm`;
}