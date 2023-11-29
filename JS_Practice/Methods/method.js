//Methods are used to define the behaviour of the Objects and this can be declared inside an object
let laptop = 
{
    brand : "Lenovo",
    ram : 16,
    cpu : "Ryzen 7",
    
    //This becomes a method
    greet : function(){
        console.log("Hello World");
    },

    //The method sets the Behaviours
    get_Details : () => 
    {
        for(let lap in laptop)
        {
            //Here lap gets the keys
            console.log(laptop[lap]);
            //we are printing using the key from the objects
        }
    },
    //This is short hand method declaration and achieves same result
    get_brand()
    {
        console.log(this.brand);
    }
}
//greet(); //Throws error because its object method not the Actual function
laptop.greet();
//laptop.get_Details();
laptop.get_brand();
