const display = document.querySelector('.display');
const operatorBtn = document.querySelectorAll('.operator-btn')

function appendToDisplay(input) {
  display.value += input;
  console.log(display.value);
}

function clearDisplay() {
  display.value = ``;
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}
