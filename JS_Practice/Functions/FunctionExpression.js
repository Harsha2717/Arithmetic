//A Function Expression is an Anonymus Declaration of a Function 
//We can assign the Function to a Variable
// Expression is Evaluating then Assigning
let add = function(num1 ,num2)
{
    //Created an Anonymus Function 
    return num1+num2;
}

//This makes the add as a Function
console.log(add)
console.log(`Add function with parameters : ${add(1,2)}`);//Now add works as Function

// if we assign the add to another variable it converts as Function
let adding = add;
console.log(`Assigning function Expression to another Variable : ${adding}`)
console.log(`Assigning function Expression to another Variable with Parameters : ${adding(5,5)}`)