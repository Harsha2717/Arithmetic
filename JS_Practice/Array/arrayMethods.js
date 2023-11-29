//Array methods
//let array = new Array();
//or

//push - to push the element to last one or multiple
//pop - removes the last element (Stack)
//shift - removes the element at first and shifts the array
//unshift - add element to the start
//splice - removes elements from index to noofvalues to remove (1,2) any
//splice - also remove elements and add (index,no of elements from index , values to replace)
//
let array = [1,2,3];

console.log(array);

//Pushes the Element to last
//pushing single Element
console.log(array.push(4));
console.log(array);

//pushing multiple Elements
console.log(array.push(5,6));
console.log(array);

//pops the element at end of the array
console.log(array.pop());
console.log(array);

//shift removes first element
console.log(array.shift());
console.log(array);

//unshift to add element at first index
console.log(array.unshift(1));
console.log(array);

//Splicing the Array from certain index to certain index
console.log(array.splice(4,5));
console.log(array);

//Splicing and adding parameters
console.log(array.splice(3,4,4,5,6));
console.log(array);

//loop to print every value
//for of loop 
for(let nums of array)
{
    console.log(nums);
}

//for in loop //This gets the key in array this is index
// for(let nums in array)
// {
//     console.log(nums);
// }