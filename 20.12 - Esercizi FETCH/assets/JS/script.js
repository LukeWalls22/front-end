
const url = "http://localhost:3000/users"

// FUNZIONE PER RICHIAMARE IL DB ---------------------------------

const leggiDB = () => {

fetch(url)
.then(response => response.json())
.then(json => console.log(json))
.catch(err => console.log(err));

}

leggiDB()

//----------------------------------------------------------------

// CODICE MILENA

const urlRegister = 'http://localhost:3000/register';
const urlLogin = 'http://localhost:3000/login';

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.href.includes('register')) {
        register()
    } else if (window.location.href.includes('login')) {
        login()
    }
})

function register() {
    document.querySelector('#register-btn').addEventListener('click', () => {
        fetch(urlRegister, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: document.querySelector('#exampleInputEmail1').value,
                password: document.querySelector('#exampleInputPassword1').value
            })
        }).then(response => response.json())
            .then(json => console.log(json))
            .catch(err => console.log(err))
    })
}

// CODICE DANIELE

function login() {
    document.querySelector('#login-btn').addEventListener('click', () => {
        fetch(urlLogin, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: document.querySelector('#exampleInputEmail1').value,
                password: document.querySelector('#exampleInputPassword1').value
            })
        }).then(response => response.json())
            .then(json => {console.log(json)
            if (json.accessToken) {
                alert('Login effettuato')
            } else {
                alert('Credenziali errate')
            }
            })
            .catch(err => console.log(err))
    })
}