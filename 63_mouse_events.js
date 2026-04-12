/*
eventListener:
listen for specific events to create interactive web pages
event: click, mouseover, mouseout
.addEventListener(event, callback)
*/

const my_box = document.getElementById("myBox");

function change_color(event){
    event.target.style.backgroundColor = "tomato";   
}

my_box.addEventListener("click", change_color)