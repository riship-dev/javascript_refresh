/*
rest parameters:
(...rest) allows a function work with a variable number of arguments by bundling them into an array
*/

function add(...numbers) {
    let result = 0
    for(let i = 0; i < numbers.length; i++) result += numbers[i]
    return result
}

console.log(add(10, 20, 30))
console.log(add(10, 20, 30, 40 ,50 ,60))