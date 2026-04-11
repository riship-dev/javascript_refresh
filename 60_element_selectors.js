/*
element selectors:
methods used to target and manipulate HTML elements
they allow you to select one or multiple HTML elements from the DOM (Document Object Model)

1. document.getElementById(): ELEMENT OR NULL
2. document.getElementsClassName(): HTML COLLECTION
3. document.getElementsByTagName(): HTML COLLECTION
4. document.querySelector(): ELEMENT OR NULL
5. document.querySelectorA1l(): NODELIST
*/

// by id
const my_heading = document.getElementById("my-heading")
my_heading.style.backgroundColor = "yellow"

// by tag name
const fruits = document.getElementsByClassName("fruits")
//fruits.style.backgroundColor = "red" // wont work
for (let fruit of fruits) fruit.style.backgroundColor = "yellow"
Array.from(fruits).forEach(fruit => fruit.style.backgroundColor = "orange")

// by tag name
const h4s = document.getElementsByTagName("h4")
h4s[0].style.backgroundColor = "purple"

// query selector
const element = document.querySelector(".fruits") // selects first element with fruits class
element.style.backgroundColor = "pink"

// query selector all
const foods = document.querySelectorAll(".fruits")
foods[0].style.backgroundColor = "grey"