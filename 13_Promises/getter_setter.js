class User {
    constructor(user, email, password){
        this.user = user
        this.email = email
        this.password = password 
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
         this._email = value
    }

    get password(){
        //return this._password = "cant' give password"
        return `${this._password}jekildbh67`
    }
    set password(value){
        this._password = value
    }
}

const user1 = new User("jahanvi", "jahanvi@gmail.com", "123")

console.log(user1.password);
console.log(user1.email);

