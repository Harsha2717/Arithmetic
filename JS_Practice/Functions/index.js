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