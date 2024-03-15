/*

  =     assignment operator
  ==    compareison operator (compare if values are eqaul)
  ===   strict eqaulity operator (compare if values and detatype are eqaul)
  !=    inequality operator
  !==   strict inequality operator

*/

let a = 10;
let b = '10';

console.log(a == b);
console.log(a === b); //strict equality operator

const PI = 3.14;

//strict equality operator
if(PI === 3.14) {
  console.log('This is Pi');
} else {
  console.log('This is NOT Pi');
}

//strict equality operator
if(PI === '3.14') {
  console.log('This is Pi');
} else {
  console.log('This is NOT Pi');
}

if(PI != '3.14') {
  console.log('This is NOT Pi');
} else {
  console.log('This is Pi');
}

//strict inequality operator
if(PI !== '3.14') {
  console.log('This is NOT Pi');
} else {
  console.log('This is Pi');
}

//strict inequality operator
if(PI !== 3.14) {
  console.log('This is NOT Pi');
} else {
  console.log('This is Pi');
}