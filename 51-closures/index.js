function outer() {
  let message = 'Hello';
  function inner() {
    console.log(message);
  }
  inner();
}
outer();

// Example 1 : closures
function createCounter() {
  let count = 0;
  function increment() {
    count++;
    console.log(`Count increased to ${count}`);
  }

  function getCount() {
    return count;
  }

  return { increment, getCount };
};

const counter = createCounter();
for (let i = 0; i < 10; i++) {
  counter.increment();
}

console.log(`This current count is ${counter.getCount()}`);


// Example 2 : Create game counter score
function createGame() {
  let score = 0;

  function increaseScore(points) {
    score += points;
    console.log(`+ ${points}pts`);
  }

  function decreaseScore(points) {
    score -= points;
    console.log(`- ${points}pts`);
  }

  function getScore() {
    return score;
  }

  return { getScore, decreaseScore, increaseScore }
}

const game = createGame();
game.increaseScore(5);
game.increaseScore(5);
game.decreaseScore(5);
console.log(`The final score is ${game.getScore()}`);