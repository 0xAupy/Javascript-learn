//for each doesnt return a value

const coding = ["js", "ruby", "java", "python", "cpp"];

const values = coding.forEach((item) => {
  return item;
});

console.log(values); //undefined. this is because for each iterator deosn't return any value

//filter

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredValues = nums.filter((val) => {
  return val > 4;
});

console.log(filteredValues); // [ 5, 6, 7, 8, 9, 10 ]
