// example 1: h1

// step 1: create the element
const new_h1 = document.createElement("h1");

// step 2: add attributes/properties
new_h1.textContent = "I like pizza";
new_h1.id = "my-h1";
new_h1.style.color = "tomato";
new_h1.style.textAlign = "center";

// step 3: append element to DOM
//document.body.append(new_h1);
//document.body.prepend(new_h1);
//document.getElementById("box1").append(new_h1);
const box_2 = document.getElementById("box2");
document.body.insertBefore(new_h1, box_2);

// remove the HTML element
document.body.removeChild(new_h1);