let userName = "Sarit";

/* for get a string of index
console.log(userName.charAt(2));

  for get a index of string
console.log(userName.indexOf('r'));

  for get a length of string
console.log(userName.length);

  for cut a white space
userName = userName.trim();

  for set string to UPPERCASE
userName = userName.toUpperCase();

  for set string to lowercase
userName = userName.toLowerCase();

  for repeat string if you want to repeat 2 times enter 2 in () ex: repeat(2)
userName = userName.repeat(2);

  for check what string start with charecter return => true and false
userName.startsWith(" ")

  for check what string end with charecter return => true and false
userName.endsWith(" ")

  for check what string have includes charecter return => true and false
userName.includes(" ")

  for replace all character in string to another character what you want
phoneNumber.replaceAll("-", "/")

  for include a character from start to string 
  20 is mean amount of string character "0" is mean character what you want to include
phoneNumber.padStart(20, "0");

  for include a character from end to string 
  20 is mean amount of string character "0" is mean character what you want to include
phoneNumber.padEnd(20, "0");
*/

let phoneNumber = "123-456-7890";

phoneNumber = phoneNumber.padEnd(20, "0");

console.log(phoneNumber);