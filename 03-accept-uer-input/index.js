/*
let username;
username = prompt(`What's your username?`)
*/

let username;
document.getElementById('mySubmit').onclick = () => {
    username = document.getElementById('myText').value;
    document.getElementById('myH1').textContent = `Hello ${username}`
}