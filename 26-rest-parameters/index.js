const food1 = 'pizza';
const food2 = 'hamburger';
const food3 = 'hotdog';
const food4 = 'sushi';
const food5 = 'Padthai';

function openFridge(...foods) {
  console.log(foods);
}

function getFood(...foods) {
  return foods;
}

openFridge(food1, food2, food3, food4, food5);

const foods = getFood(food1, food2, food3, food4, food5);

console.log(foods);

function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}

const total = sum(1);

console.log(`You total is $${total}`);

function getAverage(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result / numbers.length;
}

const averageNumber = getAverage(75, 500 ,600, 700);

console.log(averageNumber);

function combineString(...strings) {
  return strings.join(" ");
}

const fullName = combineString("Mr.","Spongebob", "Squarepants", "III");

console.log(fullName);