/*
closures:
a function defined inside of another function
the inner function has access to the variables and scope of the outer function
allow for private variables and state maintenance
used frequently in js frameworks: React, Vue, Angular  
*/

function outer(){
    let message = "hello"
    function inner() { console.log(message) }
    inner()
}

outer()

function createCounter(){
    let count = 0;
    function increment (){
        count++;
        console.log(`Count increased to ${count}`);
    }
    return {increment};
}

const counter = createCounter();
// state of variable maintained
counter.increment();
counter.increment();
counter.increment();