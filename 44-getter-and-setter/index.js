class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  set width(newWidth) {
    if (newWidth > 0) {
      this._width = newWidth;
    } else {
      console.error('Width must be a Positive number');
    }

  }
  set height(newHeight) {
    if (newHeight > 0) {
      this._height = newHeight;
    } else {
      console.error('Height must be a Positive number');
    }
  }

  get width() {
    return `${this._width.toFixed(2)} cm.`;
  }

  get height() {
    return `${this._height.toFixed(2)} cm.`;
  }

  get area() {
    return this._width * this._height;
  }
}

const rectangle = new Rectangle(3, 4);
rectangle.width = 7;
rectangle.height = 9;
console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  set firstName(newFirstname) {
    if (typeof newFirstname === "string" && newFirstname.length > 0) {
      this._firstName = newFirstname;
    } else {
      console.error('Firstname must be a non-empty string');
    }
  }

  set lastName(newLastname) {
    if (typeof newLastname === "string" && newLastname.length > 0) {
      this._lastName = newLastname;
    } else {
      console.error('Lastname must be a non-empty string');
    }
  }

  set age(newAge) {
    if (typeof newAge === "number" && newAge >= 0) {
      this._age = newAge;
    } else {
      console.error('Age must be a positive number');
    }
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get fullName() {
    return this._firstName + " " + this._lastName;
  }

  get age() {
    return this._age;
  }
}

const person = new Person('Sarit', 'Rungjapoh', 25);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);