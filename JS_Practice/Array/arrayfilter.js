//Array filter is a special method that can be used to create a new array when condition is true 
//Filter takes a parameter then analize the condition then print it
let array = [10,15,20,25,30,35,40];

array.forEach(num => console.log(num));
//Printing all the elements now we can use filter to create a new array on a specific condition
const newArray = array.filter(num => num%2===0);
console.log(newArray);
//The filter function only pass the values that are true(satisfy the condition)

//we can also use the filter directly without storing it in the array and print the elements
array.filter(function(num) {
    return num%2===0
}).forEach(function (num){console.log(num)});
//We can use the arrow function and write the code in simple words
array.filter(num => num%2===0).forEach(num=>console.log(num));
//As there is a single return statement and only single line of code we dont need to use the {} or the return keyword
//here both num variables are different
