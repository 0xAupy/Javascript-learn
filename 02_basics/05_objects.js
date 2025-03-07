//singleton means only one instance of the object is created
// Object.create()

//how to use symbol as key of object:
const key1 = Symbol("buet");

//object literals
const user = {
  name: "Aupy",
  age: 21,
  [key1]: "ruet",
  location: "Dhaka",
  email: "aupy@gmail.com",
  isLoggedIn: true,
  lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
};

//proper way to access object properties
console.log(user["name"]);
console.log(user[key1]);

//to change the value of a property
user.age = 22;
console.log(user.age);

//we can freeze an object so that no one can change the value of the object
Object.freeze(user);
user.age = 23;
console.log(user.age); //it will not change the value

console.log(user);
