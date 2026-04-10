// spread operator: ... allows an iterable such as an array or string to be expanded into separate elements (unpacks the elements)
const print = console.log

let numbers = [1, 2, 3, 4, 5]
let maximum = Math.max(...numbers)
let minimum = Math.min(...numbers)
print(minimum)
print(maximum)

let username = "john_doe"
let letters = [...username].join("-") // array.join("") -> string
print(letters)