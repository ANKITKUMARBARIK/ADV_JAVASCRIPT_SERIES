let car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    start: function () {
        return `${this.make} car got started in ${this.year}`
    }
}
console.log(car.start())

function Person(name, age) {
    this.name = name
    this.age = age
}
let john = new Person('John Doe', 20)
console.log(john);

function Animal(type) {
    this.type = type
}
Animal.prototype.speak = function () {
    return `${this.type} makes a sound`
}

Array.prototype.admin = function () {
    return `Custom method ${this}`
}

let myArr = [1, 2, 3]
console.log(myArr.admin());

let mynewArr = [1, 2, 3, 4, 5]
console.log(mynewArr.admin());


class Vehicle {
    constructor(make, model) {
        this.make = make
        this.model = model
    }
    start() {
        return `${this.model} is a car from ${this.make}`
    }
}

class Car extends Vehicle {
    drive() {
        return `${this.make} : This is an inheritance example`
    }
}

let myCar = new Car('Toyota', 'Corolla')
console.log(myCar.start());
console.log(myCar.drive());

let vehicleOne = new Vehicle('Toyota', 'Corolla')
console.log(vehicleOne.make);


// Encapsulation

class BankAccount {
    #balance = 0
    deposit(amount) {
        this.#balance += amount
        return `${this.#balance}`
    }
    getBalance() {
        return `$ ${this.#balance}`
    }
}
let account = new BankAccount()
console.log(account.getBalance());


// Abstraction

class CoffeeMachine {
    start() {
        // call Database
        // filter value
        return `Starting the machine`
    }
    brewCoffee() {
        return `brewing coffee`
    }
    pressStartButton() {
        let msg1 = this.start()
        let msg2 = this.brewCoffee()
        return `${msg1} + ${msg2}`
    }
}
let myMachine = new CoffeeMachine()
console.log(myMachine.start());
console.log(myMachine.brewCoffee());
console.log(myMachine.pressStartButton());


// Polymorphism

class Bird {
    fly() {
        return `Flying...`
    }
}
class Penguin extends Bird {
    fly() {
        return `Penguins can't fly...`
    }
}
let bird = new Bird()
let penguin = new Penguin()
console.log(bird.fly());
console.log(penguin.fly());

// static method

class Calculator {
    static add(a, b) {
        return a + b
    }
}
console.log(Calculator.add(2, 3));


// Getters & Setters

class Employee{
    #salary
    constructor(name,salary){
        if(salary<0){
            throw new Error('Salary cant be negative');
        }
        this.name = name
        this.#salary = salary
    }
    get salary(){
        return `U are not allowed to see salary`
    }
    set salary(value){
        if(value<0){
            console.error('Invalid salary');
        }else{
            this._salary = value
        }
    }
}
let emp = new Employee('Alice',-15000)
console.log(emp);
console.log(emp.name);
console.log(emp._salary);

console.log(emp.salary);
emp.salary = 60000