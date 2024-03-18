function hello() {
  console.log('Hello');
}

hello();

const hello2 = function() {
  console.log('Hello');
}

hello2();

const hello3 = () => {
  console.log('Hello');
}

hello3();

const hello4 = (name) => console.log(`Hello ${name}`);

hello4('sarit');

const hello5 = (name,age) => {
  console.log(`Hello ${name}`)
  console.log(`You are ${age} years old`)
};

hello5('sarit', 35);

setTimeout(() => {
  console.log(`Hello`);
}, 3000);

const numbers = [1,2,3,4,5,6];
const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const evenNums = numbers.filter((element) => element % 2 === 0);
const oddNums = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((accumulator, element) => accumulator + element);

console.log(squares);
console.log(cubes);
console.log(evenNums);
console.log(oddNums);
console.log(total);