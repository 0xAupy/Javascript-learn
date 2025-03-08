const user = {
  userName: "Ahn Yujin",
  productName: "Airpods",
  price: 199,

  welcomeMessage: function () {
    console.log(`Welcome ${this.userName}!`);
  },
};

user.welcomeMessage(); // Welcome Ahn Yujin!

user.userName = "Jang Wonyoung";
user.welcomeMessage(); // Welcome Jang Wonyoung!

// function valorant(){
//     console.log(this);
// }

// valorant();

//arrow function
const addTwo = (num1, num2) => {
  return num1 + num2;
};

//another way
// const addTwo = (num1, num2) => num1 + num2;

//another way
// const addTwo = (num1, num2) => ( num1 + num2 ); //mostly used in  react

console.log(addTwo(1, 2)); // 3

//to return object they should be wrapped in ()
const multiply = (num1, num2) => ({ result: num1 * num2,});

console.log(multiply(2, 3)); // { result: 6 }