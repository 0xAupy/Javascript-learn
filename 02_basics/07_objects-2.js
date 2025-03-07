//object in a object
const user = {
  name: "Aupy",
  fullname: {
    firstName: "Fariha",
    lastName: "Anjum",
  },
  age: 21,
  location: "Dhaka",
  isLoggedIn: true,
};

console.log(user.fullname); //Fariha Anjum
console.log(user.fullname.firstName); //Fariha

//combine two objects
const obj1 = {
  a: 1,
  b: 2,
};

const obj2 = {
  c: 3,
  d: 4,
};

// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3); //{ a: 1, b: 2, c: 3, d: 4 }

const obj3 = { ...obj1, ...obj2 }; //just like array
console.log(obj3); //{ a: 1, b: 2, c: 3, d: 4 }