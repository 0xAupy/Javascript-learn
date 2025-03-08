const arr = [1, 2, 3, 4, 5];

//another way to loop through array
for (const element of arr) {
  //for of loop
  console.log(element);
}

const greeting = "Hello World!";
for (const letter of greeting) {
  console.log("Each character is ", letter);
}

//maps
const map = new Map();
map.set("BD", "Bangladesh");
map.set("US", "United States");
map.set("UK", "United Kingdom");
map.set("BD", "Bangladesh");

// console.log(map);

for (const [key, value] of map) {
  console.log(key, ":", value);
}
