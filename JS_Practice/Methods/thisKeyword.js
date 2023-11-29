
/**
 * the this keyword is used to represent the current Objects
 * 
 */

let laptop = 
{
    ram : 16,
    brand : "lenovo",
    cpu : "Ryzen 7",
    getConfig : function()
    {
        //this represents the current object
        //So when we call with certain object then it calls the certain property object
        console.log(this.cpu);
        //The cpu is the property of laptop so we need to use the object name and then the property
        //console.log(laptop.cpu);
        //We can create the local variable and can use it 
        // let storage = 100;
        // console.log(storage);
    }
}

laptop.getConfig();