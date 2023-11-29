//Array reduce method is a special method that takes two parameters,
//Accumulator and current Value and applies some operations on the current value and store it in accumulator
//returns the Accumulator a single value
let array = [1,2,3,4,5,6];
//in this case we use reduce to find sum of arrayelements
let sum = array.reduce((a,b) => a+b);
console.log(`Sum of Array : ${sum}`);
//We can't use forEach when reduce function is applied it returns single value
let result = array.filter(num => num%2===0).reduce((accumulator,currentValue) => accumulator+currentValue);
console.log(`Result = ${result}`);