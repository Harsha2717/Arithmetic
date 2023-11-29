//An ArrowFunction is a Function that can be used with out any function keyword and acheive same result.
//While declaring function expression we can directly declare it without any function keyword
// => is Arrow Function
//If we have only single statement there is no need to use the {}Curly Braces
// And if we only have one statement then there is no need to use Return keyword also
//Function expression
let add = function(num1 ,num2)
{
    console.log(`Addition of ${num1} + ${num2} = `)
    return num1+num2;
}
console.log(add(10,20));

//We can achieve the same result using the FunctionArrow
let sub = (num1,num2) => 
{
    console.log(`Substraction of ${num1} - ${num2} = `)
    return num1-num2;
}
let Substraction = sub(20,10);
console.log(Substraction);

//no need to use return or Curly brackets if there is only single statement

let multiply = (num1,num2) => num1*num2;
//Here there is only one return value so no need of return statment

console.log(multiply(10,10));

let greet = () => console.log("Hello World!!!");
greet();