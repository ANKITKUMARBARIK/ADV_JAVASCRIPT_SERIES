// const promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('HERE')
//         resolve()
//     },2000)
// })

// promise1.then(()=>{
//     console.log('Promise Consumed')
// })


// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('HERE')
//         resolve()
//     },2000)
// }).then(()=>{
//     console.log('Promise Consumed')
// })




// const promise3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({username: 'admin',pass: 123})
//     },1000)
// })

// promise3.then((data)=>{
//     console.log(data.username)
//     console.log(data.pass)
// })




// const promise4 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error = false
//         if(!error){
//             resolve({username: 'admin',pass: 123})
//         }else{
//             reject('Error')
//         }
//     },1000)
// })

// promise4.then((data)=>{
//     console.log(data)
//     return data.username
// }).then((username)=>{
//     console.log(username)
// }).catch((error)=>{
//     console.log('Ye kya aagya bhai : ',error)
// }).finally(()=>{
//     console.log('Mein amar hu')
// })






// const promise5 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false
//         if (!error) {
//             resolve({ username: 'admin', pass: 123 })
//         } else {
//             reject('Error')
//         }
//     }, 1000)
// })

// async function asyncFunc() {
//     try {
//         const response = await promise5
//         console.log(response)
//         console.log(response.username)
//     }catch(error){
//         console.log('Ye kya aagya : ',error)
//     }finally{
//         console.log('Mein amar hu')
//     }
// }

// asyncFunc()






// async function fetchResolve() {
//     try {
//         const response = await fetch('https://ai.github.com/users/ANKITKUMARBARIK')
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         throw new Error("Ye kya agaya : ",error);
//     }
// }

// fetchResolve()







// const obj = {
//     admin: 'dark',
//     age: 20
// }

// fetch('https://api.github.com/users/ANKITKUMARBARIK',{obj})
// .then((response)=>{
//     return response.json()
// }).then((data)=>{
//     console.log(data)
//     console.log(data.login)
//     console.log(obj.admin)
//     console.log(obj.age)
// }).catch((error)=>{
//     console.log('Ye kya aagya error',error)
// }).finally(()=>{
//     console.log('Mein amar hu')
// })



function func(user,age){
    this.user = user
    this.age = age
    return this
}

// const exe1 = func('admin',20)
// const exe2 = func('unknown',21)
const exe1 = new func('admin',20)
const exe2 = new func('unknown',21)
console.log(exe1);
