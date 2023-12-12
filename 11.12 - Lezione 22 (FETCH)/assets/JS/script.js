
// Fetch iniziale -------------------------------------------------------------------------------

let newQuery = "";
let yourQuery = newQuery;
let immagini = [];
let immagini2 = [];
let immagini3 = [];
let i = 0;


fetch( `https://api.pexels.com/v1/search?&per_page=9&query=portraits`, {
    method: 'GET',
    headers: {
        Authorization: "nQEz50BgJwwzwOkUfmdqqpyAmGNVeB3S1isOfk1eUhCDIEBfoKy9RvQk"
    }
})
.then(response => response.json())
.then(json => {
    immagini = json
    console.log(immagini.photos)
})
.catch(error => console.log(error))


fetch( `https://api.pexels.com/v1/search?&per_page=9&query=macro`, {
    method: 'GET',
    headers: {
        Authorization: "nQEz50BgJwwzwOkUfmdqqpyAmGNVeB3S1isOfk1eUhCDIEBfoKy9RvQk"
    }
})
.then(response => response.json())
.then(json => {
    immagini2 = json
    console.log(immagini2.photos)
})
.catch(error => console.log(error))


// Dichiarazioni del DOM -------------------------------------------------------------------------------

let loadBtn = document.querySelector("section .btn-primary");
let loadBtnSecondary = document.querySelector("section .btn-secondary");
let input = document.querySelector(".input-group input");
let searchBtn = document.querySelector(".input-group button");
let hideBtn = document.querySelectorAll(".hide");
let risultato = document.querySelector(".col-md-4")

// Interno card

let card = document.querySelectorAll(".card")
let svg = document.querySelectorAll(".card svg")
let rect = document.querySelectorAll(".card rect");
let text = document.querySelectorAll(".card text");
let cardTitle = document.querySelectorAll(".card .card-title")
let cardText = document.querySelectorAll(".card .card-text")
let idFoto = document.querySelectorAll(".card small")


// Creazione nodi

// Eventi -------------------------------------------------------------------------------

loadBtn.addEventListener('click', e => {
    createGallery();
})

loadBtnSecondary.addEventListener('click', e => {
    createGallery();
})

hideBtn.forEach((btn)=>{
        btn.addEventListener('click', ()=>{
            btn.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
        })
    })  // Nascondi card

searchBtn.addEventListener('click', () => {
    newQuery = input.value;
    console.log(newQuery);
    /* createGallery(); */
})


// Funzioni -------------------------------------------------------------------------------

function createGallery () {

    /* fetch( `https://api.pexels.com/v1/search?&per_page=9&query=cats`, {
        method: 'GET',
        headers: {
            Authorization: "nQEz50BgJwwzwOkUfmdqqpyAmGNVeB3S1isOfk1eUhCDIEBfoKy9RvQk"
        }
    })
        .then(response => response.json())
        .then(json => immagini = json)
        .catch(error => console.log(error)) */



    text.forEach(ele => {
        ele.remove()
    })                      //Rimuovi tutti i Thumbnail nelle schede

    rect.forEach(ele => {
        ele.remove()
    })                      //Rimuovi tutti i Rettangoli grigi nelle schede

    svg.forEach(ele => {
        ele.remove()
    })                      //Rimuovi tutti gli SVG nelle schede

    if (event.target === loadBtn) {
    card.forEach(ele => {
        let img = document.createElement("img");
        img.src = immagini.photos[i].src.large;
        img.alt = immagini.photos[i].alt;
        img.classList.add("img-fluid");
        ele.prepend(img);
        idFoto[i].innerText = immagini.photos[i].id;
        i++;
    })}                      //Aggiunge le immagini delle API al BUTTON 1 Blu

    else if (event.target === loadBtnSecondary) {
        card.forEach(ele => {
            let img = document.createElement("img");
            img.src = immagini2.photos[i].src.large;
            img.alt = immagini2.photos[i].alt;
            img.classList.add("img-fluid");
            ele.prepend(img);
            idFoto[i].innerText = immagini2.photos[i].id;
            i++;
        })}                  //Aggiunge le immagini delle API al BUTTON 2 Grigio

    /* else {
    fetch( `https://api.pexels.com/v1/search?&per_page=9&query=${yourQuery}`, {
        method: 'GET',
        headers: {
            Authorization: "nQEz50BgJwwzwOkUfmdqqpyAmGNVeB3S1isOfk1eUhCDIEBfoKy9RvQk"
        }
    })
    .then(response => response.json())
    .then(json => {
        immagini3 = json
        console.log(immagini3.photos)
    })
    .catch(error => console.log(error))

    card.forEach(ele => {
        let img = document.createElement("img");
        img.src = immagini3.photos[i].src.large;
        img.alt = immagini3.photos[i].alt;
        img.classList.add("img-fluid");
        ele.prepend(img);
        i++;
    })} */
}