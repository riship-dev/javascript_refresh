/*
callback:
a function that is passed as an argument to another function
used to handle asynchronous operations:
    - reading a file
    - network requests
    - interacting with databases
*/

// function hello(){ setTimeout(function () { console.log("hello") }, 3000) } // pretend function takes some time to execute
// function goodbye() { console.log("goodbye") }

// hello()
// goodbye()
// // goodbye executes before hello

// resolve above using callback

hello(goodbye)

function hello(callback){
    console.log("hello") 
    callback()
}
function goodbye() { console.log("goodbye") }