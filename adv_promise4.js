// Promise with multiple features like chaining, error handling with .catch(), and cleanup using .finally().

//ANOTHER WAY
const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({username: 'admin', password: 'admin123', email: 'xyz@gmail.com'})
        }else{
            reject('ERROR : Somethink went wrong !')
        }
    },1000)
})
// <-- Chaining
promiseFour.then((data)=>{         // Promises resolved 
    console.log(data)
    return data.username  //we can pass 'return' to next 'then'
}).then((username)=>{              // Promises resolved
    console.log(username)
}).catch((error)=>{                // Promises rejected  
    console.log(error)
}).finally(()=>{                   // Promises always executed
    console.log('Promise is either resolved or rejected')
})







//Promise.all([prom1,prom2,...])
let promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "First");
})
let promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "Second");
})
let promise3 = new Promise((resolve, reject) => {
    setTimeout(reject, 4000, "Third");
})
Promise.all([promise3, promise2, promise1])
.then((values) => {
    console.log(values)
})
.catch ((error) => {
    console.error("error:" + error);
})