//when comparing two values, we can use the following operators: ==, ===, !=, !==, >, <, >=, <=
//both data types must be of same type when comparing
// two data types can be compared: number and string and the result will be a boolean value
// if we compare two strings, the result will be based on the lexicographical order

//these types of conversion should be avoided
console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

//equal operator and comparison operator works differently
//comparison operator operator converts null to 0

// === compares the value and the type
console.log("2" === 2); //false