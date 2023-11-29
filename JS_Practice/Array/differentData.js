//Types of Data we can add in the Array
//We can add all types of primitive types and objects in a single array

let array = [1,'name',21.7,true,{tech : "Js"},function(){console.log("function in array")}];
//We are adding a number,string object, boolean, function

let obj = array[4]; //Assining the Object to Variable
console.log(obj.tech);//calling the Object Property
array[5]();//calling function of in the Array