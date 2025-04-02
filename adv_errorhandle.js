//ERROR HANDLING
// Two types of error : 1. compile time   2. run time


//compile time error :-

//syntax error
// console.log(1


//run time error :-

//reference error
// console.log(x)



//try-catch-finally

try{
    console.log("INSIDE TRY BLOCK")
    // .. .. .. . .. .. 
    // .. .. .. . .. .. 
    // .. .. .. . .. .. 
    console.log(a)      //reference error
}
catch(error){  //catch the reference error - (error)
    console.log('INSIDE CATCH BLOCK')
    // .. .. .. . .. .. 
    // .. .. .. . .. .. 
    // .. .. .. . .. .. 
    console.log("Error is : ",error)   //print reference error
}
finally{   //it run evertime whether is error or not
    console.log("Finnaly i will run everytime")
}






//Create own/custom error using "throw" keyword :-

try{
    console.log(a) //reference error
}
catch(error){
    throw new Error('Bhai pehle declare kardo fhir print karna..!')
}



//
// let errorCode = 100
// if(errorCode === 100){
//     throw new Error('Invalid Json')
// }