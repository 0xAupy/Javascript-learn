//nullish coalescing operator (??)
// The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

let value = null ?? 78;
console.log(value); // 1388

value = undefined ?? 2 ?? 78;
console.log(value); // 1388
