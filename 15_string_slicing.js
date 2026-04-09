/*
string slicing:
creating a substring from a portion of another string
string.slice(start, end)
*/

const print = console.log

let full_name = "John Doe"
let first_name = full_name.slice(0, 4) // (inc, exc)
print(first_name)