//Maps Introduction
const map = new Map();
map.set('IN' , "India");
map.set('USA' , "United States of India");
map.set('Fr' , "France");
console.log(map);

//
for (const key of map) {
    console.log(key);
}

// Not Working !!!!
// for (const key in map) {  
//     console.log(key);
// }

//
for (const [key, value] of map) {
    console.log(`${key} : ${value}`);
}


//Map  -- Returns the elements of an array that meet the condition specified in a callback function. -- for each element in the array..
const geo = [2, 4, 6, 8, 0, 3, 5, 7, 9, 1];
const newNum = geo.map((num)=> num + 10);
console.log(newNum);

//
geo.forEach((num) => {
    console.log(num + 10);
});

//Chaining map, filter, and reduce functions 
const newDear = geo
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40)
console.log(newDear);



//Filter  -- Returns the elements of an array that meet the condition specified in a callback function. -- for each element in the array
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newFilter = myNums.filter((num) => num > 4);
console.log(newFilter);

//
let newFilterr = myNums.filter((num) => {
    return num > 4;
});
console.log(newFilterr);     //if u don't put return -- Empty Array because...remember - Explicit Return -- Note: when we use Curly braces{} then we need to write "return" keyword.

//
const newNums = [];
myNums.forEach((num)=>{
    if (num > 4) {
        newNums.push(num);
    }
});

console.log("New number : ",newNums);



//Exercises -- Real-World Examples--
const users = [
    { username: 'Jon', genrePref: 'rock', publish: 2001 },
    { username: 'Lucy', genrePref: 'pop', publish: 2003 },
    { username: 'Mike', genrePref: 'rock', publish: 2005 },
    { username: 'Luke', genrePref: 'house', publish: 2007 },
    { username: 'James', genrePref: 'house', publish: 2008 },
    { username: 'Dave', genrePref: 'bass', publish: 2006 },
    { username: 'Sarah', genrePref: 'country', publish: 2004 },
    { username: 'Natalie', genrePref: 'bass', publish: 2002 }
];

const newUi = users.filter((bk) => bk.genrePref === 'house');
console.log(newUi);

//
const newUii = users.filter((bk) => { return bk.publish > 2004 });
console.log(newUii);

//
const newUiii = users.filter((bk) => {
    return bk.publish > 2004 && bk.genrePref === 'house';
});
console.log(newUiii);



//Reduce --  all elements of the array is a single value.
// Accumulator must be zero 0.
const myCount = [1,2,3,4,5];
const myTotal = myCount.reduce((acc,curr)=>{
    console.log(`acc : ${acc} and curr : ${curr}`)
    return acc + curr;
},0);
console.log(myTotal);

//
const myTotal1 = myCount.reduce((acc,curr)=> acc * curr, 0);
console.log(myTotal1);

//Exercise -- Real World Example
const shoppingCart = [
    {
        itemName: "JS",
        price: 4999
    },
    {
        itemName: "Pyhton",
        price: 3999
    },
    {
        itemName: "Mobile Dev",
        price: 9999
    },
    {
        itemName: "Data Science",
        price: 12999
    },
];

const courses = shoppingCart.reduce((acc,item)=> acc + item.price, 0);
console.log(courses);


