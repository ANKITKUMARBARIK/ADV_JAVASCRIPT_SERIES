//call() -- Note: Function Borrowing.. - call() method allows an object to use the method (function) of another object...[The first argument will always refer to "this" keyword]..
let userDetails1 = {
    name : "Bopendra Jogi",
    Age : 12,
    Designation : "Influencer",
    printDetails : function(){
        console.log(`Hello Good Morning ${this.name}`);
    }
}
userDetails1.printDetails();


let userDetails2 = {
    name : "Narayan Murti",
    Age : 15,
    Designation : "Joker",
}
userDetails1.printDetails.call(userDetails2);  //function borrowing--
//Note : userDetails1.printDetails -- means, When the function is called then "this" keyword will point to "userDetails1" because it is on the left hand side of the dot (.) operator &&&& .call(userDetails2) -- means, As soon as we .call(userDetails2) then we will now point the reference of "this" keyword to userDetails2......



//Some operations in call()
let user1 = {
    name : "Choudhary",
    Age : 18,
    Designation : "Designer",
}

let printDetails = function(){          
    console.log(`Hello Good Morning ${this.name}`);
}

printDetails.call(user1);         //function borrowing

let user2 = {
    name : "Sardar",
    Age : 19,
    Designation : "Application",
}

printDetails.call(user2);         //function borrowing


//Some operations in call()
let admin1 = {
    name : "Choudhary",
    Age : 18,
    Designation : "Designer",
}

let printDetail = function(state,country){       
    console.log(this.name,"",state,"",country);
}

printDetail.call(admin1,"Mumbai","India");     //function borrowing.. [The first argument will always refer to "this" keyword] like (admin1) ..

let admin2 = {
    name : "Sardar",
    Age : 19,
    Designation : "Application",
}

printDetail.call(admin2,"Delhi","India");   //function borrowing   




//apply() - Note: apply() method is similar to call(), but it takes an array[] of arguments instead of individual arguments.
let asus1 = {
    name : "Choudhary",
    Age : 18,
    Designation : "Designer",
}

let detail = function(state,country){       
    console.log(this.name,"",state,"",country);
}

detail.apply(asus1,["Mumbai","India"]);     //function borrowing ..[The first argument will always refer to "this" keyword] like (asus1) ..

let asus2 = {
    name : "Sardar",
    Age : 19,
    Designation : "Application",
}

detail.apply(asus2,["Delhi","India"]);   //function borrowing ..[The first argument will always refer to "this" keyword] like (asus2) ..




//bind() -- The bind() method returns a new function -- Note: An object to which the "this" keyword can refer inside the new function....When we call a function, we have not called it, we store its copy in the new function()..
let rog1 = {
    name : "Choudhary",
    Age : 18,
    Designation : "Designer",
}

let detailed = function(state,country){       
    console.log(this.name,"",state,"",country);
}

let newFunc = detailed.bind(rog1,["M","I"]);
newFunc();     //function borrowing ..[The first argument will always refer to "this" keyword] like (rog1) ..

let rog2 = {
    name : "Sardar",
    Age : 19,
    Designation : "Application",
}

let newFunco = detailed.bind(rog2,["D","I"]);
newFunco();   //function borrowing ..[The first argument will always refer to "this" keyword] like (rog2) ..