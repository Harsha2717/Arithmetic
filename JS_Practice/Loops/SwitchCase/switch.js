//In Switch we have a condtion and we need to switch based on the Condition
//let us consider we need to set a Alarm based on day

let day = "Sunday"
switch(day)
{
    case "Monday":
        console.log("Set Alarm for 7AM");
        break;
        //break means jump out of the Execution
        //Continue is skips the Current Iteration
    case "Tuesday":
    case "Wednsday":
    case "Thursday":
        console.log("Set Alarm for 4AM");
        break;
    case "Friday":
        console.log("Set Alarm for 9AM");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Set Alarm for 9AM");
        break;
    default :
        console.log("Try Again")
        break;
    }   