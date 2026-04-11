/*
synchronous:
executes line by line consecutively in a sequential manner
code that waits for an operation to complete'

asynchronous:
allows multiple operations to be performed concurrently without waiting
does not block the execution flow amd allows the program to continue
[I/O operations, network requests, fetching data]
handled with: callbacks, promises, async/await
*/
const print = console.log

// callbacks
function func1(callback){
    setTimeout(
        () => {
            print("Task 1")
            callback()
        }, 
        3000
    )
}
function func2(){
    print("Task 2")
    print("Task 3")
}

func1(func2)