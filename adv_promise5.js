// async/await in JavaScript to handle Promises

// Creating the Promise
const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = false
        if(!error){
            resolve({id: 'unknown', city: 'darkweb'})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

// Async Function to Handle the Promise
async function resolvePromise() {
    try{
        const response = await promiseFive
        console.log(response)
        console.log(response.city)
    }catch(error){
        console.log(error)
    }finally{
        console.log('Mein toh amaar hu bhai !')
    }
}

resolvePromise()


// Why Use Async/Await?
// Readability: The code reads like synchronous code, making it easier to understand.
// Error Handling: The try...catch block allows for clean error management.
// Improved Flow: Avoids chaining .then() and .catch(), which can sometimes make code harder to follow.

// Async/Await:
// async makes a function return a Promise automatically.
// await pauses the execution of the function until the Promise is resolved or rejected.

// async Keyword:
// Declares resolvePromise as an asynchronous function, which means it can use await to handle Promises.

// await:
// Pauses execution of the function until promiseFive is resolved or rejected.
// If resolved:
// The result (e.g., { id: 'unknown', city: 'darkweb' }) is assigned to response.
// Logs:
// The full response object.
// The city field: "darkweb".
// If rejected:
// The catch block runs and logs the error message.

// Error Handling (try...catch):
// The try block contains code that might throw an error (e.g., if the Promise is rejected).
// The catch block runs if an error occurs, logging the error message.

// finally Block:
// The finally block always runs, regardless of whether the Promise is resolved or rejected.
// Logs the humorous message: "Mein toh amaar hu bhai!"

// The resolvePromise function is called, initiating the Promise handling process.