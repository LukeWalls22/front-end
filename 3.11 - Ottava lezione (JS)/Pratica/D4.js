/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area (l1, l2) {
    let times = l1*l2;
    return times;
}

let areaRett = area(5, 10);
console.log(areaRett);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum (x,y) {
    if (x === y) {
        let csum = (x + y)*3;
        return csum;
    }
    else {
        let sum = x + y;
        return sum;
    }
}

let sommastrana = crazySum(5, 5);   // Stesso valore
console.log (sommastrana);

let sommastrana2 = crazySum(5, 10);     // Valore differente
console.log (sommastrana2);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff (x) {

    let diff = Math.abs(x - 19);
    if (x > 19) {
        return diff*3;
    }
    else {
        return diff;
    }
}

let diffstrana = crazyDiff(5);   // Valore minore di 19
console.log (diffstrana);

let diffstrana2 = crazyDiff(20);     // Valore maggiore di 19
console.log (diffstrana2);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary (n) {

    if (n >= 20 && n <= 100 || n === 400) {
        return true
    }
    else {
        return false
    }
}

let bnd = boundary(5);
console.log(bnd);

let bnd2 = boundary(70);
console.log(bnd2);

let bnd3 = boundary(400);
console.log(bnd3);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify (x) {

    if (x.startsWith("EPICODE")) {
        return x;
    }

    return "EPICODE " + x;
}

let epicode = epify("Ciao");
console.log(epicode);

let epicode2 = epify("EPICODE ti aiuta a diventare FullStack");
console.log(epicode2);


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7 (x) {
    if (x % 3 === 0) {
        return x + " è un multiplo di 3"
    }
    else if (x % 7 === 0) {
        return x + " è un multiplo di 7"
    }
    return x + " non è multiplo ne di 3 ne di 7"
}

let rest = check3and7(12);
console.log(rest);

let rest2 = check3and7(14);
console.log(rest2);

let rest3 = check3and7(16);
console.log(rest3);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString (x) {
    let rev = x.split("").reverse().join("")
    return rev
}

let prova = reverseString("EPICODE");
console.log(prova);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst (x) {

    let splitUp = x.split(" ");

    for (let i = 0; i < splitUp.length; i++) {
        splitUp[i] = splitUp[i].charAt(0).toUpperCase() + splitUp[i].slice(1);
    }
    
    splitUp = splitUp.join(" ")

    console.log (splitUp);
}

upperFirst("ciao come stai")


/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString (x) {
    let strarr= x.split("");
    strarr.shift();
    strarr.pop();
    strarr = strarr.join("");

    console.log (strarr);
}

cutString("Ciao io studio con EPICODE")

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom (n) {
    n = [Math.floor(Math.random()*11), Math.floor(Math.random()*11), Math.floor(Math.random()*11), Math.floor(Math.random()*11)];
    console.log (n);
}

giveMeRandom(5);
