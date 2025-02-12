// class User {
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
// }

// const chai = new User("chai", "chai@gmail.com", "123")
// console.log(chai.encryptPassword());

/**-------------------------------------------------------------- */

class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course is added by ${this.username}`);
        
    }
}

const user1 =new Teacher("Jahanvi", "jahanvi@gmail.com", "123")

user1.addCourse()
user1.logMe()
console.log(user1 instanceof Teacher);

const user2 = new User("Abhinav")

user2.logMe()


