const person1 = {
  firstName: "Spongebob",
  lastName: "Squarepants",
  age: 30,
  isEmployed: true,
  sayHello: function() {
    console.log(`Hello I'm ${this.firstName}`)
  },
  sayBye: () => console.log(`Bye!`),
  fullName: function() {
    console.log(`I'm ${this.firstName} ${this.lastName}`);
  }
}

const person2 = {
  firstName: "Patrick",
  lastName: "Star",
  age: 30,
  isEmployed: true,
  sayHello: function() {
    console.log(`Hello I'm ${this.firstName}`)
  },
  sayBye: () => console.log(`Bye!`),
  fullName: function() {
    console.log(`I'm ${this.firstName} ${this.lastName}`);
  }
}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello();
person1.sayBye();
person1.fullName();

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
person2.sayHello();
person2.sayBye();
person2.fullName();