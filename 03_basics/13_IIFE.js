//immedietly invoked function expression
//this is a function that is declared and invoked at the same time
//it is used to create a new scope for the variables that are declared inside it
//it is used to avoid polluting the global scope

//the semicolon at the end is a must

//named IIFF
(function aespa() {
  console.log(`DB connected`);
})(); //DB connected

//arrow function (unamed IIFF)
((name) => {
  console.log(`${name} connected!`);
})("aupy"); //DB connected
