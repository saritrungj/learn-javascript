/*
let age = 13;

if(age > 18) {
  console.log(`You are old enough to enter this site`);
} else {
  console.log(`You must me a 18+ to enter this site`);
} 

let time = 14;

if (time < 12) {
  console.log('Good morning');
} else {
  console.log('Good afternoon');
}

let isStudent = true;

if(isStudent) {
  console.log('You are a student');
} else {
  console.log('You are not a student');
}

let age = 18;
let hasLicense = true;

if(age >= 16) {
  console.log('You are old enough to drive');
  if(hasLicense){
    console.log('You have your license');
  } else {
    console.log('You do not have your license yet!');
  }
} else {
  console.log('You must be 16+ to has a license');
}

let age = 0;

if(age >= 100) {
  console.log(`You are TOO OLD to enter this site`);
} else if (age === 0) {
  console.log('You can not enter. You were just born');
} else if(age >= 18) {
  console.log(`You are old enough to enter this site`);
} else if (age < 0) {
  console.log(`Your age can'be below 0`);
} else {
  console.log(`You must be 18+ to enter this site`);
}

*/

const myText = document.getElementById('myText');
const submitBtn = document.getElementById('mySubmit');
const result = document.getElementById('result');
let age;

submitBtn.onclick = () => {
  age = myText.value;
  age = Number(age);

  if(age >= 100) {
    result.textContent = `You are TOO OLD to enter this site`;
  } else if (age === 0) {
    result.textContent = 'You can not enter. You were just born';
  } else if(age >= 18) {
    result.textContent = `You are old enough to enter this site`;
  } else if (age < 0) {
    result.textContent = `Your age can'be below 0`;
  } else {
    result.textContent = `You must be 18+ to enter this site`;
  }
}

