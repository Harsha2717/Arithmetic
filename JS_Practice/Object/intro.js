//Objects are the Real World entities that are created in the Virtual World
//The objects used key : value pairs where using key can access the values
//Similar like Maps in Java
//We can also add functions in objects


let emptyObject = {}
console.log(emptyObject,"\n");

//An object with parameter is created here
let person = 
{
    //This is a Object Literal
    name : "Harsha",
    age : 22,
    tech : "JS",
    //We can have a property name with two words
    "work experience" : 1,
}
console.log(person ,"\n");
//This prints all the Properties of the Object 

//We can also print the Certain Properties using .(dot method) or [] method
console.log(`Name : ${person.name}`);

console.log("Age : ",person['age']);
//We can use the . operator always but in some cases we can only use the squareBrackets

console.log(person["work experience"]);
//Here we can only use the Square brackets to get the property

let input = 'name';
// here we are Dynamically accessing the property using a variable
console.log(person[input]);
// when we want to access the properties Dynamically from outside we need to use square brackets and pass the key

