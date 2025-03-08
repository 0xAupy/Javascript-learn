if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

//console.log(a) //error
//console.log(b) //error
console.log(c); //30
// this is why var should not be used in js

//+++++++++++interesting++++++++++++

addOne(5); //this will work because of hoisting

function addOne(num) {
  console.log(num + 1);
}

// addTwo(5); //this will not work because of hoisting
const addTwo = function (num) {
  console.log(num + 2);
};
