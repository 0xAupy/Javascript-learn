const arr = [1, 2, 3, 4, 5]; //arrays are resizeable and can contain mixed data types
//shallow copy: copies the reference to the original array

const heroes = ["Batman", "Superman", "wonnderwoman"];

//Array methods
//push: add an element to the end of the array
heroes.push("Flash");
console.log(heroes); //['Batman', 'Superman', 'wonnderwoman', 'Flash']

//pop: remove the last element of the array
heroes.pop();
console.log(heroes); //['Batman', 'Superman', 'wonnderwoman']

//shift: remove the first element of the array
heroes.shift();
console.log(heroes); //['Superman', 'wonnderwoman']

//unshift: add an element to the beginning of the array
heroes.unshift("Flash");
console.log(heroes); //['Flash', 'Superman', 'wonnderwoman']
