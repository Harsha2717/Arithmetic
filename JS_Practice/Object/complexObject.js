//ComplexObjects refer to Objects inside the Objects and this can be called NestedObjects
let person =
{
    name : "Harsha",
    age : 22,
    tech : "Js",
    //creating ComplexObject
    laptop :
    {
        ram : '16GB',
        cpu : 'i7',
        brand : 'Lenovo'
    }
}

console.log("Type of Object : " , typeof person);

//We can also access the Laptop Properties by
console.log("Brand Name of Laptop : " ,person.laptop.brand);

//We need to make sure the Property is Present else we get undefined 
//and when we try to access the Properties for the Undefined elements errors will take place
//if we try to print length for we can use 
//Nullish Coalescing operator denoted with ??

console.log(person.laptop.size); //Undefined

//console.log(person.laptop.brand1.length); //Here we dont have brand1 so this print error
//Instead we can use ? to check whether the Object is present else undefined will print
console.log(person?.laptop?.brand?.length);
//Using ? before the . operators checks if object or the Property is Present else it prints undefined
// if property is present it just works asusual.

//We can Delete the Object Properties

console.log(person)
delete person.laptop;
console.log(person)
const array = ['array','string','names'];
console.log(array)
