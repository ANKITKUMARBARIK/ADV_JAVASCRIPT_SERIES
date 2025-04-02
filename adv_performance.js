//PERFORMANCE IMPROVEMENT 
//Measure performace....


const t1 = performance.now()
console.log("Hello World")
console.log("Hello World")
console.log("Hello World")
console.log("Hello World")
console.log("Hello World")

const t2 = performance.now()
if(true){
    console.log("Hello Dev")
}

console.log('Total time by code1 : ',t2-t1)


//
const t3 = performance.now()
for(let i=0;i<5;i++){
    console.log('Hello World')
}

const t4 = performance.now()
const fname = 'Dev' 
if(fname === 'Dev'){
    console.log("Hello Dev")
}

console.log('Total time by code2 : ',t4-t3)