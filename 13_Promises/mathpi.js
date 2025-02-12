
// console.log(Math.PI);
// Math.PI = 5

// console.log(Math.PI);

const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

//console.log(descripter);

const chai ={
    name : "ginger chai",
    price: 250,
    isAvailable: true,
    orderchai: function(){
        console.log("chai ni bani");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name",{
    writable: false,
    enumerable: true
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for(let [key, values] of Object.entries(chai)){
    if (typeof values !== 'function') {
        console.log(`${key} ${values}`);
    }
    
}


