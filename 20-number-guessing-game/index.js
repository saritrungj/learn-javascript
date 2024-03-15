const minNumber = 1;
const maxNumber = 100;
const answer = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

let attempts = 0;
let guess;
let running = true;

while(running) {
  guess = prompt(`Guess a number between ${minNumber} to ${maxNumber}`);
  guess = Number(guess);
  if (isNaN(guess)) {
    alert(`Please enter a valid number`);
  } else if (guess < minNumber || guess > maxNumber){
    alert(`Please enter a valid number`);
  } else {
    attempts++;
    if(guess < answer) {
      alert(`TOO LOW TRY AGIAN!`);
    } else if (guess > answer) {
      alert(`TOO HIGH TRY AGAIN!`);
    } else {
      alert(`Correct! The answer was ${answer}`);
      running = false
    }
  }
}