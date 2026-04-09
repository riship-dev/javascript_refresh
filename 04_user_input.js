/*
Accept user i/p:
1 - window prompt
2 - html textbook
*/

// window prompt
// let username;
// username = window.prompt("Username?: ");
// console.log(username);

// textbook
document.getElementById("submit").onclick = function() {
    username = document.getElementById("username").value;
    console.log(username)
}