// //For Loop

// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer Loop Value : ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} : ${i*j}`);
//     }    
// }



// let array = ["batman","ironman","spiderman","hulk","avengers","naruto"];
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
// }


// //While Loop
// let i = 0;
// while (i <= 10) {
//     console.log(`Value of index is : ${i}`);
//     i += 2;
// }

// let myArr = ["flash","batman","spider"],j=0;
// while (j < myArr.length) {
//     console.log(`Value is : ${myArr[j]}`);
//     j++;
// }


// //Do-While Loop
// let score = 11;
// do {
//     console.log(`Score is : ${score}`)
//     score++;
// } while (score <= 10);



// //Break and Continue------
// //Break
// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log("Detected 5");
//         break;
//     }
//     console.log(`Index Break of i : ${index}`);
// }

// //Continue
// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log("Detected 5");
//         continue;
//     }
//     console.log(`Index Continue of i : ${index}`);
// }


// //for of Loop  -- use in Arrays & Strings
// const arra = [1,2,3,4,5];
// for (const num of arra) {
//     console.log(`Value of for-of : ${num}`)
// }

// //
// const greeting = "Hello Meta";
// for (const greet of greeting) {
//     console.log(`Each char is : ${greet}`);
// }



// // Not Working !!!!
// const myObj = {
//     game1 : "NFS",
//     game2 : "Spider"
// };

// for (const [key,value] of myObj) {
//     console.log(`${key} : ${value}`);
// }



// //for in Loop  -- use in Objects and Arrays
// const myLang = {
//     js: "Javascript",
//     cpp: "C++",
//     rb: "Ruby",
//     swift: "Swift"
// };

// for (const key in myLang) {
//     console.log(`${key} : ${myLang[key]}}`);
// }

// //
// const progra = ["js","ruby","py","cpp"];
// for (const key in progra) {
//     console.log(progra[key]);
// }



//For-Each Loop ----- Most Used in JS. High Order Function  --use in Arrays
// How works ? --- forEach calls the CallBack Function, which does not have any name....Let us give a name to the paranthesis which will take the value as a parameter.. 
//Most use in this scenario - [{},{},{},{}]  --this type of format come from Database.

const country = ["India","China","Us","Russia"];
// country.forEach((item)=>{
//     console.log(item);
// });

// //
// country.forEach((val)=>{
//     console.log(val);
// });

// //
// function printMe(item){
//     console.log(item);
// }

// country.forEach(printMe);

// //
// country.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// });


// //
// const myCoding = [
//     {
//         languageName: "Javascript",
//         languageFile: "js"
//     },
//     {
//         languageName: "Java",
//         languageFile: "java"
//     },
//     {
//         languageName: "Python",
//         languageFile: "py"
//     },
// ];

// myCoding.forEach((item,idx)=>{
//     console.log(item);
// });

// //
// myCoding.forEach((item)=>{
//     console.log(item.languageName);
// });



// //For-Each Loop -- Does not return any value..
const hack = ["Linux","Parrot","Kali","Ubuntu"];
const hacker = hack.forEach((item)=>{
    return item
});
const temp = hacker
console.log(temp)