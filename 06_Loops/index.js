console.log("Hello loops");

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if (element === 5) {
//         console.log("this is  is in array");
        
//     }

//     console.log(element);
    
    
// }
/**Print the tables */
// for (let i = 1; i <= 10; i++) {
//     console.log(`---Table of ${i}---- `);
//     for (let j = 1; j <= 10; j++) {
//         //console.log(`Inner loop ${j} and iner value ${i}`);
//         console.log(`${i} * ${j} = ${i*j}`);
        
//     }   
// }

//loop on array

// const myArray = ["Jahanvi", "Alka","Ruhi","Shizuka"]

// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(element);
    
// }

//break and continue

// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         console.log(`The five is dedected ${i}`);
//         break
//     }
//    console.log(`The value of i is ${i}`);
   
    
// }
/*---------------While loop------------------------ */
let i = 0
// while (i<=10) {
//     console.log(`value of i ${i}`);
//     i= i+2
// }

let arr = ["flash", "Batman", "superman"]
while (i< arr.length) {
    //console.log(`Array are ${arr[i]}`);
    i++
}

/*---------------Do-While loop------------------------ */

let score = 1

do {
   // console.log(`The score is ${score}`);
    score++
} while (score <=5);

/*---------------For of loop------------------------ */

const arr2 = [1, 2, 3, 4, 5]

for (const i of arr2) {
    //console.log(i);
    
}
const greetings ="Good Morning"
for (const greet of greetings) {
    if (greet === ' ') {
        continue
    }
    // console.log(`each letter ${greet}`);
    
}
/*---------------Map------------------------ */

const map = new Map()
map.set('IN', 'INDIA')
map.set('USA', 'United States of America')
map.set('Pa', 'Paris')

for (const [key, value] of map) {
    //console.log(key, ':-', value);
    
}

const myObject ={
    'game1':'PUBG',
    'game2': 'Free Fire'
}

// for (const [key, value] of myObject) {
//     console.log(key, value);
    
// } this will not work for ojects

for (const key in myObject) {
    //console.log(`${key} ":-" ${myObject[key]}`);
    
}

const programming =["js","rb","cpp", "py"]
// for (const key in programming) {
//     console.log(`${key} :- ${programming[key]}`);
    
// }
// programming.forEach( function(val) {
// console.log(val);

// }) //1

// programming.forEach((val) =>{
//     console.log(val);
// }) //2

// function printMe(val){
//     console.log(val);
    
// }
// programming.forEach(printMe);

// programming.forEach((item, idex, arr) => {
//     console.log(item, idex, arr);
    
// });


/**-------------------------------------------------------- */
const codingArr =[
    {
        langName:"JavaScript",
        langFile: 'js'
    },
    {
        langName:"Java",
        langFile: 'java'
    },
    {
        langName:"Python",
        langFile: 'py'
    },
]

codingArr.forEach((item)=>{
    console.log(`${item.langName} :- ${item.langFile}`);
    
})