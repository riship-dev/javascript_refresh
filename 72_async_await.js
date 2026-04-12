/*
async: makes a function return a promise
await: makes an async function wait for promise

allows to write asynchronous code in synchronous manner
async doesn't have resolve or reject parameters
everything after await is placed in an event queue
*/
const print = console.log

async function walk_dog(){
    return new Promise((resolve, reject) => { 
        setTimeout(() => { 
            const dog_walked = true
            if (dog_walked) resolve("You walked the dog")
            else reject("You didn't walk the dog")
        }, 1500)
    })
}
async function clean_kitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchen_cleaned = false
            if (kitchen_cleaned) resolve("You cleaned the kitchen")
            else reject("You have not cleaned the kitchen") 
        }, 2500)
    })
}
async function trash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            const trash_taken = true
            if (trash_taken) resolve("You took trash out")
            else reject("You have not taken the trash out")
        }, 1000)
    })
}

async function chores() {
    try {
        const walk_dog_result = await walk_dog()
        print(walk_dog_result)
        
        const clean_kitchen_result = await clean_kitchen()
        print(clean_kitchen_result)

        const trash_result = await trash()
        print(trash_result)

        print("You completed all chores")
    } catch (error) {
        print(error)
    }
}

chores()