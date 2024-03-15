function rollDice() {
  const numOfDice = document.getElementById('myInput').value;
  const diceImage = document.getElementById('dice-image');
  const diceResult = document.getElementById('dice-result');
  const values = [];
  const images = [];

  for (let i = 0; i < numOfDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="images/${value}.png" alt="dice ${value}">`);
  }
  diceResult.innerHTML = `<p>Dice: ${values.join(', ')}</p>`;
  diceImage.innerHTML = images.join('');
  console.log(images);
  console.log(values);
}