const name = "Jayveer"
const repoCount = 5

// console.log(name + repoCount + " value"); // outdated

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`); // modern way (string interpolation)

const gameName = new String('COD-Mobile-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('O'));

// go threw all the string methods available in JS, read MDN for it...

const newString = gameName.substring(0, 3)
// console.log(newString);

const anotherString = gameName.slice(-6)
// console.log(anotherString);

const newStringOne = "  Jayveer "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://jayveer.com//jayveer%20dahiya"

console.log(url.replace('%20', '-'));

console.log(url.includes('jayveer'));

console.log(gameName.split('-'));
