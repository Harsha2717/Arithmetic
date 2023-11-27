// //Type conversion is Explicitly Converting the Data Types

// let num = 6;
// console.log(num,typeof num)

// num = String(6);
// console.log(num,typeof num)

// names = "6"
// console.log(names,typeof names)

// names = Number(names)
// console.log(names,typeof names)

// //Coercion : The Implicit Conversion Data Types from one to Another
// /*
    
// */
// let x = 5;
// let y = "10"
// let ans = x+y
// //This Concats the Number to String
// console.log(ans , typeof ans)    //Here Coerction to String is Done hence 510

// //If we use Substraction then the Implicit Coerction converts the data as number
// ans = y-x
// console.log(ans, typeof ans)

// //If we want the String to Number rather than Concatnation
// ans = +x+2
// console.log(ans,typeof ans)

// ans = x+""
// console.log(ans , typeof ans)

// x = true;
// console.log(x , typeof x)

// x = Boolean(8)  //Any Number rather than 0 or null is True whilt coerction
// console.log(x,typeof x)

// x=Boolean(0)
// console.log("Boolean(0) : ",x,typeof x)

// x = Boolean(null)
// console.log("Boolean(null) : ",x,typeof x)


let nameVal = "123 Harsha 456"
console.log(nameVal,typeof nameVal)
//When we try to TypeConversion for the String if outputs NaN(Not a Number)
//We can extract the Number if needed as by using 
console.log(parseInt(nameVal))
 