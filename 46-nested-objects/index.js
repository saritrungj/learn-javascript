const person = {
  fullName: "Spongebob Squarepants",
  age: 30,
  isStudent: true,
  hobbies: ["karate", "jellyfishing", "cooking"],
  address: {
    street: "124 Conch St.",
    city: "Bikini Bottom",
    country: "Int. Waters"
  }
}

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies);
console.log(person.address);
console.log(person.address.street);
console.log(person.address.city);
console.log(person.address.country);

//forloop
for(const property in person.address){
  console.log(person.address[property]);
}

class Person {
  constructor(name, age, ...address) {
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}

class Address {
  constructor(street, city, country) {
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

const person1 = new Person("Spongebob", 30, "124 Conch St.", "Bikini Bottom", "Int. Waters")

const person2 = new Person("Patrick", 30, "124 Conch St.", "Bikini Bottom", "Int. Waters")

const person3 = new Person("Squidward", 30, "124 Conch St.", "Bikini Bottom", "Int. Waters")

console.log(person1.name);
console.log(person1.age);
console.log(person1.address);
console.log(person1.address.street);
console.log(person1.address.city);
console.log(person1.address.country);

console.log(person2.name);
console.log(person2.age);
console.log(person2.address);
console.log(person2.address.street);
console.log(person2.address.city);
console.log(person2.address.country);

console.log(person3.name);
console.log(person3.age);
console.log(person3.address);
console.log(person3.address.street);
console.log(person3.address.city);
console.log(person3.address.country);