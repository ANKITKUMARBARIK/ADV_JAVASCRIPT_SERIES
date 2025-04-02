// Numbers & Maths in JS

//Numbers
const score = 400;
console.log(score);

const balance = new Number(300);  //u can use explicitly define : Number
console.log(balance);

//
console.log(balance.toString());
console.log(typeof balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherName = 23.8966;
console.log(otherName.toPrecision(3));

const hundreds = 1000000;
console.log(hundreds.toLocaleString());

console.log(Number);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.EPSILON);
console.log(Number.isFinite());
console.log(Number.isInteger());


//Maths
let per = 5
console.log(Math);        //-------Object
console.log(typeof Math);
console.log(Math.PI);
console.log(Math.pow(2,4));
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.6));
console.log(Math.sqrt(25));
console.log(Math.min(4,6,2,8,7));
console.log(Math.max(4,6,2,8,7));

//
console.log(Math.random());  //BETWEEN 0 - 1 // 0 is inclusive // 1 is exclusive
console.log(Math.random() * 10); // BETWEEN 0 < 10
console.log(Math.floor(Math.random() * 10)); // BETWEEN 0 < 10
console.log((Math.random() * 10) + 1); // BETWEEN 1 - 10
console.log((Math.random() * 10) + 2); // BETWEEN 2 - 11
console.log(Math.floor(Math.random() * 10) + 1); // BETWEEN 1 - 10

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); //BETWEEN 10 - 20

