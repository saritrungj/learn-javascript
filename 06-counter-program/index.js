const decreaseBtn = document.getElementById('decrease-btn');
const increaseBtn = document.getElementById('increase-btn');
const resetBtn = document.getElementById('reset-btn');
const counterLabel = document.getElementById('counter-label');
let count = 0;

decreaseBtn.onclick = () => {
  count--;
  counterLabel.textContent = `${count}`;

  if (count <= 0) {
    decreaseBtn.disabled = true;
  } else {
    decreaseBtn.disabled = false;
  }
}

increaseBtn.onclick = () => {
  count++;
  if (count > 0) {
    decreaseBtn.disabled = false;
  }
  counterLabel.textContent = `${count}`;
}

resetBtn.onclick = () => {
  count = 0;
  if (count === 0) {
    decreaseBtn.disabled = true;
  }
  counterLabel.textContent = `${count}`;
}