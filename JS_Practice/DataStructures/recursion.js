//calling a method from the method until base case is satisfied

function recursion(num)
{
    if(num === 0) return 1;
    else return num * recursion(num-1);
}

let result = recursion(5);
console.log(result);