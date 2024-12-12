//Write a function that takes an array (a) as argument. Remove the first 3 elements of 'a'. Return the result
const a = [5, 4, 3, 2, 1, 0]

console.log(a.slice(3));

//2 Write a function that takes an array (a) as argument. Extract the last 3 elements of 'a'. Return the resulting array
console.log(a.slice(-3));

//3 Write a function that takes an array (a) as argument. Extract the first 3 elements of a. Return the resulting array
console.log(a.slice(0, 3));
console.log(a.length);
//4 Write a function that takes an array (a) and a value (b) as argument. The function should remove all elements equal to 'b' from the array. Return the filtered array.
// function myFunction(a, b)
// {
// return a.filter(e=> e!== b)
// }
// console.log(myFunction([1,2,3], 2));

//5 Write a function that takes an array of numbers as argument. Return the number of negative values in the array.
function myFunction(a) {
    return a.filter(e => e < 0).length
}

console.log(myFunction([1, -2, 2, -4]));

//6 Write a function that takes an array of numbers as argument. It should return the sum of the numbers.
function myFunction2(a) {

    const sum = a.reduce((a, b) => (a + b), 0)
    return sum / a.length
}
console.log(myFunction2([10, 100, 40]))

//7 Write a function that takes an array of strings as argument. Return the longest string.

function longestString(arr) {

    return arr.reduce((longest, current) => current.length > longest.length ? current : longest, '')
}
console.log(longestString(['help', 'me']));

// Write a function that takes an array as argument. It should return true if all elements in the array are equal. It should return false otherwise.
function myFunction3(arr) {

    return  arr.every(element => element === arr[0])
}
console.log(myFunction3(['test', 'test', 'test']));
