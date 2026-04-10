// map(): accepts a callback and applies that function to each element of an array, then returns a new array

function double(number) { return number * 2 }

numbers = [1, 2, 3, 4, 5]
numbers = numbers.map(double)
console.log(numbers)