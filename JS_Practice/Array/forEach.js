//forEach loop is a function of the array and this is need another function to print of modify the elements
let array = [1,2,3,4,5,6];

// array.forEach(function(num)
// {
//     console.log(num)
// });

//Here the forEach function pass the argument to function parameter and we can modify or print or access it.
//we can also use arrow function
array.forEach((num) =>
{
    console.log(num)
});

//Here there is only a single parameter so we can skip using () and {}
array.forEach(num => console.log(num*2));
//Here we are modifing the every Array element

//The forEach can have three parameters
//Here num is the Each num and index the index of num and array is actual array
//array.forEach(current_val,index,actualArray)
array.forEach((num,index,array) => console.log(num,index,array));