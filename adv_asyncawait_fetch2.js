const obj = {
    city: 'darkweb',
    found: 404
}
//we can pass object,array,...etc with (,)
fetch('https://api.github.com/users/ANKITKUMARBARIK', { obj })     //{obj} or obj
    .then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data)
        console.log(data.login)
        console.log(data.followers)
        console.log(data.public_repos)
        console.log(obj.city)
        console.log(obj.found)
    }).catch(() => {
        console.log('ERROR')
    })