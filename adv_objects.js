//Object --
// Two way to declare object : 
// 1.Literals - can't singleton
// 2.Constructor - can make singleton

//Constructor
//Object.create        //create object

//OBJECT LITERALS  - cant't singleton
const jsUser = {
    name: "lorem",        //in process of system name has own string..
    "lName": "worem",      //No chance to access like that -- console.log(jsUser.lname); You can access like console.log(jsUser["lname"]);
    age: 18,
    eligible: true,
    lastLogin: ["saturday", "sunday"]
};
console.log(jsUser);
console.log(jsUser["name"]);  //Good way to access values -- why we use like that ? -- Suppose In object, const jsUser = {"lname" : "worem"}; --u can't access like console.log(jsUser.lname); ---That's why we use good way -- console.log(jsUser["lname"]); 
// ---But NOTE : Most cases we acces with dot(.) operator..
console.log(jsUser["lName"]);


//Interview Ques --ek symbol lo usko object ke key mein add karo aur usse print karke dikhao 
const mySym = Symbol("key1");

const objSym = {
    name: "lorem",
    age: "red",
    [mySym]: "interview ques"
};
console.log(objSym);
console.log(objSym[mySym]);  //access symbol in object
console.log(mySym)

//You can add functions in object
objSym.greetings = function () {
    console.log("Funcitons add in object..");
}
objSym.greetings();
console.log(objSym.greetings);   //interesting 
console.log(objSym);



//access values using function in object
objSym.greetingsTwo = function () {
    console.log(`Hello JS user : ${this.name}`); //agar hume same object ko reference karna hai toh hum this keyword ka use karte hain..
}
console.log(objSym.greetingsTwo());


//Changes in object
objSym.age = "orange";
console.log(objSym);


//You can freeze object .. which can't change 
Object.freeze(objSym);
objSym.age = "yellow";
console.log(objSym);
console.log(Object.isFrozen("Freeze : ", objSym));  //true --because this object is frozen(freeze).


//Singleton object
const tinder = new Object();
console.log(tinder);

//Non-Singleton object
const tinderUser = {};
tinderUser.name = "torem";
tinderUser.age = 18;
tinderUser.login = false;
console.log(tinderUser);


//Object / Nested Object
const canVas = {
    name: "lorem",
    age: "red",
    fullname: {
        lastname: {
            realName: "wolfra",
            fakeName: "rust"
        }
    }
};

console.log(canVas);
console.log(canVas.fullname);
console.log(canVas.fullname.lastname);

console.log(Object.keys(canVas));  //typeof - Object ,But datatype - Array
console.log(Object.values(canVas));
console.log(Object.entries(canVas));
console.log(canVas.hasOwnProperty("name"));   //true or false
let description = Object.getOwnPropertyDescriptor(canVas, 'name');
console.log(description);

const descrip = {};
Object.defineProperty(descrip, 'name', {
    value: 'John',
    writable: false
});
console.log(descrip.name);

const data = {};
Object.defineProperties(data, {
    username: {
        value: 'Cargo',
        writable: false
    },
    email: {
        value: 'gaur@124',
        writable: true
    }
});
console.log(data.username);

let objEntry = Object.entries(canVas);  //convert to array
console.log(objEntry);

let convertToObj = Object.fromEntries(objEntry);  //convert to object
console.log(convertToObj);

canVas.id = 2;
console.log(canVas);
Object.seal(canVas);   //A sealed object has a fixed set of properties: new properties cannot be added, existing properties cannot be removed, their enumerability and configurability cannot be changed..But Values of existing properties can still be changed
canVas.email = "barik"; //we can't add new properties
console.log(canVas);
console.log(Object.isSealed(canVas)); //true --because this object properties is sealed(seal)..
canVas.name = "joker";  //but, we can change existing properties
console.log(canVas);

const newAss = Object.assign({}, canVas)  //"Assign" takes two things..one empty object and one object's properties have to be copied..
console.log("New Object : ", newAss);
console.log(newAss === canVas);  //False -- because, The reference of "canVas" is different and the reference of "newAss" is different means both are different "objects"...



//Combine Two Objects
const obj1 = {
    1: "A",
    2: "B"
};

const obj2 = {
    3: "A",
    4: "B"
};

// const obj3 = {obj1,obj2};
// const obj3 = Object.assign(obj1,obj2);
//const obj3 = Object.assign({},obj1,obj2);  //Good way to combine two objects..
const obj3 = { ...obj1, ...obj2 };   //Most use to combine Objects -- use spread(...) operator...
console.log(obj3);


//When values comes from Database -- Array of Objects
const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
    {
        id: 3,
        email: "c@gmail.com"
    },
]

console.log(users);
console.log(users[1].email);
console.log(typeof users);  //object


//De-Structure in Objects
const course = {
    courseName: "js with lorem",
    price: 999,
    courseInstruct: "naruto"
};

// const {courseInstruct} = course;
// console.log(courseInstruct);
const { courseInstruct: instruct } = course;  //de-structure
console.log(instruct);




//Introduction of APIs Concept  -- JSON format -- (Object OR Arrays) FORMAT
//Keys and Values as encoded with strings("")..
/*
{
    "login": "barik",
    "id": 11613311,
    "node_id": "MDQ6VXNlcjExNjEzMzEx",
    "avatar_url": "https://avatars.githubusercontent.com/u/11613311?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/barik",
    "html_url": "https://github.com/barik",
    "followers_url": "https://api.github.com/users/barik/followers",
    "following_url": "https://api.github.com/users/barik/following{/other_user}",
    "gists_url": "https://api.github.com/users/barik/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/barik/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/barik/subscriptions",
    "organizations_url": "https://api.github.com/users/barik/orgs",
    "repos_url": "https://api.github.com/users/barik/repos",
    "events_url": "https://api.github.com/users/barik/events{/privacy}",
    "received_events_url": "https://api.github.com/users/barik/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Hitesh Choudhary",
    "company": null,
    "blog": "https://www.youtube.com/c/barikdotcom",
    "location": "India",
    "email": null,
    "hireable": null,
    "bio": "I make coding videos on youtube and for courses. My youtube channel explains my work more. Check that out",
    "twitter_username": "barikdotcom",
    "public_repos": 92,
    "public_gists": 4,
    "followers": 28727,
    "following": 0,
    "created_at": "2015-03-23T13:03:25Z",
    "updated_at": "2024-08-21T07:22:35Z"
}
*/
