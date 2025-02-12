/**------------------------Promise 1------------------------------ */
const promiseOne = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Promise comleted");
        resolve()
    }, 1000);

})

promiseOne.then(function(){
   console.log("Promise consumed");
    
})
/**----------------------Promise 2------------------------- */

new Promise(function(resolve, reject){
  setTimeout(function(){
    console.log("Async 2");
    resolve()
  },2000)
}).then(function(){
    console.log("Async 2 resolved");
    
})

/*----------------------------Promise 3---------------------------------- */

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({
            username:"Jahanvi",
            email:"jan@gmail.com"
        })
    },1000)
})
promiseThree.then(function(user){
    //console.log(user);
    
})

/**-------------------Promise 4-------------------------- */

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(()=>{
        let error = false
        if (!error) {
            resolve({
                username:"William",
                email: "will@gmail.com"
            })
        } else{
            reject('ERROR: Something went wrong')
        }
    }, 3000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
    
}).catch((err)=>{
    console.log(err);
    
})
// .finally(()=> console.log("Promised  resolved or  rejcted")
// )

/*-----------------------------Promise 5----------------------------- */
const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true
        if (!error) {
            resolve({
                username:"George",
                password: "123"
            })
        } else{
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive() {
   try {
    const response = await promiseFive
    console.log(response);
   } catch (error) {
    console.log(error);
    
   }   
}

consumePromiseFive()

/*----------------------------Async Await with API------------------------------- */
// method 1
/*
async function getAllUsers(){
   try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data);
   } catch (error) {
    console.log("E:", error);
   } 
}
getAllUsers() */

//method 2

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()  
})
.then((data)=>{
    console.log(data);  
})
.catch((err)=>{
    console.log(err); 
})

/*---------------------OOPS/ Contructor---------------------- */

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    //return this
}

const user1 = new User("Jahanvi", 8, true)
const user2 = new User("William", 7, false)
console.log(user1, 136);
console.log(user2, 137);

