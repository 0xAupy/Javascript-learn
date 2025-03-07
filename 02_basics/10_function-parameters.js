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
