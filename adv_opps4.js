// Old Syntax -> Inheritance

const user = {
    fname: 'admin',
    email: 'xyz@google.com'
}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const taSupport = {
    makeAssignment: 'JS',
    fullTime: true,
    __proto__: teachingSupport  //taSupport access all properties of teachingSupport
}

teacher.__proto__ = user //teacher access all properties of user




//MODERN SYNTAX :-> INHERITANCE

Object.setPrototypeOf(teachingSupport, teacher)//teachingSupport access all properties of teacher