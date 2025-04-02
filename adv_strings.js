"use strict";    //treat all JS code as new version



// 1. Single-Threaded kya hai?
// Single-threaded ka matlab hai ki JavaScript ke paas sirf ek execution thread hai. Matlab ek waqt mein sirf ek kaam ho sakta hai, kyunki JavaScript ka main engine (call stack) ek hi thread pe kaam karta hai.

// Iska focus execution model pe hota hai.
// Jo cheez pehle stack mein aati hai, woh pehle execute hoti hai (FIFO - First In, First Out).

// 2. Synchronous kya hai?
// Synchronous ka matlab hai ki kaam sequence mein hota hai, ek kaam khatam hone ke baad hi agla kaam shuru hoga. Har kaam line-by-line execute hota hai, aur agar ek task time le raha hai, toh baaki saare wait karenge.

// Iska focus execution flow pe hota hai.
// Har task tab tak block karta hai jab tak woh complete na ho.

// Connection Between Single-Threaded and Synchronous
// Single-threaded hone ki wajah se JavaScript synchronous kaam karne ke liye ideal hai.
// Synchronous ka matlab hai ki ek kaam khatam hone ke baad hi agla kaam hoga. Aur kyunki JavaScript ka execution ek hi thread pe hota hai, synchronous behavior natural hai.


// Multithreaded: Ek saath multiple threads kaam karte hain
// Definition:
// Multithreaded ka matlab hai ki ek program ke andar ek hi waqt mein multiple threads execute ho sakte hain. Har thread independently kaam karta hai aur apna kaam parallel mein kar sakta hai.

// Threads kya hain? Ek thread ek chhota execution unit hai. Ek process ke andar multiple threads ho sakte hain, jo ek saath kaam karte hain.

// Multithreaded environment CPU utilization ko maximize karta hai, kyunki ek saath multiple tasks chal rahe hote hain.
// Example: Multithreading in Other Languages (e.g., Java, Python)
// JavaScript mein multithreading by default nahi hoti (kyunki wo single-threaded hai), par yeh concept doosre languages mein common hai.


// Asynchronous: Non-blocking Execution
// Definition:
// Asynchronous ka matlab hai ki ek kaam background mein hota rahe, jabki baaki kaam aage badhte rahe (non-blocking behavior). Ismein ek thread use hoti hai, lekin asynchronous nature ki wajah se tasks line-by-line block nahi karte.

// Kaise kaam karta hai? Event loop aur callback functions asynchronous tasks ko manage karte hain.
// Iska main goal hai responsiveness maintain karna, jisse UI ya program freeze na kare.

// setTimeout ka kaam background mein hota hai. Event loop ensure karta hai ki jab task ready ho (2 seconds ke baad), tab uska output aaye.
// Single-threaded hone ke baad bhi asynchronous nature allow karta hai ki JavaScript block na kare.

console.log(Infinity); //interesting
console.log(typeof Infinity);

let score = "444abc";
console.log(score);
console.log(typeof score);

let newValu = Number(score);
console.log(newValu);
console.log(typeof newValu)

console.log(Number(undefined));
console.log(Number(null));

//
let logged = "dgddg";
let converto = Boolean(logged);
console.log(converto);

//
let strlogged = 22;
let strconverto = String(strlogged);
console.log(strconverto);
console.log(typeof strconverto);

//
let abc = 9313;
var def = "Opps";
const ghi = "naruto";

console.log(abc);
console.log(def);
console.log(ghi);

//Table ----- second method to use console
console.table([abc, def, ghi]);   //good way table format



let str1 = 2;
let newVal = -str1
console.log(newVal);

//ToPrimitive (input [, preferredType ] )  // Operator Precedence
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
console.log(2 + 4 * 10 % 5 - 6 / 2);
console.log('10' * 20)
console.log('10' / 20)
console.log('120' % 3)
console.log('ten' * 20)  // NaN  -> Not a Number 
console.log(typeof NaN)
console.log(true + true)
console.log(+"true" * 1)
console.log(1 + +"true")
console.log(true + +'true')
console.log(true * 'true')
console.log(10 + +'20')
console.log(true);
console.log(true + 2);
console.log(+true);
console.log(-true);
console.log(-"");
console.log(+"");
let gameCount = 100;
gameCount++;
console.log(gameCount)
gameCount--;
console.log(gameCount)
++gameCount
console.log(gameCount)
--gameCount
console.log(gameCount);


//
console.log("2" > 1);
console.log("02" > 1);
console.log(2 > "1");
console.log("2" < "1");
console.log("2" == 2);
console.log("2" === 2);

