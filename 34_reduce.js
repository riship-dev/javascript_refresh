// .reduce(): reduce elements of an array to a single value

const prices = [5, 10 , 15, 20, 25]

const total = prices.reduce(sum)

function sum(accumulator, element){ return accumulator + element }

console.log(total)