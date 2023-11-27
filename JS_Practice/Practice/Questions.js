//Question 1
//Declare a Variable 'name' and assign your name to it.
// let Myname = "Sri Harsha";
// console.log(Myname)

//Create a Function addNumbers that takes two parameters and returns their sum
// let answer = addNumbers(10,20);
// console.log(answer)

// function addNumbers(x,y)
// {
//     return x+y;
// }

//Write a function named checkNumber that takes a number as a parameter and returns positive or negative and zero if 0
// let positiveNumber = 8;
// console.log(checkNumber(positiveNumber));

// function checkNumber(number)
// {
//     // if(number === 0) return "Zero"
//     // if(number > 0) return "Positive";
//     // else return "Negative";
    
//     //or we can use TernaryOperator
//     return (number===0)?"Zero":(number > 0)?"Positive":"Negative";
// }

//Write a loop that prints from 1 to 5
//we can use two loops for or while when the condition is known we can use For loop
// for(let i=1;i<=5;i++)
// {
//     console.log(i);
// }

//create a array of colors with red green and blue

// const colors = ['red','green','blue'];
// console.log(colors[0]);//Obtaining element at certain index

//Using for loop to obtain all the elements.
// for(let i =0;i<colors.length;i++)
// {
//     console.log(colors[i]);
// }


//Create an Object representing a person with properties name age and city
// an object is a key : value pair where we can store the Elements using key and its data
let person = 
{
    //key : value  , is to seperate the Properties
    Name : "Harsha",
    Age : 22,
    City : "Hyderabad",
}
//We can access the Object properties by using . dot Operator or the SquareBrackets
console.log(`Using dot Operator : 
Name : ${person.Name}
Age  : ${person.Age}
City : ${person.City} \n`)

//or we can also use the square brackets
//But we need to place the property name between ''
console.log(`Using [] brackets :
Name : ${person['Name']}
Age  : ${person['Age']}
City : ${person['City']}`)