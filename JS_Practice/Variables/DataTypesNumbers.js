// The DataTypes of JavaScript is of two types
/*
    Primitive and Object
    Primitive :
    Number
    String 
    boolean
    Null
    Undefined
    Symbol

    Object
        Data that is Non Primitive 
*/

let num = 100;
let double = 12.7
let user = "Harsha";

console.log(typeof num)
console.log(typeof double)
console.log(typeof user)

let num_2 = 100_00_000  //Accepted
console.log(num_2);

// We can also use Infinity in Java Script where in java we get error
let infinity = 5/0;
let negInfinity = -5/0
console.log(infinity)
console.log(negInfinity)
//We can also get Infity value if we try to access the Max Value next numbers
let max = Number.MAX_VALUE;
console.log(Number.MAX_VALUE*10);
//To Use the Max_Value we need a BigNumber we can declare it by using n at the end

let num3 = 123456789101112131415161718;
console.log(num3 + 10)
// we cannot mix bigint with any another type throws error

