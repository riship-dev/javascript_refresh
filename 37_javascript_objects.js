/*
object:
a collection of related properties and/or methods
can represent real world objects (people, products, places)
object = {
    key: value
    function_name: function(){}
    function_name: () => {}
}
*/
const print = console.log

const person_1 = {
    first_name: "john",
    last_name: "doe",
    age: 30,
    hello: () => print("hello")
}

print(person_1.first_name)
person_1.hello()