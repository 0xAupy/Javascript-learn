console.log(Array.isArray([1, 2, 3])); //true
console.log(Array.isArray("hello")); //false, it is a string

console.log(Array.from("hello")); //['h', 'e', 'l', 'l', 'o']
console.log(Array.from({ name: "john", age: 25 })); //[] because it is an object

let val1 = 100;
let val2 = 200;
let val3 = 300;
console.log(Array.of(val1, val2, val3)); //[100, 200, 300]
