// ************************************ Conversion ************************************ 

let score = "11abc"

// console.log(typeof score)
// console.log(typeof(score))

let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

/*
"11" => 11
"11abc" => NaN (Not a Number)
true => 1, false => 0
null => 0, undefined => NaN
*/

let isLoggedIn = "jayveer"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

/*
1 => true, 0 => false
"" => false
"jayveer" => true
*/

let someNumber = 11

let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber)

// ************************************ Operations ************************************ 

let value = 11

let negValue = -value
// console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(2/3)
// console.log(2%3)

let str1 = "Hello"
let str2 = " Jayveer"

let str3 = str1 + str2
// console.log(str3)

// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + 2 + 2)
// console.log(1 + 2 + "2")

// console.log(3 + 4 * 5 % 3)

// console.log(+true)
// console.log(true+); // Error

// console.log(+"") // here "" converted into boolean false == 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
console.log(++gameCounter)
console.log(gameCounter++)
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion