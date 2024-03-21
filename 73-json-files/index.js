// JSON = (JavaScript Object Notation) data-interchange format
//        Used for exchanging data between a server and a web application
//        JSON files {key:value} OR {value1, value2, value3}

//        JSON.stringify() => convert a JS Object to a JSON String.
//        JSON.parse() => converts a JSON String to a JS Object.

const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
const jsonPerson = `{"name": "Spongebob","age": 30,"isEmployed": true,"hobbies":  ["Jellyfishing", "Karate", "Cooking"]}`;
const jsonPeople = `[{"name": "Spongebob","age": 30,"isEmployed": true},
                    {"name": "Patrick","age": 34,"isEmployed": false},
                    {"name": "Squidward","age": 50,"isEmployed": true},
                    {"name": "Sandy","age": 27,"isEmployed": false}]`;

/*

// stringify() 
const jsonString = JSON.stringify(jsonNames);
const jsonString_2 = JSON.stringify(jsonPerson);
const jsonString_3 = JSON.stringify(jsonPeople);

console.log(jsonNames);
console.log(jsonString);

console.log(jsonPerson);
console.log(jsonString_2);

console.log(jsonPeople);
console.log(jsonString_3);


// parse()
const jsonString = JSON.parse(jsonNames);
const jsonString_2 = JSON.parse(jsonPerson);
const jsonString_3 = JSON.parse(jsonPeople);

console.log(jsonNames);
console.log(jsonString);

console.log(jsonPerson);
console.log(jsonString_2);

console.log(jsonPeople);
console.log(jsonString_3);
*/

//fetch data json
fetch("names.json")
  .then(res => res.json())
  .then(value => console.log(value))

fetch("person.json")
  .then(res => res.json())
  .then(value => console.log(value))

fetch("people.json")
  .then(res => res.json())
  .then(values => values.forEach(value => console.log(value.name)))
  .catch(error => console.error(error))