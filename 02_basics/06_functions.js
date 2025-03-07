const user = {
  name: "Aupy",
  age: 21,
  location: "Dhaka",
  email: "aupy@gmail.com",
  isLoggedIn: true,
  lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
};

user.greeting = function () {
  console.log(`Hello, ${this.name}`);
};
console.log(user.greeting());
// The output is "Hello, Aupy undefined" because the function `greeting` does not return anything. To fix this, we can add a return statement to the function: return `Hello, ${this.name}`; like this
