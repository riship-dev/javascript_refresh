/*
= assignment op
== comparison op
=== strict equality op (datatype same for true)
!= inequality op
!== strict inequality op  
*/

const print = console.log
let x = 10
let y = "10"
print(x == y) // true
print(x === y) // false
print(x != y) // false
print(x !== y) // true