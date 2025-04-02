// Closure ek aisa function hai jo apne surrounding (outer) scope ke variables ko yaad rakhta hai, chahe outer function execute ho chuka ho.

// Matlab agar ek function ke andar ek aur function banaya gaya hai, to inner function ko outer function ke variables ka access milega, chahe outer function khatam ho chuka ho.

// outerFunction ne ek outerVariable banaya.
// innerFunction ko outerVariable ka access mil gaya, kyunki yeh uske lexical scope mein hai.
// Jab outerFunction khatam ho gaya, tab bhi innerFunction ke paas outerVariable ki memory bachi rahi. Yeh hi closure hai.
// Even when the outerFunction finishes executing, the innerFunction retains a reference to the outerVariable in memory. This retained reference is what we call a closure.

function outerFunction() {
    let outerVariable = "Mozilla"; // name is a local variable created by init
    function innerFunction() {
        // displayName() is the inner function, that forms a closure
        console.log(outerVariable); // use variable declared in the parent function
    }
    innerFunction();
}
outerFunction();