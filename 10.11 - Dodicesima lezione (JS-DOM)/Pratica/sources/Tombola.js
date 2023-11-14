
const numeritab = []
for(let i=1; i<77; i++) {
    numeritab.push({numero: i,})
}

let tabellone = document.querySelector("#tabellone");
let estrattore = document.querySelector("#estrattore");
let resetdiv = document.querySelector("#reset");

createCells();

let estraibtn = document.createElement("button");
estraibtn.innerText = "Estrai un numero";
estrattore.appendChild(estraibtn);

function createCells () {
    for(let i=0; i<numeritab.length; i++){
        let numCell = document.createElement("tr");
        numCell.innerText = i+1;
        numCell.className = "numero" + i+1;
        tabellone.appendChild(numCell);
    }
}

estraibtn.addEventListener('click', function () {
    let rndnum = Math.round(Math.random()*76);
    
    console.log(rndnum);
})
