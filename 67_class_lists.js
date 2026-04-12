/*
classList:
element property in JS used to interact with an elements list of classes (CSS classes)
allows you to make reusable classes for many elements across your webpage

add()
remove()
toggle(Remove if present, Add if not)
replace(oldCLass, newClass)
contains()
*/

const my_button = document.getElementById("button")

my_button.classList.add("enabled")
my_button.classList.remove("enabled")

let buttons = document.querySelectorAll(".my-buttons")
buttons.forEach(button => {
    button.classList.add("enabled");
})

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover");
    })
})
buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover");
    })
})

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.classList.replace("enabled", "disabled")
    })
})