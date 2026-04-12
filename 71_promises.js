/*
promises:
an object that manages asynchronous operations
wrap a promise object around {asynchronous code}
"i promise to return a value"
PENDING -> RESOLVED or REJECTED
new Promise((resolve, reject) => {asynchronous code})
*/
const print = console.log

// do these chores in order:
// 1. walk the dog
// 2. clean the kitchen
// 3. take out the trash

function walk_dog(){
    return new Promise((resolve, reject) => { 
        setTimeout(() => { 
            const dog_walked = true
            if (dog_walked) resolve("You walked the dog")
            else reject("You didn't walk the dog")
        }, 1500)
    })
}
function clean_kitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchen_cleaned = true
            if (kitchen_cleaned) resolve("You cleaned the kitchen")
            else reject("You have not cleaned the kitchen") 
        }, 2500)
    })
}
function trash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            const trash_taken = true
            if (trash_taken) resolve("You took trash out")
            else reject("You have not taken the trash out")
        }, 1000)
    })
}

walk_dog().then(value => {
    print(value)
    return clean_kitchen()
}) .then(value => {
    print(value)
    return trash()
}).then((value) => {
    print(value)
    print("You finished all chores")
}).catch(error => print(error));