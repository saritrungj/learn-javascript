const inputElement = document.getElementById('myInput');
const toCelradio = document.getElementById('cel-to-fah');
const toFahradio = document.getElementById('fah-to-cel');
const submitBtn = document.getElementById('mySubmit');
const resultElement = document.getElementById('myResult');

function convert() {
  if (toCelradio.checked && inputElement.value !== "") {
    temp = Number(inputElement.value);
    temp = temp * 9 / 5 + 32;
    resultElement.textContent = `${temp.toFixed(1)} °F`;
  } else if (toFahradio.checked && inputElement.value !== "") {
    temp = Number(inputElement.value);
    temp = (temp - 32) * (5 / 9);
    resultElement.textContent = `${temp.toFixed(1)} °C`;
  } else {
    resultElement.textContent = `Select a unit and to convert!`;
  }
}
