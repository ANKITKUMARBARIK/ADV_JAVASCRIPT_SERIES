function Person(name, age) {
    this.name = name
    this.age = age
}

function Car(make, model) {
    this.make = make
    this.model = model
}

let p = new Person('admin', 23)
console.log(p);
let c1 = new Car('Toyota', 'Camry')
console.log(c1);
let c2 = new Car('Suzuki', 'NAno')
console.log(c2);

function Tea(type) {
    this.type = type
    this.describe = () => {
        return `this is a cup of ${this.type}`
    }
}
let t = new Tea("Lemon Tea")
console.log(t);
console.log(t.describe());

function Animal(species) {
    this.species = species
}
Animal.prototype.sound = function () {
    return `${this.species} makes a sound`
}

let a = new Animal("Dog")
console.log(a)
console.log(a.sound())

let c = new Animal("Cat")
console.log(c)
console.log(c.sound())

function Drink(name){
    if(!new.target){
        throw new Error("Drink must be called with new keyword")
    }
    this.name = name
}
let tea = new Drink('tea')
let coffee = Drink('coffee')