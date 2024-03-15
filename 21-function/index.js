
function happyBirthday() {
  console.log(`HAPPY BIRTH DAY TO YOU!`);
}

function happyBirthdayWithname(name) {
  console.log(`HAPPY BIRTH DAY TO YOU! - ${name}`);
}

function happyBirthdayWithnameAndage(name, age) {
  console.log(`HAPPY BIRTH DAY TO YOU! ${age} - ${name}`);
}

happyBirthday();
happyBirthdayWithname("sarit");
happyBirthdayWithnameAndage("sarit", 15);


function add(x, y) {
  let result = x + y;
  return result;
}

console.log(add(1, 5));

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function isEven(number) {
  if(number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function isEven(number) {
  return number % 2 === 0 ? true : false;
}

console.log(isEven(7));


function isValidEmail(email) {
  if(email.includes("@")) {
    return true;
  } else {
    return false;
  }
}

console.log(isValidEmail("Elon@Musk.com"));
console.log(isValidEmail("ElonMusk.com"));