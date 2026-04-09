/*
if statements:
if a condition is true, execute some code
if not, do something else
*/

let age = 33

if(age < 0 || age > 100) {
    console.log("Invalid")
} else if(age < 18){
    console.log("No")
} else {
    console.log("Yes")
}