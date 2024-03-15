let fruits = ["apple", "orange", "banana"];
/*
fruits[3] = "coconut";
fruits.push("coconuut");
fruits.pop("orange");
fruits.unshift("mango");
fruits.shift("durian");
fruits.splice(0, 1);
fruits.length;
fruits.indexOf("mango")
*/

for (let i = 0; i < fruits.length; i++){
  console.log(fruits[i]);
}

for (let i = fruits.length - 1; i >= 0; i--){
  console.log(fruits[i]);
}

for(let fruit of fruits) {
  console.log(fruit);
}

console.log(fruits.sort());