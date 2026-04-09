/*
logical operators:
used to to combine or manipulate boolean values [true or false]
AND = &&
OR = ||
NOT = !
*/
const print = console.log

let a = 1 < 2 || 3 > 4
let b = 1 < 2 && 3 > 4
let c = !(1 < 2) // !(true) = false

print(a, b, c)