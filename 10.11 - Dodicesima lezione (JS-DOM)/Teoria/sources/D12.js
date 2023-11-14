
let now = new Date();
let getYear = now.getFullYear();
let getMonth = now.getMonth() +1;
let lastDayDate = new Date(getYear, getMonth, 0)

let lastDayOfTheMonth = lastDayDate.getDate()

let divcalendar = document.querySelector("#calendar");
let h2 = document.querySelector("h1 + h2");
h2.innerText = nomeMese(now.getMonth())

let appointments = [];


creaCalendario()
creaArrayAppuntamenti()



function creaCalendario () {
    for(let i=1; i<=lastDayOfTheMonth; i++){
        const dayCellNode = document.createElement("div");
        dayCellNode.className = "day";
        dayCellNode.addEventListener('click', (e) => {
            dayCellNode.classList.add("selected");
            let currentDayAppoint = appointments[i-1]
            console.log(currentDayAppoint) // Bloccato qua perché non viene creata la matrice
        })
        const day = document.createElement("h3");
        day.innerText = i;
        let today = now.getDate();
        if(i==today){
            day.className = "color-epic";
        }
        divcalendar.appendChild(dayCellNode);
        dayCellNode.appendChild(day);
    }
}

function nomeMese (m) {
    switch (m) {
        case 1: return "Gennaio";
        case 2: return "Febbraio";
        case 3: return "Marzo";
        case 4: return "Aprile";
        case 5: return "Maggio";
        case 6: return "Giugno";
        case 7: return "Luglio";
        case 8: return "Agosto";
        case 9: return "Settembre";
        case 10: return "Ottobre";
        case 11: return "Novembre";
        case 12: return "Dicembre";
    }
}

function creaArrayAppuntamenti() {
    for(let i=0; i<lastDayOfTheMonth, i++;) {
        appointments[i] = [] //Non crea la matrice
    }
}