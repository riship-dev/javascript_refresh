/*
sort():
method used to sort elements of an array in place
sorts elements as strings in lexicographic order, not alphabetical
lexicographic = (alphabet + numbers + symbols) as strings 
*/

alphabet = ["z", "x", "y"]
alphabet.sort()
console.log(alphabet)

numbers = [1, 2, 3, 10]
numbers.sort((a, b) => a - b) // sort numbers
console.log(numbers)
numbers.sort((a, b) => b - a) // reverse
console.log(numbers)

const people = [
    {name: "Spongebob", age: 30, gpa: 3.0},
    {name: "Patrick", age: 37, gpa: 1.5},
    {name: "Squidward", age: 51, gpa: 2.5},
    {name: "Sandy", age: 27, gpa: 4.0}
]

//people.sort((a, b) => a.age, b.age);
//people.sort((a, b) => a.gpa, b.gpa);
people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);