//new keyword

//The default behaviour of JS also a prototype inheritance behaviour....-> means if JS is not getting something what you are expecting and searching then JS go up to the layer and look up to it access the parent, access the grandparent unless its get null value

//thats why we don't have "this" access inside arrow functions because this prototype is there..

// Array -> [Prototype]:Array -> [Prototype]:Object -> null
// String -> [Prototype]:String -> [Prototype]:Object -> null
// Function -> [Prototype]:Function -> [Prototype]:Object -> null

// Everything inside the JS is an Object in itself.




function multiply(num){
    this.num = num
    return num*5
}

multiply.power = 2
console.log(multiply(2))
console.log(multiply.power)
console.log(multiply.prototype)


//
function createUser(username, score){
    this.username = username
    this.score = score
    return this
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`The score : ${this.score}`)
}

const chai = new createUser('admin',200)
const tea = new createUser('unknown',100)

// console.log(chai)
chai.printMe()
tea.printMe()



/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/