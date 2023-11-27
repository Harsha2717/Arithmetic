/**
 * we have 3 Logical operators
 * And  &&  Returns true when two conditions are satisfied
 * Or   ||  Returns true either of the Condition is true
 * Not  !   Returns the Opposite value
 */

let x = 5;
let y = 6;
let result = x>y;
console.log(result);

let z = 7;
// this returns true because both the conditions should be satisfied for &&
result = y>x && y<z 
console.log(result);

//This will be True because any condition can be true for true in OR
result = x>y || y<z
console.log(result)

//Not operators flips the result if true returns false if false returns true
let not = !result;//The result is Flipped
console.log(not,result);