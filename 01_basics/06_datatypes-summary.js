//in javascript we dont have to declare variable type, because it is dynamically typed

// primitive data types
//7 types: number, string, boolean, null, undefined, symbol, bigint
/*
number: any number, integer or floating point
string: any text
boolean: true or false
null: empty value
undefined: variable that has been declared but not assigned a value
Symbol: unique value that's not equal to any other value
bigint: large integers
*/

const score = 100;
const scoreValue = 100.3;
let userEmail;

const id = Symbol("123");
const id2 = Symbol("123");

console.log(id === id2); //false

const bigNumber = 1234567890123456789012345678901234567890n;
console.log(bigNumber);

//reference data types (mon primitive)
// array, object, function

const heroes = ["Superman", "Batman, Spiderman"]; //array

let myInfo = {
  name: "Aupy",
  age: 21,
}; //object

const myFunction = function greet() {
  console.log("Hello");
}; //function
