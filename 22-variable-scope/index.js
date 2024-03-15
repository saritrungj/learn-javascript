/*
let x = 1;
let x = 2;
*/

let x = 1;
let y = 2;

// user local variable
function function1() {
  let x = 1;
  console.log(x);
}

// user local variable
function function2() {
  let y = 2;
  console.log(y);
}

// user global variable
function function3() {
  let x = 1;
  console.log(y);
}

// user global variable
function function4() {
  let y = 2;
  console.log(x);
}

function1();
function2();
function3();
function4();