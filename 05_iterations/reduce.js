const nums = [1, 2, 3, 4];

const total = nums.reduce((acc, curr) => {
  return acc + curr;
}, 0); //this 0 is the value assigned to acc

console.log(total); //10

const shoppingCart = [
  {
    itemName: "JS Course",
    price: 3000,
  },
  {
    itemName: "MERN Course",
    price: 8000,
  },
  {
    itemName: "Data science Course",
    price: 20700,
  },
  {
    itemName: "Linux 101 course",
    price: 12500,
  },
];

const cartTotal = shoppingCart.reduce((sum, item) => {
  return sum + item.price;
}, 0);

console.log(cartTotal);
