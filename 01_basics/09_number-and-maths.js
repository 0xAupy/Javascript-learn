const score = 100;
console.log(score); //100

const balance = new Number(1000);
console.log(balance); //[Number: 1000]

//to get precision after the decimal
console.log(balance.toFixed(2)); //1000.00

const num = 120.8136;
console.log(num.toPrecision(3)); //121
console.log(num.toPrecision(4)); //120.8
console.log(num.toPrecision(2)); //1.2e+2

const num2 = 100000;
console.log(num2.toLocaleString()); //100,000

//*************Maths*************

// console.log(Math.PI); //3.141592653589793
// console.log(Math.abs(-100)); //100
// console.log(Math.round(1.4)); //1
// console.log(Math.floor(1.9)); //1
// console.log(Math.ceil(1.1)); //2
// console.log(Math.min(1, 2, 3, 4, 5)); //1
// console.log(Math.max(1, 2, 3, 4, 5)); //5

// console.log(Math.random()); //random number between 0 and 1

// console.log((Math.random() * 10) + 1); //random float number between 1 and 10

// console.log(Math.floor(Math.random() * 10) + 1); //random int number between 1 and 10

//important formula to get random number in a range
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); //random int number between 10 and 20
