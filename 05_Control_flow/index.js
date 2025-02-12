console.log("Hello code control");

const score =200

// if (score > 100) {
//     const power ="fly"
//     console.log(`The power is ${power} and score is ${score}`);
    
// }else{
//     console.log(`You need to get some more poewer`);
    
// }

const month = 3

switch (month) {
    case 1:
        console.log("January");
        
        break;
    case 2:
        console.log("Febraury");
        
        break;
    case 3:
        console.log("March");
        
        break;
    case 4:
        console.log("April");
        
        break;

    default:
        break;
}
/**********Truthy or falsy values*********** */
const email =[]

if (email) {
    console.log("user have email")
    
}else{
    console.log("don't have email");
    
}
/*Falsy values
false, 0, -0, BigInt, 0n, "", null, undefined, NaN */

// to check if the array is empty
if(email.length === 0){
    console.log("array is empty");
    
}else{
    console.log("array have some data");
    
}
// to check object is empty
const empObj ={}

if (Object.keys(empObj).length === 0) {
    console.log("object is empty");
    
}else console.log("object have some value");

//Nullish Coaclescing (??): null defined
