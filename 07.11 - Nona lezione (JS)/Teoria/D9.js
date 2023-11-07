
// Spread operator

/* ...nomeVar  */// Serve per prendere solo i valori di un oggetto complesso, viene utilizzato per fare una copia di Array

let arr = [5, 7, 9]
console.log(...arr);

let arr2 = [...arr];
console.log(arr2);

let arr3 = [...arr, 2, 3]; // Dato che vengono estratti i soli dati dall'Array originale, l'Array di destinazione sarà completamente indipendente e modificabile a piacimento
console.log(arr3)

arr3.shift();       // Prova di modifica, elimino il valore in testa (5)
console.log(arr3)   // Il valore in testa è stato eliminato
console.log(arr)    // Qui il valore di testa (5) esiste ancora

const obj = {
    name: "Mario",
    surname: "Rossi",
    city: "Milano",
    age: 45
}

console.log(obj);

const obj2 = {
    ...obj,         // Copio i valori
    city: "Napoli"  // Li modifico immediatamente
}

console.log(obj2)


// Rest parameter -- Null'altro è che lasciare l'arguments di una funzione vuoto affinché possa essere riempito con qualsiasi valore e quantità di valori
// function func(...paarameter) {}

function func () {
    console.log(arguments)
    console.log(arguments.length)
}

function func2 (...args) {
    console.log (args)
    console.log (args.length)
}

func (9,5,7,8)
func2 (3,4,5,6)

// Destructuring operator

let oggetto = {
    name: "Pippo",
    lastname: "Paperino",
    city: "Roma",
    age: 45
}

let {name, lastname, city, age} = oggetto;  // Estrae una proprietà da un oggetto
console.log(city)

let arrei = [5,6,7];    //È possibile destrutturare anche un array (che è un oggetto)

let [x,y,z] = arrei;

console.log(x,y,z);

// Template Literals
// ALT + 96 = Backtick `

let str = `Ciao sono ${oggetto.name} ${oggetto.lastname}, ho ${oggetto.age} e vivo a ${oggetto.city}`;
console.log(str);

// Metodi String

str.startsWith('parola');    //Per verificare se la stringa inizia con i dati caratteri
str.endsWith('parola');      //Per verificare se la stringa finisce con i dati caratteri
str.includes('parola');      //Per verificare se la stringa contiene i dati caratteri

// Array Splice - Elimina degli elementi e li ritorna (al pari di Pop e Unshift)

let arrayprova = [15,65,29,89,16,23,35,29,79,86,32];
arrayprova.slice(2);        //Elimina dall'indice fornito in poi
arrayprova.slice(2, 3);     //Elimina a partire dall'indice 2 (prima cifra inserita) e continua per i 3 successivi (seconda cifra inserita);

let = arrayprova.slice(4, 2);   //I valori tagliati con lo Slice (a partire dall'indice 4 elimina 2 valori) e li assegna altrove;


// Array Method Advanced

let nuovoArray = ["Uno", 'Due', 'Tre', 'Quattro', 'Cinque']

// ForIn - Alternativa al ciclo FOR per ciclare i valori di un Array - CICLA le CHIAVI (negli ARRAY sono gli indici [0,1,2,3,4] - negli OGGETTI sono i nomi delle proprietà [name, surname, city, age]) 

for (const key in nuovoArray) {
    console.log(key)
    console.log(nuovoArray[key])
    console.log(key + ": " + nuovoArray[key])
}

for (const key in oggetto) {
    console.log(oggetto[key]);  // Cicla tutti i valori degli oggetti contenuti nell'Array specificato
}

for (const key in obj) {
    console.log(key)
}

// ForOf - Alternativa al ciclo FOR per ciclare i valori di un Array - CICLA i VALORI (negli ARRAY sono i valori ['uno', 'due', 'tre'] - negli OGGETTI sono i nomi delle proprietà [Mario, Rossi, Milano, 45])

for (const value of nuovoArray) {
    console.log(value)
}

// ForEach 

function callfunc (val) {
    console.log(val)
}

// callfunc("Ciao")

//nuovoArray.forEach()    // Richiede una Function Callback - Richiamo di una funzione

nuovoArray.forEach(callfunc);

