// .filter(): create a new array by filtering out elements

let numbers = [1, 2, 3, 4, 5]

function is_even(number) { return number % 2 == 0 }

console.log(numbers.filter(is_even))