console.log("Hello Functionsss....");

function addTwoNumbers(a,b){
 return a+b
}
const result = addTwoNumbers(2,4)
// console.log(result);


function addToCart(...num1) {
    return num1
}

// console.log(addToCart([12,23,22,222, 100]));

const obj={
    username:"Jahanvi",
    price: 200
}

function objectNums(anyObj){
    // console.log( `User name is ${anyObj.username} and price ${anyObj.price}`);
    
}

objectNums(obj)

/********************CLOSURES********************* */

function parent(){
    const username = "Jahanvi"
        function child(){
            const website ="Jahanvi"
            //console.log("Hey this side ", username);
            
        }
        
        child()
    
}
parent()

/***************************HOISTing******************************** */

//console.log(addOne(5));
function addOne(num){
 return num+1
}


const addTwo = function(num){
return num +2
}

//console.log(addTwo(6));


/*****************************ARROW functions & this************************************* */

const user ={
    username:"Deepika",
    price:999,

    welcomMessage: function(){
        // console.log(`${this.username}, Welcome to our website`);
        // console.log(this);
        
    }
}

user.welcomMessage()
// user.username="Ranveer"
// user.welcomMessage()
// console.log(this);


// const chai =function(){
//     let username ="Jahanvi"
//     console.log(this.username);
    
// }
const chai =() =>{
    let username ="Jahanvi"
    // console.log(this.username);
    
}

chai()

/***************Ways to declare functions******************* */

// const sum = (a,b) =>{
//     return a+b  .//explicite return
// }

// const sum =(a,b) => a+b // implicite return // automatic

// const sum =(a,b) => (a+b)
const sum =(a,b) => ({username:"Janu"})
console.log(sum(3,5));

/***************IMMEDIATLY INVOKED FUNCTION EXPRESSION (IIFE)*********************************************************************************** */

(function chai2(){
    console.log("DB connected"); // named IIFE
    
})();

( (name) =>{ // not named IIFE
    console.log(`DB connected 2 for ${name}`);
    
})("Jahanvi")





















