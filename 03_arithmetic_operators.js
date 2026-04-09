/*
Arithmetic operators:
operands (values, variables, etc.)
operators (+ - * /)

operator precedence:
() > exponents > /*% > +-
left to right if same precedence
right to left only for exponents
*/

let students = 30

// Augmented assignment operators
students += 20; // students = students + 20
students -= 10;
students++; // students = students + 1
console.log(students)