const myArr = new Array(1,2,3,4,5);
console.log(myArr);

//
const newArr = [1,2,4,5,6];
console.log(newArr.join());
console.log(typeof newArr.join());    //string   : Note

// splice()  -- change original array

//
let cons_array = [1,2,4,[5,7],9,[4,8,[6,9,7]]];
let real_array = cons_array.flat(Infinity);
console.log(real_array);


//
console.log(Array.isArray("Titan"));
console.log(Array.from("Titan"));   //create array
console.log(Array.from({name: "Titan"})); //interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3)); //create array


//interesting play with splice..

// let arr = [1,2,4,5,6];
// let arr1=arr;
// console.log(arr1.splice(1,2,"orange"));
// console.log(arr);
// console.log(arr1);

// let arr = [1,2,4,5,6];
// let arr1=arr.splice(1,2,"orange");
// console.log(arr1);
// console.log(arr);
// console.log(arr1);


//join
const fastArr = [5,6,7,8,9];
console.log(fastArr.__proto__)
const myArray = fastArr.join();
console.log(fastArr);
console.log(myArray);
console.log(typeof myArray);    //string

const york = new Array(1,2,4,5,6)
console.log(york)
console.log(york.__proto__)