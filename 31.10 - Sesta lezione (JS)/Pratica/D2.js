/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const num1 = 15;
const num2 = 22;
let bigger;

if (num1 > num2) {
  bigger = num1;
}
else {
  bigger = num2;
}

console.log ("Tra " + num1 + " e " + num2 + " il numero più grande è: " + bigger);

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const eq1 = 6;

const equal = (eq1 == 5) ? 'equal' : 'not equal';

console.log(equal);

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const divid = 15;

const mod = (divid % 5 == 0) ? 'divisibile per 5' : 'NON divisibile per 5';

console.log (mod);

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const cifra1 = 5;
const cifra2 = 3;

if (cifra1 == 8) {
  console.log ("Il primo numero fornito è uguale a 8");
}
else if (cifra2 == 8) {
  console.log ("Il secondo numero fornito è uguale a 8");
}
else if (cifra1+cifra2 == 8) {
  console.log ("Nessun numero fornito è uguale a 8 ma la loro somma Si");
}
else if (cifra1-cifra2 == 8) {
  console.log ("Nessun numero fornito è uguale a 8 ma la loro differenza Si");
}
else {
  console.log ("Nessun numero fornito ne una loro somma o differenza è pari a 8");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const Joystick = {
  color: "blue",
  wireless: "true",
  price: 49
}

const Headset = {
  color: "white",
  wireless: "false",
  price: 39
}

let Tot = Joystick.price + Headset.price;

let totalShoppingCart = (Tot >= 50) ? Tot + " - Spese di spedizione gratuite" : Tot+10 + " - Incluse spese di spedizione NON gratuite";

console.log(totalShoppingCart);

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let disc = ((Joystick.price*80)/100) + ((Headset.price*80)/100);

let totalShoppingCartDisc = (disc >= 50) ? disc + " - Spese di spedizione gratuite" : disc+10 + " - Incluse spese di spedizione NON gratuite";

console.log(totalShoppingCartDisc);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let var1 = 34;
let var2 = 104;
let var3 = 88;

if (var1 > var2 && var1 > var3) {
  if (var2 > var3) {
    console.log ("L'ordine corretto è: "+ var1 + "," + var2 + "," + var3);
  }
  else{
    console.log ("L'ordine corretto è: "+ var1 + "," + var3 + "," + var2);
  }
}
else if (var2 > var1 && var2 > var3) {
  if (var1 > var3) {
    console.log ("L'ordine corretto è: "+ var2 + "," + var1 + "," + var3);
  }
  else{
    console.log ("L'ordine corretto è: "+ var2 + "," + var3 + "," + var1);
  }
}
else {
  if (var1 > var2) {
    console.log ("L'ordine corretto è: "+ var3 + "," + var1 + "," + var2);
  }
  else{
    console.log ("L'ordine corretto è: "+ var3 + "," + var2 + "," + var1);
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const tipo1 = 22;
const tipo2 = "Zucca";
const tipo3 = false;

console.log ("Tipo1, ovvero 22, è: " + typeof tipo1);
console.log ("Tipo2, ovvero \"Zucca\", è: " + typeof tipo2);
console.log ("Tipo3, ovvero \"false\", è: " + typeof tipo3);

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numver = 22;

let ver = (numver % 2 == 0) ? "Pari" : "Dispari";

console.log ("Il numero fornito " + numver + " è: " + ver);


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 7
if (val < 5) {
  console.log("Meno di 5");
  } else if (val < 10) {
    console.log("Meno di 10");
  } else {
    console.log("Uguale a 10 o maggiore");
  }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

me.city = 'Toronto';

console.log (me.city)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName;

console.log (me.lastName);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

me.skills.pop();

console.log (me.skills)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let provArray = [];

provArray.push (1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log (provArray);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

provArray.splice (9);
provArray[9] = 100;

console.log (provArray);
