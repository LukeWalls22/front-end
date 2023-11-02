
let dayweek = 4;

if (dayweek === 1) {
    console.log('Lunedi');
}
else if (dayweek === 2) {
    console.log('Martedi');
}
else if (dayweek === 3) {
    console.log('Mercoledi');
}
else if (dayweek === 4) {
    console.log('Giovedi');
}
else if (dayweek === 5) {
    console.log('Venerdi');
}
else if (dayweek === 6) {
    console.log('Sabato');
}
else if (dayweek === 7) {
    console.log('Domenica');
}
else {
    console.log('Valore errato!!!')
}

// OPPURE è possibile usare lo SWITCH che è un processo molto più leggero da eseguire al posto di IF poiché viene processato solo il caso corretto.

switch (dayweek) {
    case 1: console.log('Oggi è Lunedi'); break;
    case 2: console.log('Oggi è Martedi'); break;
    case 3: console.log('Oggi è Mercoledi'); break;
    case 4: console.log('Oggi è Giovedi'); break;
    case 5: console.log('Oggi è Venerdi'); break;
    case 6: console.log('Oggi è Sabato'); break;
    case 7: console.log('Oggi è Domenica'); break;
    default: console.log('Valore errato!!!'); break; // Ha lo stesso valore di ELSE per l'IF.
}

// Semplificazione dei Case

let month = 1;

switch (month) {
    case 1: 
    case 2: 
    case 3: console.log ('Inverno'); break;
    // È possibile lasciare i vuoti i Case e questi prenderanno lo stesso valore del primo Case compilato (in questo caso 1, 2, e 3 saranno tutti "Inverno").
    case 4 || 5 || 6: console.log('Primavera'); break;
    // Stessi risultato ma annidando i vari casi utilizzando l'operatore OR espresso con ||.
    case 7:
    case 8:
    case 9: console.log ('Estate'); break;
    case 10 || 11 || 12: console.log('Autunno'); break;
    default: console.log('Valore errato!!!'); break;
}

// Ciclo WHILE

let num = 5;

while (num > 0) {           //Inizio del ciclo - condizione: "La variabile NUM ha valore maggiore di 0?"
    console.log("Ciao");    //Finché la condizione precedente è TRUE esegui questa operazione (stampami "Ciao")
    num -= 1;               // Dato che il ciclo, in questo caso, continuerebbe all'infinito, gli dico di decrementare il valore di NUM di 1 per ogni ciclo attraverso l'operatore "-="
}

console.log ("Fine While")  // Quando la condizione di WHILE sarà FALSE (e in questo caso la variabile NUM non sarà più maggiore di 0) il ciclo si interromperà e la console passerà all'istruzione successiva (stampare "Fine")

//Per aumentare o decrementare un valore è possibile utilizzare gli OPERATORI UNARI:
let valore = 5
valore++; // L'Operatore Unario ++ incrementa di 1 il valore indicato.
valore--; // L'Operatore Unario ++ decrementa di 1 il valore indicato.

// Nan (Not a Number) è un valore di tipo NUMBER che non è mai uguale a sé stesso.
let prova = NaN;
console.log(typeof NaN);
console.log(prova);

console.log(prova === NaN); // Restituisce FALSE perché NaN non è mai uguale a se stesso.
console.log(isNaN(prova)); // Restituisce TRUE perché "isNaN" è una funzione apposita al fine di verificare che il risultato di una funzione sia NaN.

// DOWHILE - Svolge la stessa funzione di WHILE con la differenza che il controllo viene effettuato solo alla fine del ciclo.

let count = 5;

do {                                    //Esegue quanto indicato
    console.log("Ciao " + count);       // Stampa "Ciao" + il valore di Count
    count--;                            // Decrementa il valore di Count
} while (count > 0);                    // Verifica la condizione indicata: il valore di Count è uguale a 0?
                                        // -Sì = Ricomincia il ciclo
                                        // -No = Interrompi i cicli (break)

console.log ("Fine DoWhile")

// Altro esempio

let count2 = 0;

do {
    console.log("Ciao " + count2);      // Viene stampato poiché il controllo viene fatto solo dal While più in basso
} while (count2 > 0);                   // Essendo QUI la condizione FALSE il ciclo viene interrotto

console.log ("Fine esempio 2 DoWhile");

// Esempio Password (tra While e DoWhile) - Gli esempi hanno la stessa funzione, ma sono creati con metodi diversi

// Fatto con While
/* while(true) {
    let pass = prompt ("Inserisci Password");
    if(pass === "qwerty") {
        break;
    }
}
console.log("Fine Password"); */

// Fatto con DoWhile
/* let pass2;

do {
    pass2 = prompt ("Inserisci Password2");
} while (pass2 !== "qwerty")
console.log("Fine Password2"); */


// Ciclo FOR

for(let i = 0; i < 10; i++) {          //Struttura: (valore dato, condizione da verificare, azione da compiere se verifica è TRUE) - Io ti do un valore (la variabile "v" con valore di 0)
    console.log("Ciclo di FOR " + i);
}

console.log ("Fine FOR")