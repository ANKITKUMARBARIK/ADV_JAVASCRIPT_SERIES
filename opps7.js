// INHERITANCE

class user{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log('Username is : ',this.username);
    }
}

class teacher extends user{
    constructor(username, email, pass){
        super(username)
        this.email = email
        this.pass = pass
    }

    addCourse(){
        console.log('A new course was addes by ',this.username);
    }
}

const obj = new teacher('admin','xyz@google.com',123)
obj.addCourse()
obj.logMe()