/*
NodeList:
static collection of HTML elements by id, class or element
can be created using querySelectorAll()
similar to an array but no map, filter and reduce methods
NodeList wont update to automatically reflect changes
*/

let buttons = document.querySelectorAll(".buttons")
console.log(buttons)

// add HTML/CSS properties
buttons.forEach(button => {
    button.style.backgroundColor = "green"
    button.textContent += " :)" 
})

// click event lsitener
buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.style.backgroundColor = "tomato"
    })
})

// add an element
const new_button = document.createElement("button")
new_button.textContent = "button 5"
new_button.classList = "buttons"
document.body.appendChild(new_button)

console.log(buttons)
buttons = document.querySelectorAll(".buttons")
console.log(buttons)

// remove an element
buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove()
        buttons = querySelectorAll(".buttons")
        console.log(buttons)
    })
})