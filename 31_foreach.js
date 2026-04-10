/*
forEach(): 
method used to iterate over elements of an array and apply a specified function (callback) to each element

array.forEach(callback)
element, index, array are provided
*/

numbers = [1, 2, 3, 4, 5]

numbers.forEach(display);

numbers.forEach(double)
console.log(numbers)

function display(number) { console.log(number) }
function double(number, index, array) { array[index] = number * 2 }