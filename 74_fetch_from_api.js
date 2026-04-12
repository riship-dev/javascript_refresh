/*
fetch:
function used for making http requests to fetch resources
JSON style data, images, files
simplifies asynchronous data fetching in JS
used for interacting with APIs to retrieve and send data asynchronously over the web
fetch(url, {options})
*/
const print = console.log

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => response.json())
    .then(data => print(data.name, data.weight))
    .catch(error => print(error))