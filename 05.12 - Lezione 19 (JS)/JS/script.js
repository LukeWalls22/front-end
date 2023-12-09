

// ESERCIZIO 1 -------------------------------------------------------------------

class User {
    constructor (FirstName, LastName, Age, Location) {

    this.FirstName = FirstName;
    this.LastName = LastName;
    this.Age = Age;
    this.Location = Location;

    }

    confronto(utente) {
        if (this.Age > utente.Age) {
            return this.FirstName + " è più grande di " + utente.FirstName;
        }
        else if (this.Age < utente.Age) {
            return this.FirstName + " è più giovane di " + utente.FirstName;
        }
        else {
            return this.FirstName + " ha la stessa età di " + utente.FirstName;
        }
    }
}


let peppeeno89 = new User ("Giuseppe", "Esposito", 34, "Napoli");

console.log(peppeeno89);

let rytaCapy = new User ("Rita", "Caputo", 32, "Posillipo");

let frankMatto = new User ("Francesco", "Matano", 39, "Milano");

console.log(frankMatto.confronto(peppeeno89));

console.log("-----------------------------------------------");


// ESERCIZIO 2 -------------------------------------------------------------------


class Pet {
    constructor (petName, ownerName, species, breed) {

        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;

    }

    sameOwner (pet) {
        if (this.ownerName === pet.ownerName) {
            return this.petName + " e " + pet.petName + " hanno lo stesso padrone: " + pet.ownerName;
        }
        else {
            return this.petName + " e " + pet.petName + " NON hanno lo stesso padrone.";
        }
    }

}

// Manipolazione DOM


let submit = document.querySelector("#submit");
let input = document.querySelector("#petNameInput");
let elenco = document.querySelector("#elenco");
let prova = document.querySelector("#prova");

submit.addEventListener('click', (c) => {
    c.preventDefault();
    prova.innerText = input.value;
    input.value = "";
})

console.dir(elenco);
console.dir(input);



