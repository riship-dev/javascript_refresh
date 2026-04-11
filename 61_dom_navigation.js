/*
DOM navigation:
the process of navigating through the structure of an HTML document using JS

.firstElementChild
.lastElementChild
.nextElementSibling
.previousElementSibling
.parentElement
.children
*/
const print = console.log

// firstElementChild
const element_1 = document.getElementById("fruits")
const first_child = element_1.firstElementChild;
first_child.style.backgroundColor = "yellow"

// lastElementChild
const element_2 = document.getElementById("fruits")
const last_child = element_2.lastElementChild
last_child.style.backgroundColor = "red"

// nextElementSibling
const element_3 = document.getElementById("fruits")
const next_sibling = element_3.nextElementSibling
next_sibling.style.backgroundColor = "pink"

// previousElementSibling
const element_4 = document.getElementById("vegetables")
const previous_sibling = element_4.previousElementSibling
previous_sibling.style.backgroundColor = "purple"

// parentElement
last_child.parentElement.style.fontSize = "36px"

// children
next_sibling.children[0].style.fontSize = "72px"