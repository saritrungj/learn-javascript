/*
  continue => skip this lap and go next
  break => break the loops
*/

for(let i = 0; i <= 10; i++) {
  console.log(i);
}

console.log('HAPPY NEW YEAR!');

for(let i = 1; i <= 20; i++) {
  if(i == 13){
    break;
  }
  console.log(i);
}