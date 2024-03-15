/* 
  && - AND
    || - OR
      ! - NOT
*/

const temp = 25;

if(temp <= 0 && temp <= 30) {
  console.log(`The weather is GOOD`);
} else {
  console.log(`The weather is BAD`);
}

if(temp <= 0 || temp > 30) {
  console.log(`The weather is BAD`);
} else {
  console.log(`The weather is GOOD`);
}

const isSunny = true;

if(!isSunny) {
  console.log(`Rainny`);
} else {
  console.log(`Sunny`);
}