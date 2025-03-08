// function add(a, b) {
//   return a + b;
// }

// console.log(add(1, 2)); // 3

function loginMessage(username) {
  if (!username) {
    return "Please provide a username.";
  }
  return `${username} just logged in!`;
}

console.log(loginMessage("chatGPT")); // "chatGPT just logged in!"
console.log(loginMessage()); // "Please provide a username!"

function calculateCartTotal(val1, val2, ...num) {
  //rest parameter
  return num;
}

console.log(calculateCartTotal(20, 30, 40, 50, 60)); // [ 40, 50, 60 ]

const user = {
  productName: "Airpods",
  price: 199
}

function handleObject(anyObject) {
  console.log(`Product name is ${anyObject.productName} and product price is ${anyObject.price} dollars`);
}

handleObject(user); // Product name is Airpods and product price is 199 dollars

