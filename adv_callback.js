//SYNCHRONOUS CALLBACK

// function hf(x,exec){
//     // x -> high order function
//     // fn -> callback
//     console.log(x*x)
//     exec(x*x)
// }

// hf(2,exec)

// function exec(n){
//     console.log('square value is : ',n)
// }


//ASYNCHRONOUS
console.log('start')
setTimeout(()=>{
    console.log('timer done')
},1000)
console.log('end')


// TWO MAJOR PROBLEMS IN CALLBACK:-
// 1. Inversion of control -> when we pass callback func.. control to another func.. 
// 2. CallBack Hell  -> Readeability problem