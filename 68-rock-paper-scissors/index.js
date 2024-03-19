// Button Element
const rockChoice = document.getElementById('rock');
const paperChoice = document.getElementById('paper');
const scissorsChoice = document.getElementById('scissors');

// Span in h1 Element
const spanRock = document.getElementById('h1-rock');
const spanPaper = document.getElementById('h1-paper');
const spanScissors = document.getElementById('h1-scissors');

// Element about rock paper scissors game
const choices = ['rock', 'paper', 'scissors'];
const pickerDisplay = document.getElementById("pickerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById('playerScoreDisplay');
const computerScoreDisplay = document.getElementById('computerScoreDisplay');
let playerScore = 0;
let computerScore = 0;

// Create function to playgame
function playGame(playerChoice) {
  const computerChoices = choices[Math.floor(Math.random() * 3)]
  let reuslt = "";

  if(playerChoice === computerChoices) {
    reuslt = "IT'S A TIE!"
  } else {
    switch(playerChoice) {
      case "rock":
        reuslt = (computerChoices === 'scissors') ? "YOU WIN!" : 'YOU LOSE!';
        break;
      case "paper":
        reuslt = (computerChoices === 'rock') ? "YOU WIN!" : 'YOU LOSE!';
        break;
      case "scissors":
        reuslt = (computerChoices === 'paper') ? "YOU WIN!" : 'YOU LOSE!';
        break;
    }
  }

// Display result
  pickerDisplay.textContent = `PLAYER: ${playerChoice.toUpperCase()} vs ${computerChoices.toUpperCase()} :COMPUTER`;
  resultDisplay.textContent = reuslt;
  resultDisplay.classList.remove('greenText', 'redText')

  switch(reuslt) {
    case "YOU WIN!":
        resultDisplay.classList.add('greenText');
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
        break;
    case "YOU LOSE!":
        resultDisplay.classList.add('redText');
        computerScore++
        computerScoreDisplay.textContent = computerScore;
        break;
    case "IT'S A TIE!":
      playerScore++;
      computerScore++;
      playerScoreDisplay.textContent = playerScore;
      computerScoreDisplay.textContent = computerScore;
      break;
  }
}


// Hover H1 after mouseover button rock, paper and scissors
rockChoice.addEventListener('mouseover', event => {
  spanRock.classList.add('choices-hover');
})

rockChoice.addEventListener('mouseout', event => {
  spanRock.classList.remove('choices-hover');
})

paperChoice.addEventListener('mouseover', event => {
  spanPaper.classList.add('choices-hover');
})

paperChoice.addEventListener('mouseout', event => {
  spanPaper.classList.remove('choices-hover');
})

scissorsChoice.addEventListener('mouseover', event => {
  spanScissors.classList.add('choices-hover');
})

scissorsChoice.addEventListener('mouseout', event => {
  spanScissors.classList.remove('choices-hover');
})
  