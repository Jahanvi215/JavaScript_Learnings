class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
        
    }
    static createId(){
        return "123"
    }
}
const user1 = new User("Jahanvi")
user1.logMe()
//console.log(user1.createId());

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe()
console.log(iphone.createId());
