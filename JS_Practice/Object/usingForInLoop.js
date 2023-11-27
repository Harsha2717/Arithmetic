//For in loop is a special operator that is used to iterate over the every element of the Object
let person = 
{
    name : "Harsha",
    age : 22,
    tech : "JS",
    laptop :
    {
        brand : "Lenovo",
        ram : "16GB",
        cpu : "Ryzen 7",
    }
}

// for(let key in person){
//     //console.log("key : " , key); 
//    //if we want to fetch the key value
//    console.log("Value : ",person[key])
// }
// //to fetch the key of laptop 
// for(let key in person.laptop)
// {
//     console.log(person.laptop[key]);
// }


for(let key in person)
{
    console.log(key,"\t: ",person[key]);
}
console.log('\n------------------------------------\n')
for(let key in person.laptop)
{
    console.log(key , " : ",person.laptop[key]);
}