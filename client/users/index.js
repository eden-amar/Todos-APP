const img = document.createElement('img');
const div = document.createElement('div');
const inputUserName = document.createElement('input');
const inputPassword = document.createElement('input');
const title = document.createElement('h1');
const loginButton = document.createElement('button');

img.src = './img/todosApp.png';
title.textContent = 'TODOS APP';
loginButton.textContent = 'LOGIN';


inputUserName.placeholder = 'USER NAME';
inputPassword.placeholder = 'PASSWORD';
const body = document.querySelector('body');

div.append(inputUserName, inputPassword, loginButton);
body.append(img, title, div);

loginButton.addEventListener("click", login);
function login() {
    const userName = inputUserName;
    const password = inputPassword;


    const response = fetch(`http://localhost:3000/api/login`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ userName: userName.value, password: password.value })
    })

    response.then((res) => {
        if(res.status === 200) {
            open('../todos/index.html')
        }
        console.log(res.status);
    })
}


// clock


function getTime() {
    let time = new Date();
    let clockHours = time.getUTCHours() + 2;

    time.setHours(clockHours);
    return time;
}

function showClock() {
    let clockDiv = document.querySelector('.clock');
    clockDiv.textContent = getTime().toLocaleTimeString();
    ;
}

function tick() {
    showClock();
    setTimeout(tick, 1000);
}

tick();