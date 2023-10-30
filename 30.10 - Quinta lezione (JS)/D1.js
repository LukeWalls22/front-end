/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA 

1) STRING: è un datatype che contiene dati di tipo testuale (e dunque espressi con caratteri principalmente alfabetici, anche numerici se opportunamente indicati anteponendo "\"-o Backslash prima della cifra);
2) NUMBER: a differenza del precedente contiene solo dati di tipo numerico;
3) BOOLEAN: è un datatype di interrogazione, il quale restituisce unicamente due risultati: TRUE e FALSE;
4) NULL: è un datatype che indica la condizione di variabile priva di qualsiasi valore che, però, era precedentemente stato assegnato e successivamente cancellato o annullato;
5) UNDEFINED: similmente a NULL indica una variabile priva di valore e che non ha MAI ricevuto alcuna inizializzazione precedente (risultando, quindi, da sempre senza valore).
*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var name = "Luca";

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var num1 = 12;
var num2 = 20;
var somma = num1 + num2;

console.log(somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var name = "Di Muro";

const surname = "Luca";
/* var surname = "Gallo"; Commentato per evitare l'errore "Uncaught SyntaxError: Identifier 'surname' has already been declared" nella console, che avviene perché "surname" è stato precedentemente creato come CONST-Costante e dunque non più modificabile */

console.log(name);
console.log(surname)

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(x - 4);


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var name1 = "john";
var name2 = "John";

console.log(name1 === name2);

var name2 = name2.toLowerCase();
console.log(name1 === name2);