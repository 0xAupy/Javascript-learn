const name = "Aupy";
const repoCount = 11;
//console.log(name[0]) //A

//console.log(name + " has " + repoCount + " repositories");

console.log(
  `Hello my name is ${name} and I currenty have ${repoCount} repositories in my github account`
); //string interpolation

//another way to declare string
const string = new String("Hello");
console.log(string);

console.log(string.length); //5
console.log(string.toUpperCase()); //HELLO
console.log(string.toLowerCase()); //hello
console.log(string.charAt(1)); //e
console.log(string.indexOf("e")); //1

const newString = string.substring(0, 3);
console.log(newString); //Hel

//slice can take negative values
const newString2 = string.slice(-4, 3);
console.log(newString2); // el

const newString3 = string.split(""); //split the string into array based on the character
console.log(newString3); //['H', 'e', 'l', 'l', 'o']

const newString4 = "    Hello    ";
console.log(newString4.trim()); //it will remove the white spaces

const newString5 = string.replace("H", "Y");
console.log(newString5); //Yello
