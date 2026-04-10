/*
destructuring:
extract values from arrays and objects, then assign them to variables in a convenient way
[] to perform array destructuring
{} to perform object destructuring
*/
const print = console.log

// example 1: swap values of two variables
let a = 1
let b = 2;
[a, b] = [b, a]
print(a, b)

// example 2: swap 2 elements in ana array
let numbers = [1, 2, 3, 4, 5];
[numbers[0], numbers[4]] = [numbers[4], numbers[0]]
print(numbers)

// example 3: assign array elements to variables
numbers = [1, 2, 3]
const [number_1, number_2, number_3] = numbers
print(number_1, number_2, number_3)

// example 4: extract values from objects: IMPORTANT
const person_1 = {
    first_name: "John",
    last_name: "Doe",
    age: 30
}
const {first_name, last_name, age} = person_1
print(first_name, last_name, age)

// example 5: destructure in function parameters
function display({first_name, last_name, age = 100}){
    print(first_name, last_name)
    print(age)
}
display(person_1)