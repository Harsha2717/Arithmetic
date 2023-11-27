//let i = 1;

//While loop executes until the condition is satisfied it may be 
//Numberical or may be any boolean

// while(i<=5)
// {
//     console.log("Hello ",i);
//     i++;
// }

//This works as first checks the condition then only execution

//do while loop is used when the code should execute once irrespective of the condition

//Here i = 6 because of the while loop so this executes once and logs the Statement and loop fails

// do
// {
//     console.log("Hii... " , i);
//     i++;    
// }while(i<=5);

let num = 564782;
let num2 = "";
while(num>0)
{
    num2 += String(num%10);
    num = parseInt(num/10);
}
console.log(num);
console.log(num2);