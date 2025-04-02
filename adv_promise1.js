// Async Task :-> DB calls, cryptography, network calls


//
const promiseOne = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Asyn task 1 is completed')
        resolve()
    },1000)
})

promiseOne.then(()=>{
    console.log('Promises 1 resolved')
})



//EXPLAIN : 👆🏻 

// What is a Promise?
// A Promise in JavaScript is a way to handle asynchronous tasks (like waiting for data to load, a timer, or network requests) in a clean and structured way. It has three states:

// 1. Pending: The task is still in progress.
// 2. Resolved (Fulfilled): The task has completed successfully.
// 3. Rejected: The task has failed, and an error occurred.

// A new Promise object is created and assigned to the variable promiseOne.
// Inside the Promise, a function is provided that takes two arguments:

// resolve(): Call this function when the asynchronous task is successful.
// reject(): Call this function if the task fails.

// setTimeout() is used to simulate an asynchronous operation that takes 1 second (1000 milliseconds) to complete.

// After the delay:
// The message "Asyn task 1 is completed" is logged to the console.
// The resolve() function is called to indicate that the Promise has been successfully resolved.

// .then() is a method that runs when the Promise is successfully resolved.
// In this case, after 1 second:

// "Asyn task 1 is completed" is logged to the console.
// The .then() block runs and logs "Promises 1 resolved".