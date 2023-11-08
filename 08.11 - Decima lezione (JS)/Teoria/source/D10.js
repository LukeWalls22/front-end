
// DOM = Document Object Model

// BOM = Browser Object Model - Una serie di oggetti che permettono di modellare il browser

console.log(window)

console.log(window.document)
console.dir(window.document)

// Selezione elemento tramite ID

let h1 = window.document.getElementById("titolo");

console.log(h1)
console.dir(h1)

h1.innertext = "Testo modificato tramite JavaScript"
h1.style.textDecoration = "underline"
h1.style.textAlign = "center"

console.log(h1.innertext)

// Selezione di un nodo HTML tramite classe
// getElementsByClassName restituisce un HTMLCollection contenente tutti gli elementi del tipo richiesto

let p = document.getElementsByClassName('txt');     // Essendo Window l'oggetto generale non c'è bisogno di inserirlo poiché sottinteso
console.log(p)     //Vado a richiamare TUTTI gli P, non solo uno, poiché ho indicato una CLASSE(p)


let a = document.getElementsByTagName('a');
console.log(a)

// Metodo alternativo di selezione di noto specifico

let p1 = document.querySelector(".txt") // Questa forma mi consente di selezionare la prima ricorrenza di quella classe
console.log(p1);

let h1alt = document.querySelector("#titolo")  // È anche possibile richiamare un elemento tramite ID con questa stessa modalità

let aall = document.querySelectorAll("a")     // Seleziona tutti gli elementi di quel tipo e restituisce un HTMLCollection (al pari del metodo precedente)

let a2 = document.querySelector("a[title='link2']")     // Seleziona un "a" il quale ha una proprietà di nome "title" che corrisponde a "link2"
console.log(a2)

let innerP = document.querySelector("div p")
innerP.style.color = "green"


// Creare nuovi nodi HTML tramite JavaScript
// createElement crea un nuovo nodo HTML

let titolo = document.createElement ('h2')
titolo.innerText = "H2 creato con JS"
titolo.style.textTransform = "uppercase"

console.log(titolo)

let testo = document.createElement('p')
testo.innerText = "Paragrafo creato con JS"
testo.style.textAlign = "center"

console.log(testo)


// Selezione di un Nodo radice presente nella pagina HTML

let section = document.querySelector('section');
// Appende un nuovo nodo ad una radice
section.appendChild(titolo);
section.appendChild(testo);


// Navigazione del DOM

console.log(section)
console.dir(section)

let main = section.parentNode   //Identifico un oggetto in base al figlio (mi richiamo Main attraverso il figlio "section")

console.log(main)

let body = section.parentNode.parentNode  // Richiamo Body che è genitore di Main che è genitore di Section



