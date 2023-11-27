/*
In Java Script we can Directly compare two elements and Returns boolean value as output
we can compare two numbers and also two Strings the String are compare based on LexicoGraphical order

we cannot use the == to compare because it just compare the data not the Type
because of the TypeCoercion the Type of the data is converted
we can use === Strict Comparision compares both data and its type
*/

let x = 6;
let y = 6;

console.log("x > y : " ,x>y)
console.log("x < y : " ,x<y)
console.log("-------------------")
let data = x>y
console.log("Data : " , data)
data = x>=y
console.log("Data : " , data)
console.log("-------------------")

let name1 = "Pen"
let name2 = "Book"
//This do the Lexicographical Comparasion where each Alphabets have a ASCII value and they compare it
//Here P is greater than B, and it compares all the Characters
console.log("name1>name2 : ",name1>name2)

let name3 = "pen"
let name4 = "pencil"
//Here the first 3characters are similar but the length of the another String is Long so while comparing 
console.log("name3>name4 : " ,name3>name4)//this returns false
//After the 3Characters the it compares the Lengths so pencil has 6character and pen has 3 characters so pencil is greater than the pen
console.log("-------------------")

//When we compare the two string with == it compares the data
//we can compare two numbers two strings a number and a String

let a = 2
let b = "1"
console.log('2 > "1"  : ', a > b)
console.log('2 < "1"  : ' , a < b)

let i = '1'
let j = 1
console.log("i == j : ",i==j)
//This compares the data not the DataTypes hence Returns true
//if we use === (Strict Comparision operator)
console.log("i === j : ",i===j)
//This actually compares data and also the type

//if we consider a empty string and boolean false and compare them returns false
let random = ""
let boolean = false
console.log(random == boolean)
//this returns true because the Typecoercion concludes the random as false because its empty
//So to make the Proper Comparision we use
console.log(random === boolean)
