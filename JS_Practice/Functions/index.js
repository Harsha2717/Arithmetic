//Function is a block of reusable code using which we can perform specific task or Tasks 
//Function makes the code follow DRY Rule(Dont Repeat YourSelf)
//We can call the Function Multiple Time just need to Call the Function
//A Function can be Empty (Doest Return Anything) Parameterized (Returns Something)

//Empty Function just prints some text
function greet()
{
    console.log("Helloo All...");
}
greet();

//Creating a Function that takes parameters and prints the Statement using parameter
function greet_with_name(name)
{
    console.log("Hello " + name);
    //or using TemplateLiteral
    console.log(`Hello ${name} . How are you doing.`)
}
greet_with_name("Harsha");

//We can also make the function to return some value based on the passed Parameter
function greet(name)
{
    return `Hello ${name}.`
}
let greeting = greet("Harsha");
console.log(greeting);

//Default parameter Values
//When we create a function with default parameters and
// when we pass all the attributes without missing 
//any then default values are not considered else default is considered

function defaultParametered(num1 =0,num2=0,num3 =0)
{
    console.log("\n"+num1,num2,num3)
    return num1+num2+num3;
}
console.log(defaultParametered());
console.log(defaultParametered(10));
console.log(defaultParametered(10,20));
console.log(defaultParametered(10,20,30));
//When we dont give the Default values it returns NaN
//This function only works when every parameter is given a Argument
function defaultParametered(num1,num2,num3)
{
    console.log("\n"+num1,num2,num3)
    return num1+num2+num3;
}
console.log(defaultParametered());
console.log(defaultParametered(10));
console.log(defaultParametered(10,20));
console.log(defaultParametered(10,20,30));
