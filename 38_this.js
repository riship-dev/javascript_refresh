/*
this:
reference to the object where THIS is used
th object depends on the immediate context
person.name = this.name

like self in python. no need to pass in function
*/
const print = console.log

const person_1 = {
    first_name: "john",
    last_name: "doe",
    age: 30,
    hello() { print(`hello my name is ${this.first_name}`) } // do not use arrow functions while using this
}

print(person_1.first_name)
person_1.hello()