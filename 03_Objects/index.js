console.log("Hello Objectss------>");

const mysm1 = Symbol("key1")
// console.log(typeof mysm1);


const JSuser = {
    name: "Jahanvi",
    "full name": "Jahanvi Tharu",
    [mysm1]: "mynewkey",
    email: "janu@gmail.com",
    age: 21,
    location: "Bengaluru",
    isLoggedIn: false,
    lastLoginDays: ["Mon", "Tue", "Wed"]
}

// console.log(JSuser.age);
// console.log(JSuser['name']);
// console.log(JSuser["full name"]);
// console.log( JSuser[mysm1]);

JSuser.email = "jahanbi@yahoo.com"
// console.log(JSuser);

// Object.freeze(JSuser)
// JSuser.email = "ndemdlm"
// console.log(JSuser.email);

// JSuser.greeting = function(){
//     console.log("Hello user");  

// }
// JSuser.greetingTwo = function(){
//     console.log(`Hello user ${this.name}`);

// }
// console.log(JSuser.greeting());
// console.log(JSuser.greetingTwo());

const user = {}
user.id = 123
user.username = "Jahanvi"
user.isLoggedIn = true
user.email = "jan@nnn.com"
// console.log(user);
//  const regUser ={
//     email:"abc@gmail.com",
//     fullname:{
//         userfullname:{
//             firstname:"Jahanvi",
//             lastname:"Tharu"
//         }
//     }
//  }

//  console.log(regUser.fullname.userfullname.firstname+ " " + regUser.fullname.userfullname.lastname);

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "f",
    4: "d"
}
// const obj3 ={...obj1, ...obj2}
const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);

const instaUsers = [
    {
        id: 1,
        name: "Jassi",
        email: "jass@gmail.com"
    },
    {
        id: 2,
        name: "Jassi",
        email: "jass@gmail.com"
    },
    {
        id: 3,
        name: "Jassi",
        email: "jass@gmail.com"
    },
    {
        id: 4,
        name: "Jassi",
        email: "jass@gmail.com"
    },
    {
        id: 5,
        name: "Jassi",
        email: "jass@gmail.com"
    },
]

// console.log(instaUsers[4])
// console.log(user)
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// console.log(user.hasOwnProperty('email'));



const course = {
    courseName: "JavaScript",
    coursePrice: 999,
    courseInstructor: "Jahanvi"
}

const { courseName: cname, courseInstructor: cInstructur } = course

console.log(cname);
console.log(cInstructur);


 

