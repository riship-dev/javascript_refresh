// array: a variable like structure that can hold more than one value
const print = console.log

let numbers = [10, 20, 30, 40, 50]
print(numbers)

numbers.push("hello")
print(numbers)
print(numbers.pop()) // also returns removed value
print(numbers)

// access by index
print(numbers[1])

// shifting
numbers.shift() // left shift
print(numbers)
numbers.unshift() // right shift aka insert value in front
print(numbers)

print(numbers.length) // len of array
print(numbers.indexOf(20)) // -1 if not found