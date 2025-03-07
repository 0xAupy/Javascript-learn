const arr = [0, 1, 2, 3, 4, 5];

console.log(arr.includes(9)); //false
console.log(arr.indexOf(9)); //-1

const newArr = arr.join();
console.log(newArr); //1,2,3,4,5
console.log(typeof newArr); //string

//slice
console.log("\n\nBefore slice: ", arr); //[1, 2, 3, 4, 5]
const arr1 = arr.slice(1, 3);
console.log("new array: ", arr1); //[2, 3]
console.log("After slice: ", arr); //[1, 2, 3, 4, 5]

//splice
console.log("\n\nBefore splice: ", arr); //[1, 2, 3, 4, 5]
const arr2 = arr.splice(1, 3);
console.log("new array: ", arr2); //[1, 2, 3]
console.log("After splice: ", arr); //[0, 4, 5]
