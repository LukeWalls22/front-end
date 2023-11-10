
// Metodo 1 - "onlick" iniettato nell'HTML
function funclick() {
    console.log("Click btn")
}

// Metodo 2 - "onclick" nel JS
let btn2 = document.querySelector('#btn2')
btn2.onclick = funclick;   //Dopo "funcilck" non devono essere messe le parentesi tonde affinché la funzione non sia eseguita al solo caricamento della pagina
console.log(btn2)

// Metodo 3 - Aggiungo un eventlistener e gli dico di eseguire una funzione
let btn3 = document.querySelector('#btn3')
btn3.addEventListener('click', funclick);  // ('quale evento devo trovare', funzione)

/* btn3.addEventListener('click' () => console.log('Click btn')) */  // Alternativa al Metodo 3 con funzione anonima - (quando avviene l'evento "click" tu esegui una funzione (fa niente quale) che mi ritorni "console.log("Click btn")"
let btn = document.querySelector('form button')
btn.addEventListener('click', function () {     //Quando c'è il click avvia questa funzione (controllo dei dati)
    let name = document.querySelector('form input[name="nome"]')
    if(name.value.trim().lenght >= 2) {
        console.log(name.value + " OK")
    }
    else {
        console.log(name.value + " Non corretto")
    }
})
