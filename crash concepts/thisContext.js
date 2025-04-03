const person = {
    name: 'admin',
    greet: function () {
        console.log(`Hi i am ${this.name}`);
    }
}

person.greet()

const greetFunction = person.greet
greetFunction()    //interesting -- undefined, because context is missing at here

const boundGreet = person.greet.bind({ name: 'John' })
boundGreet()  // works bcoz of bind