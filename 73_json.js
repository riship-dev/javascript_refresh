/*
JSON:
JS object notation
data interchange format
used for exchanging data between server and a web application
JSON files {key: value} or [value1, value2, value3]

JSON.stringify() = converts a JS object to a JSON string
JSON.parse() = converts a JSON string to a JS object
*/
const print = console.log

const names = ["Spongebob", "Patrick", "Squidward", "Sandy"]
const person = {
    "name": "spongebob",
    "age": 25,
    "is_employed": true
}
const people = [
    {
        "name": "spongebob",
        "age": 25,
        "is_employed": true
    },
    {
        "name": "patrick",
        "age": 34,
        "is_employed": false
    },
    {
        "name": "squidward",
        "age": 50,
        "is_employed": true
    },
    {
        "name": "sandy",
        "age": 24,
        "is_employed": false
    }
]

const json_names = `["Spongebob", "Patrick", "Squidward", "Sandy"]`
const json_person = `{
    "name": "spongebob",
    "age": 25,
    "is_employed": true
}`
const json_people = `[
    {
        "name": "spongebob",
        "age": 25,
        "is_employed": true
    },
    {
        "name": "patrick",
        "age": 34,
        "is_employed": false
    },
    {
        "name": "squidward",
        "age": 50,
        "is_employed": true
    },
    {
        "name": "sandy",
        "age": 24,
        "is_employed": false
    }
]`

const parsed_data = JSON.parse(json_people)
print(parsed_data)

fetch("./test/person.json")
   .then(response => response.json())
   .then(value => print(value))
   .catch(error => print(error))