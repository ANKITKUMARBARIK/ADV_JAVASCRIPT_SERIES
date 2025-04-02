fetch('https://api.openweathermap.org/data/2.5/weather?q=manali&appid=0b60bfb49641291b9b80dd9e4912432a')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log('Error')
}).finally(()=>{
    console.log('successfully')
})