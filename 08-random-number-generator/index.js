// const min = 50;
// const max = 100;

// let randomNumber = Math.floor(Math.random() * (max-min)) + min;

// console.log(randomNumber);

const rollBtn = document.getElementById('roll-btn');
const numberLabel1 = document.getElementById('random-label-1');
const numberLabel2 = document.getElementById('random-label-2');
const numberLabel3 = document.getElementById('random-label-3');
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;


rollBtn.onclick = () => {
  randomNum1 = Math.floor(Math.random() * max) + min;
  randomNum2 = Math.floor(Math.random() * max) + min;
  randomNum3 = Math.floor(Math.random() * max) + min;
  numberLabel1.textContent = `your dice got: ${randomNum1}`;
  numberLabel2.textContent = `your dice got: ${randomNum2}`;
  numberLabel3.textContent = `your dice got: ${randomNum3}`;
}
