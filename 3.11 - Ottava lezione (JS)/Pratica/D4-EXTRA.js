// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numrnd = [Math.floor(Math.random()*15), Math.floor(Math.random()*20), Math.floor(Math.random()*6)];

console.log(numrnd);

function checkArray (x) {
    let arrsum = [];

    for (i=0; i<x.length; i++) {
        if (x[i] <= 5) {
            console.log("L'elemento dell'Array " + x[i] + " è minore o uguale a 5");
        }
        else {
            console.log("L'elemento dell'Array " + x[i] + " è maggiore di 5");
            arrsum.push(x[i]);
        }
    }

    let somma = 0;

    for (i=0; i<arrsum.length; i++) {
        somma += arrsum[i];
    }

    console.log("La somma dei numeri maggiori a 5 è: " + somma);

}

checkArray(numrnd);

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const shoppingCart = [
    {
        name: "Joystick",
        id: Math.floor(Math.random()*226),
        price: 69,
        quantity: Math.floor(Math.random()*51),
    },
    {
        name: "Headset",
        id: Math.floor(Math.random()*226),
        price: 105,
        quantity: Math.floor(Math.random()*51),
    },
    {
        name: "Console",
        id: Math.floor(Math.random()*226),
        price: 499,
        quantity: Math.floor(Math.random()*51),
    }
]

function shoppingCartTotal (x) {

    let totale = 0;

    for (i=0; i<x.length; i++) {
        if (x[i].quantity > 0) {
            totale += x[i].price;
        }
    }

    console.log ("Il totale dovuto al negozio è di €" + totale);
}

shoppingCartTotal(shoppingCart);

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function addToShoppingCart (x) {

    shoppingCart.push(
        {
            name: "USB-C Cable",
            id: Math.floor(Math.random()*226),
            price: 19,
            quantity: Math.floor(Math.random()*51),
        }
    )

    console.log ("Con l'ultimo oggetto inserito il tuo Carrello ora contiene: " + shoppingCart.length + " prodotti")
    
    let totale = 0;

        for (i=0; i<x.length; i++) {
            if (x[i].quantity > 0) {
                totale += x[i].price;
            }
        }

    console.log ("Il nuovo totale dovuto al negozio è di €" + totale);

}

addToShoppingCart (shoppingCart);

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function maxShoppingCart (x) {
    let prdcaro = "";
    let costomax = 0;

    for (i=0; i<x.length; i++) {
        if (x[i].price > costomax) {
            prdcaro = x[i].name;
            costomax = x[i].price;
        }
    }

    console.log ("Il prodotto più costoso del carrello è \"" + prdcaro + "\" che costa €" + costomax);
}

maxShoppingCart(shoppingCart);


/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function latestShoppingCart (x) {

    let ultimo = x[x.length-1]

    console.log (ultimo);
}

latestShoppingCart(shoppingCart);


/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function loopUntil (x) {
    if (x > 9) {
        console.log ("Errore, il numero inserito è troppo grande, inserisci un numero compreso tra 0 e 9");
    }

    let counter = 0;
    let iterations = 0;

    while (counter<3) {
        let numcas = Math.floor(Math.random()*9);
        iterations++;
        if (numcas>x) {
            counter++;
        }
    }

    console.log("Ci sono voluti " + iterations + " cicli di loop per ottenere " + counter + " volte un numero più grande di " + x);
}

loopUntil(3);

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const tobeAvg = [22, "Luca", 28, "Emanuela", 8, 2, 6, true]

function average (x) {

    let avgsum = 0;
    let numocc = 0;

    for (i=0; i<x.length; i++) {
        if (typeof x[i] === typeof avgsum) {
        avgsum += x[i]
        numocc ++;
        }
    }
    let avg = avgsum / numocc;

    console.log("La media aritmetica dei numeri contenuti nell'Array fornito è: " + avg);

}

average(tobeAvg);

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const parole = ["Ciao", "amici", "di", "EPICODE"]

function longest (x) {
    let lnstword = "";
    let wordltts = 0;

    for (i=0; i<x.length; i++) {
        if (x[i].length > wordltts) {
            lnstword = x[i];
            wordltts = x[i].length;
        }
    }

    console.log("La stringa più lunga dell'Array fornito è \"" + lnstword + "\" con una lunghezza di " + wordltts + " caratteri.");

}

longest(parole);

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let emailContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."

function spamdetect (emailContent) {

    let verspam = emailContent.search("SPAM");
    let verscam = emailContent.search("SCAM");

    if (verscam >= 0 || verspam >= 0) {
        return false;
    }
    else {
        return true;
    }
}

let risultato = spamdetect(emailContent);
console.log(risultato);

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// NON FUNZIONA, DA CHIARIRE ------------------------------------------------------------------------------------------------------------------

let x = 5;
let y = x-1;

console.log(y);

const datapers = new Date("22 June 2013 15:30:00");

function daysgone (x) {
    const oggi = new Date();

    let diffmill = Date.parse(oggi) - Date.parse(x);
    let giornipass = ((diffmill / 1000) / 60) / 1440;

    console.log = (diffmill);

}

daysgone (datapers);

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
