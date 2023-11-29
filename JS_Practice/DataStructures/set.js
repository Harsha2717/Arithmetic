//Set is a collection of elements where each element is unique
// and no duplicate element can be stored inside it
//The Set dont have the index values and can not be access using the index values same as Array

//Declaration of empty set
let set = new Set();

set.add(1);
set.add(2);
set.add(2);
set.add(1);
set.add('Sri');
set.add('Harsha');
set.add('Harsha');

console.log(set);

// console.log(set.has(1));//returns boolean value

//using forEach and for..of loop to print every element
//set.forEach(num => console.log(num));

//using for ..of loop
// for(let val of set)
// {
//     console.log(val);
// }