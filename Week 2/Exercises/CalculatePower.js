const basenum = prompt("Enter Base Number: ");
const exponentnum = prompt("Enter Exponent Number: ");

function exp(base = 0, exponent = 0){
    let result = base;
    for(let i = 1;i<exponent;i++){
        result *= base;
    }
    console.log("The result is : ", result);
}
exp(basenum,exponentnum)