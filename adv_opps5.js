// CALL

function setUser(username) {
    this.username = username
    console.log('called')
}

function createUser(username, age, city) {
    setUser.call(this, username)
    this.age = age
    this.city = city
}

const demo = new createUser('admin', 20, 'surat')
console.log(demo)
