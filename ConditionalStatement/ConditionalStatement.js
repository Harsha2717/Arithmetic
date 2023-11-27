//The conditional statements only execute when the Condition Present is Satisfied and doesnt execute when the Condition is not Satisfied

let x = 5;
let y = 6;
let z = 7;
//The if or else if or else only have one statement so if we want to enclose multiple statements we need to enclose them in {}
//Checks the if Condition if it is satisfied executes the body else moves to next
if(y>x && y<z)
{
    console.log(y);
}
//This condition check if satisfied moves to body else moves to next
else if(z>x)
{
    console.log(z);
}
//when if block and else if block is not Satisfied then else is executed
else
{
    console.log(x);
}

let even = 9
if(even % 2 == 0)
{
    console.log("even : ",even);
}else
{
    console.log("odd : " ,even);
}

function helloWorld() {
    console.log("hello ")
}
helloWorld()