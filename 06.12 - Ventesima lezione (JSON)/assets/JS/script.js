let registra = document.querySelector("#registra");
let cancella = document.querySelector("#cancella");
let inputNome = document.querySelector("#inputNome");
let prevName = document.querySelector("#prevName");
let counter = document.querySelector("#counter");


let contatore = 0;

setInterval(secondFlow, 1000);

function secondFlow () {
    counter.innerText = contatore++;
    sessionStorage.setItem("elapsedTime", contatore)
}

window.addEventListener("load", e => {

    let elapsedTime = sessionStorage.getItem("elapsedTime");

    if (elapsedTime > 0) {
        contatore = elapsedTime;
    }


    let currName = localStorage.getItem("nome");

    if (currName != undefined) {
        prevName.innerText = "Nome precedente: " + currName;
    };
})

registra.addEventListener("click", e => {
    localStorage.setItem("nome", inputNome.value);
});

cancella.addEventListener("click", e => {
    localStorage.removeItem("nome");
});
