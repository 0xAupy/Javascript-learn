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

//to get all the keys of an object
console.log(Object.keys(user)); //[ 'name', 'fullname', 'age', 'location', 'isLoggedIn' ]
//to get all the values of an object
console.log(Object.values(user)); //[ 'Aupy', { firstName: 'Fariha', lastName: 'Anjum' }, 21, 'Dhaka', true ]
