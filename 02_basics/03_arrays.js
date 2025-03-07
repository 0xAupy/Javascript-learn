const marvel_heores = ["thor", "ironman", "spiderman", "captain america"];
const dc_heroes = ["batman", "superman", "wonderwoman", "flash"];

// const all_heroes = marvel_heores.concat(dc_heroes);
// console.log(all_heroes); //['thor', 'ironman', 'spiderman', 'captain america', 'batman', 'superman

//most modern way to concatenate arrays
const all_heroes2 = [...marvel_heores, ...dc_heroes];
console.log(all_heroes2); //['thor', 'ironman', 'spiderman', 'captain america', 'batman', 'superman

//suppose there are arrays in a array and you just wanna print them all in a single array
const arr = [1, 2, 3, [4, 5], 6, 7, [8, [9, 10]]];
const newArr = arr.flat(Infinity);
console.log(newArr); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
