//stack memory -> primitive data types, heap memory -> reference data types

//Primitive
let a = 10;
let b = a; //copying the value of a to b
b = 20;
console.log(a); //10
console.log(b); //20

//Reference
let user1 = {
  name: "Aupy",
  age: 21,
};

let user2 = user1; //copying the reference of user1 to user2
user2.age = 22;

console.log(user1.age); //22
console.log(user2.age); //22