//
console.log("Null");
console.log("2" > null);
console.log(0 < null);
console.log(0 > null);
console.log(0 == null);
console.log(null >= 0);

//
console.log("undefined");
console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined <= 0);
console.log(undefined > 0);
console.log(undefined < 0);

//
// Symbol -- unique data type 
console.log("Symbol");
const id = Symbol("124");
const email = Symbol("124");
console.log(id);
console.log(id == email);
console.log(id === email);//because symbol is unique

//BigInt
console.log("BigInt");
const bigNumber = 5645958558095546;
const bigNumber1 = 5645958558095546n;
console.log(BigInt(bigNumber));
console.log(BigInt(bigNumber1));
console.log(typeof bigNumber);
console.log(typeof bigNumber1);

//String
const newStr = new String("Hello");   //u can use explicitly define : String
console.log(newStr);
console.log(typeof newStr);
console.log(newStr.__proto__);




//All methods in strings
// at()
const sentence = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence.at(4));

// charAt
const sentence1 = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence1.charAt(4));

// charCodeAt -- code 11 is equal to q
const sentence2 = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence2.charCodeAt(4));

//concat
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3);

//String
const newStr1 = new String("Hello");
console.log(newStr1);

//endsWith
const str2 = 'Cats are the best!';
console.log(str2.endsWith('best!'));

//includes
const array4 = [1, 2, 3];
console.log(array4.includes(2));

//indexOf
const paragraph = "I think Ruth's dog is cuter than your dog!";
console.log(`The index of the first dog is ${paragraph.indexOf("dog")}`);

//lastIndexOf
const paragraph1 = "I think Ruth's dog is cuter than your dog!";
console.log(`Index of the last is ${paragraph.lastIndexOf("dog")}`);

//padEnd
const str3 = 'Breaded Mushrooms';
console.log(str3.padEnd(20, '.'));

//padStart
const str4 = '5';
console.log(str4.padStart(5, '0'));

//repeat
const mood = 'Happy! ';
console.log(`I feel ${mood.repeat(3)}`);

//replace
const paragraph2 = "I think Ruth's dog is cuter than your dog!";
console.log(paragraph2.replace("Ruth's", 'my'));

//replaceAll
const paragraph3 = "I think Ruth's dog is cuter than your dog!";
console.log(paragraph3.replace("dog", 'cat'));

//slice
const str = 'The quick brown fox jumps over the lazy dog.';
console.log(str.slice(4, 19));

//split
const str5 = 'The quick brown fox jumps over the lazy dog.';
const words = str5.split(' ');
console.log(words);
console.log(words[3]);
const chars = str5.split('');
console.log(chars)
console.log(chars[8]);
const strCopy = str5.split();  //Give Array
console.log(strCopy);
console.log(typeof strCopy);

//startsWith
const str6 = 'Saturday night plans';
console.log(str6.startsWith('Sat'));

//substring
const str7 = 'Mozilla';
console.log(str7.substring(1, 2));

//lowerCase
const sentence3 = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence3.toLowerCase());

//toString
const stringObj = new String('foo');
console.log(stringObj);
console.log(stringObj.toString());
console.log(typeof stringObj);        //object

//toUpperCase
const sentence4 = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence4.toUpperCase());

//trim
const greeting = '   Hello world!   ';
console.log(greeting.trim());

//trimEnd
const greeting1 = '   Hello world!   ';
console.log(greeting1.trimEnd());

//trimStart
const greeting2 = '   Hello world!   ';
console.log(greeting2.trimStart());

//valueOf
const stringObj1 = new String('foo');
console.log(stringObj1);
console.log(stringObj1.valueOf());




///////////////////////////////////////////////////////////////
/*
The working of the JavaScript works on three phases:
1. Global Execution Context
2. Memory phase / Creation phase
3. Execution phase

Phase 1: Global Execution Context
The value of `this` keyword is set to Global Execution Context(which is an empty Object in NODE environment, & window object in browser environment)

Phase 2: Memory phase
During this phase, JS engine scans the code and assigns the initial values for the variables, functions, etc..For variables they are 'undefined' and for functions they are set to their function definition

Phase 3: Execution phase
After the creation phase completed, the execution phase begins where actual values of the variables are set.And when the functions are called it creates a new 'Function Execution' context which consists of two phases(they works same as explained above but only for the particular function scope):
    1. Memory phase
2. Execution phase 
The return value of the 'Function Execution' context is passed to the Global Execution Context.
*/