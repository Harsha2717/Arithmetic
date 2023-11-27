//Global Variables are Varibles that can be Access throughout the file
//Local variables are limited to the Scope of the function or block of the code and cannot be access outside the Scope

let globalVariable = "GlobalVariable";

function hello ()
{
    let localVariable = "LocalVariable";
    console.log(`This is a ${globalVariable}\nThis is a ${localVariable}`)
}
hello();
//Accessing the Global Variable
console.log(`I am a ${globalVariable}`);
//Accessing the Local Variable
//console.log(`I am a ${localVariable}`)
//Throws error  