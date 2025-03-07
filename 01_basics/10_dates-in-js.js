//dates
//let myDate = new Date();
//console.log(typeof myDate); //object
//console.log(myDate); //2025-03-07T13:50:27.656Z

// console.log(myDate.toString()); //Fri Mar 07 2025 19:55:04 GMT+0600 (Bangladesh Standard Time)
// console.log(myDate.toDateString()); //Fri Mar 07 2025
// console.log(myDate.toTimeString()); //19:55:04 GMT+0600 (Bangladesh Standard Time)

// console.log(myDate.toLocaleString()); //3/7/2025, 7:55:04 PM
// console.log(myDate.toLocaleDateString()); //3/7/2025
// console.log(myDate.toLocaleTimeString()); //7:55:04 PM

// console.log(myDate.toISOString()); //2025-03-07T13:55:04.267Z
// console.log(myDate.toJSON()); //2025-03-07T13:55:04.267Z

let myBirthDate = new Date(2002, 3, 8); //month is 0 based
console.log(myBirthDate.toString());

let myTimeStamp = Date.now();
console.log(myTimeStamp); //in milliseconds from 1970 january 1
console.log(myBirthDate.getTime()); //in milliseconds from 1970 january 1


//to get in seconds
console.log(Math.round(Date.now() / 1000))