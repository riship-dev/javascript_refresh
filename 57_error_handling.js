/*
error:
an object that is created to represent a problem that occurs
occur often with usr input or establishing a connection

try{}: encloses code that might potentially cause an error
catch{}: catch and handle any thrown errors  from try
finally{}: 
always executes
used mostly for clean up
ex. close files, close connections, release resources
*/

const print = console.log

print("Start")

try {
    print(x)
} catch(error) {
    console.error(error)
} finally {
    // close files
    // close connections
    // release resources
    print("Always executes")
}

print("End")