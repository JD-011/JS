/* 
We catagorized our datatypes into primitive and non-primitive 
on the basis of how it is stored in the memory and how it is accessed
*/

/*
Primitive:
7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
*/

// Use of symbol & BigInt:

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);
// console.log(id);
// console.log(anotherId);

const bigNumber = 34567904657896789n
// console.log(typeof bigNumber);

/*
Reference (Non-primitive): Array, Objects, Functions:
*/

const heros = ["Ironman", "Captain-America", "Thor"]

let myObject ={
    name : "Jayveer",
    age : 18,
}

const myFunction = function () {
    console.log("Hello World!");
}

console.log(typeof myFunction);