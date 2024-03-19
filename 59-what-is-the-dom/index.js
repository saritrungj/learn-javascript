document.title = 'My Website';
// document.body.style.backgroundColor = 'hsl(0, 0%, 15%)';

console.dir(document);

const userName = "Sarit Rungjapoh";
const welcomeMsg = document.getElementById('welcome-msg');

welcomeMsg.textContent += userName === "" ? ` Guest` : userName;