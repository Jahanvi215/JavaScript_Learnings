console.log("Hello filter, map, reduce");

/*--------------------Filter function---------------------- */
//const myNums =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums =myNums.filter((num) =>{
//  return num > 6
// }) // 1st way 

// const newNums = []
// myNums.forEach((num) =>{
//     if (num >4) {
//         newNums.push(num)
//     }
// }) // 2nd way

// console.log(newNums);


const books =[
    {
        title: 'Book 1',
        genre:'Friction',
        publish: 1981,
        edition:2008,
    },
    {
        title: 'Book 2',
        genre:'Non-Friction',
        publish: 1984,
        edition:2005,
    },
    {
        title: 'Book 3',
        genre:'History',
        publish: 1980,
        edition:2007,
    },
    {
        title: 'Book 4',
        genre:'SciFi',
        publish: 1990,
        edition:2010,
    },
    {
        title: 'Book 5',
        genre:'Biopic',
        publish: 1995,
        edition:2012,
    },
    {
        title: 'Book 7',
        genre:'History',
        publish: 1988,
        edition:2003,
    },
    {
        title: 'Book 8',
        genre:'SciFi',
        publish: 2001,
        edition:2009,
    },
    {
        title: 'Book 9',
        genre:'SciFi',
        publish: 2001,
        edition:2014,
    },
]

const userBooks = books.filter((bk) =>{
    // return bk.genre === 'History'
    return bk.publish >= 1995 && bk.genre === 'Biopic'
})

//console.log(userBooks);

/*-------------------Map function------------------ */
const myNums =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.map((num) =>{
//      return num +10
// })
// const newNums =[]
// myNums.forEach((num)=>{
//    if (num) {
//     newNums.push(num+10)
//    }
// })

// const newNums  = myNums
//                 .map((num) => num *10)
//                 .map((num) => num +1)
//                 .filter((num) => num >= 41)
// console.log(newNums);

/*-------------------Reduce Function----------------------- */
const arr =[1,2,3,4]

const initialValue=0

const sumOfArray = arr.reduce((acc, cur) => acc + cur, initialValue)

// console.log("sum of array is",sumOfArray);

const shoppingCart = [
    {
        itemName:"js course",
        price:2999,
    },
    {
        itemName:"py course",
        price:999,
    },
    {
        itemName:"Web dev course",
        price:1999,
    },
    {
        itemName:"mobile dev course",
        price:3899,
    },
    {
        itemName:"py course",
        price:599,
    },
]

const totalCost = shoppingCart.reduce((acc,item) => (acc + item.price), 0)
console.log(totalCost);

