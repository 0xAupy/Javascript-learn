let score = "78";
console.log(typeof score); //string

let scoreInNumber = Number(score); //convert string to number
console.log(typeof scoreInNumber); //number

let val = "78abc";
let valInNumber = Number(val);
console.log(valInNumber); //NaN
// NaN is a special value that means "Not a Number".

let val2 = null;
let val2InNumber = Number(val2);
console.log(val2InNumber); //0

let val3 = undefined;
let val3InNumber = Number(val3);
console.log(val3InNumber); //NaN

let val4 = 1; //having any value means it is true wether it be a minus value
let val4InBoolean = Boolean(val4);
console.log(val4InBoolean); //true

let val5 = "";
let val5InBoolean = Boolean(val5);
console.log(val5InBoolean); //false

let val6 = 2002
let val6InStr = String(val6)
console.log(val6InStr); //2002 
console.log(typeof val6InStr); //type is now string

