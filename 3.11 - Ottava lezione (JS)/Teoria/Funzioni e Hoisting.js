/* 
// Dichiarazione di Funzioni

function nomefunzione(parametri) {      //Creazione della Funzione
 //blocco di istruzioni
 return val
}

 nomefunzione(parametri)                //Invocazione della funzione creata 

*/

// Funzioni Espressione - La differenza è che la Funzione è creata all'interno di una variabile

/* let function nomefunzione(parametri) {
    //blocco di istruzioni
    return val
   }

 */


function stampastringa() {
    console.log ("Hello World!");
}

stampastringa();

//------------------------------------------------------------------

function somma() {
    let sum = 25+5;
    console.log (sum);
}

somma();

//------------------------------------------------------------------

function addizione (x, y) {     //Funzione addizione con valori da poter assegnare quando richiamerò la funzione stessa
    let sum1 = x + y;
    console.log (sum1);         //Così facendo il risultato può essere solo stampato e non posso utilizzarlo o riassegnarlo ad altre variabili
}

addizione(3, 9);                //Addizione di numeri
addizione(15, 5);
addizione("Ciao ", "Mondo");    //Concatenazione di stringhe

//------------------------------------------------------------------

function addizione1 (x, y) {
    let sum2 = x + y;
    return sum2;                 //A differenza di prima "Return" mi permette di avere il risultato dell'addizione come valore da poter riutilizzare/assegnare
}

let val = addizione1 (5, 5);     //Qui assegno il valore restituito dall'addizione alla variabile "val"
console.log(val);                //Per stampare il valore stamperò, quindi, la variabile "val"

//------------------------------------------------------------------

function func () {               //Lasciando le parentesi tonde vuote io permetto di utilizzare infiniti valori all'interno della funzione
    console.log("Parametri di una funzione: " + arguments.length);      //"Arguments" è il contenuto delle parentesi tonde della Funzione - Richiamando la proprietà "length" ottengo il valore di quanti valori sono assegnati ad Arguments
}

func(5, 8, 8, 9, "ciao");        //Assegno ad "Arguments" della funzione "func" 5 valori (di varia natura)

//------------------------------------------------------------------

// Scope di una variabile

let scope = "Sono una variabile Globale";               // Global scope - È una variabile visibile/utilizzabile ovunque

{
    let scope = "Sono una variabile di Blocco";         // Block scope - È una variabile visibile/utilizzabile solo all'interno del blocco
}

function fscope () {
    let scope = "Sono una variabile di Function";       // Function scope - È una variabile visibile/utilizzabile solo all'interno della funzione
}

//------------------------------------------------------------------

// Metodi della stringa

let stringa = "Sono una stringa, una bella stringa, una stringa senza cifre";

console.log(stringa.indexOf("una"));                    // "Indexof" cerca e indica la posizione, nella stringa selezionata, dei caratteri richiesti nelle parentesi, indicando (nel caso di più risultati) la prima occorrenza.
console.log(stringa.lastIndexOf("una"));         // Cerca e indica l'ultima ricorrenza dei caratteri presenti nelle parentesi.
console.log(stringa.search("una"));
console.log(stringa.length);
console.log(stringa.slice(5,18));                       // Cancella e restituisce i caratteri corrispondenti a partire dall'indice 5 al 17 (poiché l'ultimo, 18, non è incluso nel taglio.
console.log(stringa.slice(-5));                         // Cancella e restituisce a partire dall'ultimo carattere.
console.log(stringa.replace('a', 'X'));                 // La prima ricorrenza dei caratteri contenuti tra i primi apici viene sostituita con i caratteri contenuti nei secondi apici.
console.log(stringa.toLowerCase());                     // Trasforma tutti i caratteri in minuscolo.
console.log(stringa.toUpperCase());                     // Trasforma tutti i caratteri in MAIUSC.
console.log(stringa.trim());                            // Elimina tutti gli spazi vuoti prima/dopo la stringa.
console.log(stringa.charAt(10));                        // Prende il carattere indicato a quell'indice.
console.log(stringa.split(" "));                         // Divide la stringa in array; se tra le parentesi si inserisce un numero di indice, verrà creato un gruppo di lettere, se le parentesi sono vuote crea un array contentente tutte le lettere della stringa.

//------------------------------------------------------------------

//Metodi di Math

let numCas = Math.random ()
console.log(numCas);
console.log(Math.floor(numCas));                        // Arrotonda per difetto.
console.log(Math.ceil(numCas));                         // Arrotonda per eccesso.
console.log(Math.round(numCas));                        // 
console.log(Math.max(8,9,19,32,-100,-1));
console.log(Math.min(8,9,19,32,-100,-1));

//------------------------------------------------------------------

// Date

let now = new Date();
let bdate = new Date()

console.log(now);