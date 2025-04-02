// CLASS


class user1 {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword() {
        return `${this.password}abc`
    }

    changeUer() {
        return `${this.username.toUpperCase()}`
    }
}

const demo1 = new user1('admin', 'xyz@gmail.com', 123)
console.log(demo1.encryptPassword())
console.log(demo1.changeUer())



// BEHIND THE SCENE
function user2(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

user2.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

user2.prototype.changeUer = function(){
    return `${this.username.toUpperCase()}`
}

const demo2 = new user2('admin', 'xyz@gmail.com', 123)
console.log(demo2.encryptPassword())
console.log(demo2.changeUer())