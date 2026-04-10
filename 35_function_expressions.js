/*
function declaration: define a reusable block of code that performs a specific task
function expressions: a way to define functions as values or variables
*/

const hello = function (){ console.log("hello") }

setTimeout(hello, 3000)
setTimeout(function (){ console.log("hello") }, 3000) // same as above 