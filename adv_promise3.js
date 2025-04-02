//ANOTHER WAY

const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username: 'admin', password: 'admin123', email: 'xyz@gmail.com'})
    },1000)
})

promiseThree.then((data)=>{
    console.log(data)
    console.log(data.username)
    console.log(data.password)
    console.log(data.email)
})