/*
DOM:
document object model
object{} that represents the page you see in web browser
provides you with an API to interact with it
web browser constructs DOM when it loads an HTML document
structures all elements in a tree like representation
JavaScript can access the DOM dynamically
change the content, structure and style of the web page
*/
const print = console.log

document.title = "my website 2"
//document.body.style.backgroundColor = "black"

const username = "john_doe"
const welcome_message = document.getElementById("welcome-msg")

welcome_message.textContent += username === "" ? `Guest` : username