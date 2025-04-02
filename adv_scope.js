//Scopes  --Note : When we see/check/run the scope in the console and the scope in the node,both are different.. 
let a = 100;    //Block Scope
const b = 200   ////Block Scope
var c = 300;    //Global Scope

if(true){
    let a  = 10;     //Block Scope
    const b = 20;   //Block Scope
    var c = 30;     //Global Scope
    console.log(`block scope of let : ${a}`);
    console.log(`block scope of const : ${b}`);
    console.log(`blobal scope of var : ${c}`);
}

console.log(`Block Scope of let : ${a}`);
console.log(`Block Scope of const : ${b}`);
console.log(`Global Scope of var : ${c}`);


//Nested Scopes  -- Note: Child Functions can access Parent variables 
function one(){
    const userName = "lorem";

    function two(){
        const website = "youtube";
        console.log(userName);
    }
    // console.log(website);

    two();
}
one();


//Note: Child Functions can access Parent variables 
if(true){
    const users = "worem";

    if (users === "worem") {
        const websites = " youtube";
        console.log(users + websites);
    }
    // console.log(websites);
}
// console.log(users);


///////////////Interesting///////////////
//Function
console.log(addone(2));
function addone(num){
    return num+1;
}


//This is also Function...But sometime we can say expression ---its like variable..
//console.log(addtwo(5));     //Cannot access 'addtwo' before initialization
// const addtwo = function(num){
//     return num+2;
// }


//this keyword -- this - refers to the "Current Context"..-context means values..
const user = {
    username: "tasuki",
    price: 999,

    welcomemssg: function(){
        console.log(`${this.username} ,welcome to website`);
        console.log(this);  // current context
    }
};
user.welcomemssg();
user.username = "kiara";
user.welcomemssg();

// interesting
console.log(this);   //empty object in node only..but in browser not empty because [Global object is "Window object"];


//
function winzo(){
    let ui = "zara";
    console.log(this);   //interesting
    console.log(this.ui);  //undefined  //we can't use this keyword for refer to current context in function..
}
winzo();


//Arrow Functions   --  () => {}
const char = ()=>{
    let ui = "zara";
    console.log(this);   //empty object in arrow functions
    console.log(this.ui);  //undefined  //we can't use this keyword for refer to current context in function..
}
char();


//Basic Arrow Function
const addTwo = (num1, num2)=>{  
    return num1 + num2;    //Explicit Return -- Note: when we use Curly braces{} then we need to write "return" keyword. 
}
console.log(addTwo(2, 4));


//Implicit Return in Arrow Functions..
const addTier = (num1, num2)=> num1 + num2;
console.log(addTier(6,1));

const addFour = (num1, num2)=> (num1 + num2); //Note: when we use paranthesis() then we don't need to write "return" keyword...Benefit -If U can return the "Object" must be use paranthesis()..
console.log(addFour(2, 7));

const addFive = ()=> ({namo : "large"}); //must be use paranthesis for returning the "Object"..
console.log(addFive());


//Immediately Invoked Fuction Expressions (IIFE)
// Note: Why we use IIFE ?  -- We use IIFE because sometimes there is a problem due to pollution of Global Scope...so those are the variables of global scope, whatever is its declaration, we use IIFE to reduce its pollution. 
// Syntax : (...//funciton content//.. )();  --- (); means as a argument..
(function boost(){                  //named IIFE
    console.log(`DB CONNECTED`);
})();

(()=>{                             //unnamed IIFE
    console.log("DB CONNECTED 2");
})();

((name)=>{
    console.log(`DB CONNECTED ${name}`);
})('Stree 2');

//Note: To write Two IIFE we will have to use Semicolon(;) at the end.. 