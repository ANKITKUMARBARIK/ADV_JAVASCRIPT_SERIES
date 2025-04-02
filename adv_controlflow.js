//Conditions Statements

// let userLoggedIn = true;
if (true) {   //this will be executed
    console.log("True");
}

if (false) {   //this will not be executed
    console.log("False");
}

//Implicit Scope
const balance = 1000;
if (balance > 500) console.log("Balance is 1000");


//interesting
const useLogin = true;
const debitCard = true;
const logGoogle = false;
const logEmail = true;

if (useLogin && debitCard && 2 == 2) {
    console.log("Allow to buy courses");
}

if (logGoogle || logEmail || false) {
    console.log("User Logged In");
}


//switch
const month = 3;
switch (month) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("Mar");
        break;
    default:
        console.log("Invalid Choice");
        break;
}

//
let role = "CEO";
let salary = 100000;

switch (role) {
    case "employee":
    case "hr":
    case "manager":
        salary += 0.05 * salary;
        break;
    case "CEO":
    case "CIO":
    case "CTO":
        salary += 0.1 * salary;
        break;
    default:
        console.log("Unknown role");
}

console.log(salary);



//Interesting
// const emailUser = "barik@246"; //true
// const emailUser = "";       //false
const emailUser = []; //true

if (emailUser) {
    console.log("Got user email");
}
else {
    console.log("Don't have user email");
}

//Falsy Values - false, 0, -0, BigInt 0n, "", null, undefined, NaN
//Truthy Values - "0", "false", " ", [], {}, function(){}

// How to check ?
if (emailUser.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


//Nullish Coalescing Operator (??)
let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 5 ?? 10;
console.log(val1);


//Ternary Operator
const cube = 100;
cube >= 80 ? console.log("More than 80") : console.log("Less than 80");