//Function  -- Note: When we create function use return type ..after line of return --No one line of statement/code will execute.. 

function twoNum(n1,n2){   //interesting
    console.log(n1+n2);
}
const result = twoNum(2,5);  // 7
console.log("Result : ",result);  //undefined


//
function addTwoNum(no1,no2){   //interesting
    // let sum = no1+no2;
    // return sum;

    return no1 + no2;
}
const res = addTwoNum(2,3);
// const res = addTwoNum(2,"3");
console.log(res);


//Note : When user pass no one value then output - undefined
function loginUser(username){
    if(username === undefined){           //other way- (!username)
        console.log(`Re-enter username`);
        return;
    }
    return `${username} just logged in`;
}
console.log(loginUser("hello"));
console.log(loginUser());  // -- undefined


//We can pass default name ..when user not be put any input
function loginUser1(username = "name"){
    if(!username){
        console.log(`Re-enter username`);
        return;
    }
    return `${username} just logged in`;
}
console.log(loginUser1("kevi"));


//Rest OR Spread Operator
function calCart(...num1){   // ... = Rest OR Spread (...)Operator
    return num1;
}
console.log(calCart(200,400,500,600));


//Interview Ques
function calCart1(val1,val2,...num1){   // ... = Rest OR Spread Operator
    return num1;
}
console.log(calCart1(200,400,500,600));


//Pass Object to Function
const user = {
    username : "little",
    price : 199
};

function handleObj(anyObj){
    console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`);
}
handleObj(user);


//Pass Array to Function
const myNewArr = [20,30,40,50,60];
function retArr(getArr){
    return getArr[1];
}
console.log(retArr(myNewArr));