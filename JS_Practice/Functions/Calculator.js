//Here we use the functions to calculate the Addition substracion and multiplication 
function Addition(num1 ,num2)
{
    return num1+num2;
}
function substraction(num1 ,num2)
{
    return num1 -num2;
}

function multiplication(num1,num2)
{
    return num1*num2;
}
function Division(num1 , num2 )
{
    return num1/num2;
}

let num1 = 10;
let num2 = 20;
let add = Addition(num1,num2);
let sub = substraction(num1,num2);
let multi = multiplication(num1,num2);
let div = Division(num1,num2);

console.log(`
Addition of ${num1} + ${num2} = ${add}
Substraction of ${num1} - ${num2} = ${sub}
Multiplication of ${num1} * ${num2} = ${multi}
Division of ${num1} / ${num2} = ${div}`);