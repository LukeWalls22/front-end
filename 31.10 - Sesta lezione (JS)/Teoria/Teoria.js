
let oggetto = {
    nome: 'Aldo',
    cognome: 'Baglio',
    eta: 60,
    citta: 'Milano',
}

oggetto.nome= "Giovanni";

console.log(oggetto)

const newoggetto= oggetto; // Crea una copia ma ne copia anche il riferimento alla porzione di memoria, quindi qualsiasi modifica fatta a uno dei due oggetti (originale o copiato) modificherà entrambi.

const copiaoggetto= Object.assign({}, oggetto); // FORMA CONTRATTA -  Crea una copia dell'oggetto ma assegnando una nuova porzione di memoria, rendendo quindi i due indipendenti.

//const copiaoggetto2; // FORMA ESTESA - Crea una copia dell'oggetto ma assegnando una nuova porzione di memoria, rendendo quindi i due indipendenti.
//Object.assign(copiaoggetto2, oggetto);

copiaoggetto.nome= "Giacomo";
//copiaoggetto2.nome= "Giacomino";

console.log(copiaoggetto.nome)
//console.log(copiaoggetto2.nome)

// Array - contenitore di dati - è un Oggetto

let animali = ['Gatto', 'Cane', 'Tartaruga']; //Negli array/indici si parte a contare da 0, quindi "Gatto" ha posizione 0, "Cane" ha posizione 1, "Targaruga" ha posizione 2.
let numeri = [22, 8, 92];
let cond = [true, false, false];
let utenti = [oggetto, copiaoggetto];
let mix = ['Alfredo', 54, false, oggetto];

console.log(animali);
console.log(animali[0]) //Chiedo alla Console di stampare solo la posizione 0 dell'Array "Animali" che corrisponde a "Gatto".

animali[2] = "Delfino"; //Modifica di un valore dell'Array, quello in posizione 2.
animali[3] = "Aquila"; //Aggiunge un valore ad un Array poiché ho aggiunto una nuova posizione.

console.log(animali[2]);
console.log(animali[3]);

console.log(animali.length) //Mi dice la lunghezza dell'Array.

animali.push("Colomba"); //Aggiunge un valore all'Array mettendolo in coda.
animali.unshift("Serpente"); //Aggiunge un valore all'Array mettendolo in testa.

animali.pop(); // Elimina e restituisce l'elemento in coda in un Array (Per restituire si intende che sebbene lo abbia tolto dall'Array, io posso ancora richiamare quel valore fuori dall'Array).
animali.shift(); // Elimina e restituisce l'elemento in testa in un Array.

animali.splice(1); // Elimina e restituisce l'elemento corrispondente alla posizione nell'Array indicata.
animali.splice(1, 3) // Elimina e restituisce più elementi a partire dalla posizione 1 alla posizione 3. (Posizione di partenza, Posizione di fine)
animali.splice(1,2, "Colibri") // Elimina e restituisce più elementi a partire dalla posizione 1 alla posizione 2 E aggiunge tra gli spazi ora vuoti i nuovi valori dati (in questo caso "Colibri").
animali.splice(1,0, "Anatra") // Aggiunge un nuovo elemento tra gli spazi selezionati.

animali.sort() // Riordina gli elementi degli Array in ordine alfabetico o numerico.
animali.reverse() // Inverte ordine elementi degli Array.

// STRUTTURE CONDIZIONALI - IF
// Ogni elemento che ha un valore, seppur vuoto, restituisce TRUE: es. True | {} | [] |.
// Ogni elemento che ha un valore negativo restituisce FALSE: es. False | 0 | '' | null | undefined | NaN.

let numero = prompt('Inserisci un numero');

if(numero > 10) {
    console.log("Il numero è maggiore di 10");
} 
else if (numero == 10) {
    console.log ("Il numero è uguale a 10");
}
else {
    console.log("Il numero è minore di 10");
}
