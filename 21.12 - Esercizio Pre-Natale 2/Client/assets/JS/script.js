
let url = "http://localhost:3000";
let registerUrl = "http://localhost:3000/register";
let loginUrl = "http://localhost:3000/login"

// Lista articoli

const articoli = [
    {
        title: "Metal Gear Solid 2 Substance",
        genre: "Stealth, Action",
        year: 2002,
        price: 59.98,
        cover: "https://www.covercentury.com/covers/ps2/m/Metal_Gear_Solid_2_Substance_PAL(de)-Front.jpg",
    },

    {
        title: "Metal Gear Solid 3: Snake Eater",
        genre: "Stealth, Action",
        year: 2004,
        price: 59.98,
        cover: "https://www.covercentury.com/covers/ps2/m/metal_gear_solid_3_-_snake_eater_a.jpg",
    },

    {
        title: "Ace Combat 5: The Unsung War",
        genre: "Action, Simulation",
        year: 2004,
        price: 49.98,
        cover: "https://www.covercentury.com/covers/ps2/a/ace_combat_5_-_the_unsung_war_a.jpg",
    },

    {
        title: "Zone Of The Enders: The 2nd Runner",
        genre: "Action",
        year: 2003,
        price: 49.98,
        cover: "https://www.covercentury.com/covers/ps2/z/zone_of_the_enders_-_the_2nd_runner_a.jpg",
    },

    {
        title: "",
        genre: "",
        year: "",
        price: "",
        cover: "",
    },

    {
        title: "",
        genre: "",
        year: "",
        price: "",
        cover: "",
    },

    {
        title: "",
        genre: "",
        year: "",
        price: "",
        cover: "",
    },

    {
        title: "",
        genre: "",
        year: "",
        price: "",
        cover: "",
    },

    {
        title: "",
        genre: "",
        year: "",
        price: "",
        cover: "",
    },
]


document.addEventListener('DOMContentLoaded', () => {

    let registerBtn = document.querySelector("#registerBtn");
    let loginBtn = document.querySelector("#loginBtn");

    if (registerBtn) {

        registerBtn.addEventListener("click", () => {
        
            /* e.preventDefault();
            console.log(registerBtn); */
            registrazione();
        })

        console.log(registerBtn);

    } else if (loginBtn) {

        console.log(loginBtn)
        
        

    }
    
    loginBtn.addEventListener("click", (e) => {
        e.preventDefault()
        loginUtente();
    })
    

})

function registrazione () {

    let firstName = document.querySelector("#firstName").value.trim();
    let lastName = document.querySelector("#lastName").value.trim();
    let city = document.querySelector("#city").value.trim();
    let email = document.querySelector("#Email").value.trim();
    let password = document.querySelector("#Password").value.trim();

    let nuovoUtente = {
        firstName,
        lastName,
        city,
        email,
        password
    }

    fetch(registerUrl, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(nuovoUtente)
    })
    .catch(err => console.log(err))
}


function loginUtente () {
    let email = document.querySelector("#loginEmail").value.trim();
    let password = document.querySelector("#loginPassword").value.trim();

    let loginUtente = {
        email,
        password
    }

    fetch(loginUrl, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(loginUtente)
    })
    .then(response => response.json())
    .then(json => {
        if (json.accessToken) {
            alert("Accesso riuscito!")
            console.log(json)
        }
        else {
            alert("Accesso negato!")
        }
    })
    .catch(err => console.log(err))
}