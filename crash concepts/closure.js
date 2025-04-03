function outer() {
    let counter = 4
    return function () {
        counter++
        return counter
    }
}

let increment = outer()
console.log(increment());

// Closure JavaScript ka ek powerful concept hai jo ek function ko uske surrounding scope ke variables ko "yaad" rakhne ki ability deta hai, chahe function execute hone ke baad bhi wo scope destroy ho chuka ho.