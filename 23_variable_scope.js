// variable scope: where a variable is recognized and accessible (local vs global)

const print = console.log

let x = 1
xyz() // 3
print(x) // 1
abc() // 1

function abc(){
    print(x)
}
function xyz(){
    let x = 3
    print(x)
}