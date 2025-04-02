let system = {cpu: 12}
let msi = {
    screen: "4K",
    __proto__: system
}
let nvidia = {}
// try out in browser also
console.log(`system `, system.__proto__)
console.log(system.__proto__)
console.log(msi.__proto__)
console.log(msi.screen)
console.log(msi.cpu)

// better way

let genericCar = {tyres: 4}
let tesla = {
    driver: "AI"
}
Object.setPrototypeOf(tesla, genericCar)

console.log(Object.getPrototypeOf(tesla))
console.log(tesla.__proto__)
console.log(tesla.tyres)
console.log(tesla.driver)
console.log(genericCar.tyres)
console.log(genericCar.__proto__)
console.log(genericCar.driver)