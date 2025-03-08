const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//chaining
const newNums = numbers
  .map((val) => val * 10)
  .map((val) => val + 1)
  .filter((num) => num > 40);

console.log(newNums); //41,  51, 61, 71, 81, 91, 101
