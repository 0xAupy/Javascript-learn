const accountId = 1;
let accountEmail = "aupy@gmail.com";
var accountPassword = 123456;
accountCity = "Dhaka"; //variable can be declared without let or var but it is not recommended to do so

let accountname;

// accountId = 2 // not allowed

// let and var can be reassigned
//they are basically same but let is block scoped and var is function scoped
//we should use let instead of var
accountEmail = "fariha@gmail.com";
accountPassword = 654321;
accountCity = "Rajshahi";

//console.log(accountId, accountEmail, accountPassword, accountCity);

//use second bracket to display data in tabular form and third bracket to display data in object form
console.table({
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountName,
}); //console.table() is used to display data in tabular form
