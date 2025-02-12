function setUsername (username){
    this.username = username
    console.log("called");
    
}

function createUserName(username, email, password){
    setUsername.call(this,username)
    this.email = email
    this.password = password
}

const chai = new createUserName("Jahanvi", "Jahanvi@gmail.com", "123")
console.log(chai);
