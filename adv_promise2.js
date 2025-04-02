//ANOTHER WAY

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Async task 2 is completed');
        resolve()
    },1000)
}).then(()=>{
    console.log('Promises 2 resolved')
})