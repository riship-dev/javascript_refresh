/*
type conversion:
change the datatype of a value to another
(strings, numbers, booleans)
*/

let age = 12
console.log(age, typeof age)
age = String(age) // type conversion
console.log(age, typeof age)

let food = "pizza"
console.log(food, typeof food)
food = Number(food) // food = NaN
console.log(food, typeof food)

let is_student = "0"
console.log(is_student, typeof is_student)
is_student = Boolean(is_student)
console.log(is_student, typeof is_student)