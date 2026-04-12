/*
eventListener:
listen for specific events to create interactive web pages
event: keydown, keyup, keypress-avoid
.addEventListener(event, callback)
*/

document.addEventListener("keydown", event => {
    console.log(event.key)
});

document.addEventListener("keyup", event => {
    console.log(event.key)
});