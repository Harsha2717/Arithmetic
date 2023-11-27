console.log(10+10);
a = 10;
b = 20;
let c = 30;
console.log("Total : "+(a+b));
console.log(a+b+c);
let username = "Harsha";
console.log(username);
//To make the ' not to work as String use it between the ""
let User = "Harsha's Android"
console.log(User);
// camelCasing is newword 1st letter will be capital
// userName
//Snake_Casing is two words seperated by _
// user_Name


//when we need a value that should not be changed then we should assign it with const
//Consider a radius calculation where the pi should a constant value

let radius = 5
const pi = 3.14

let area;

//But we can modify the variables radius and pi before the Execution 
//So we can declare the pi value as Const
//pi = 5; //Causes Error
area = pi * radius * radius;

console.log("Area : " + area);