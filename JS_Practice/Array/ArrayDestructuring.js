//Array destructuring is the process of extracting the array values to the different variables in a single line .
let array = [1,2,3,4];
//Destructuring : Extracting the array values to individual variables

//let [a,b,c,d] = array;
//console.log(a,b,c,d);

//This is destructuring and if we want to skip assigning any value we can insert comma for it

// let[e,f,,h] = array;//here we skip the index 2
// console.log(e,f,h);

//Using ArrayDestructuring we can also swap the values
// let x =1;
// let y =2;
// [x,y] = [y,x]

// console.log(x,y)
// let strArray = ['Harsha','Sirisha','vaibu','sindhu'];
// let [harsha,sirisha,vaibu,sindhu] = strArray;
// console.log(harsha,sirisha,vaibu,sindhu);

//we can split the string using a special method called split and create it as array
let str = "Hi My name is SriHarsha. I am skilled in Java and JavaScript";
console.log(str);
//We can split the string by using split method
// str = str.split(" ");
// console.log(str);

let words = "Hello Everyone I am Nallani Chakravartula sri harsha".split(" ");

// let [,,,,firstname,lastname] = words;
// console.log(firstname,lastname);

//we can use ...from specific index to cover whole array
let [a,b,,,...c] = words;
console.log(c);
// ... means rest of the elements