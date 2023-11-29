//Constructor is a special type of method which is used to Initialize the Object Parameters
//We can create the method for the constructor and this shares common between every object
function Student (Name,Id,Mobile)
{
    this.Name = Name;
    this.Id = Id;
    this.Mobile = Mobile;
    
    //We can create the Method that can be used by any Object instance
    this.get_Details = function () //=>
    {
        console.log(`Name\t: ${Name}\nID\t\t: ${Id}\nMobile\t: ${Mobile}\n`);
    }
}

let student1 = new Student("Harsha",446,9346867305);
let student2 = new Student("Vaibu",450,6302992372);

console.log(student1);
console.log(student2);

student1.get_Details();
student2.get_Details();
