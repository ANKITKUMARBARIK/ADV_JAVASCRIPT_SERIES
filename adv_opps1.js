// Object Literal
const obj = {
    username: 'anonymous',
    password: 123,
    city: 'darkweb',
    details: function(){
        console.log(`Got user details from database ${this.city}`)
        console.log(this)
    }
}

console.log(obj)
console.log(obj.username)
console.log(obj.details())



//new keyword 
// When you use new:

// A new, empty object is created.
// The constructor function is called, with this referring to the new object.
// The new object is linked to the constructor's prototype.
// If the constructor doesn't explicitly return an object, the new object is returned.

function user(userName, loginCount, isLoggedIn){
    this.userName = userName
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greet = function(){
        console.log(this.userName);
    }
    return this    //optional
}

const userOne = new user('admin',4,true)
const userTwo = new user('unknown',5,false)
console.log(userOne)
console.log(userTwo)

console.log(userOne.constructor)