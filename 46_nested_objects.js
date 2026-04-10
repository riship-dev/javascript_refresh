/*
nested objects:
objects inside of other objects
allows you to represent more complex data structures
child object enclosed by parent object

Person{Address{}, ContactInfo{}}
*/

const person = {
    full_name: "John Doe",
    age: 30,
    is_student: true,
    hobbies: [1, 2, 3, 5],
    address: {
        street: "6th",
        city: "Chennai",
        country: "India"
    }
}

console.log(person.full_name)
console.log(person.hobbies[2])
console.log(person.address.country)