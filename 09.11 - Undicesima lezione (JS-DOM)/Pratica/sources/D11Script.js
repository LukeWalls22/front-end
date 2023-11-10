
let startbtn = document.querySelector("#startBTN");

startbtn.onclick = createTask

let tasktext = document.querySelector("input");

let listatask = document.querySelector("#tasks")


function createTask () {

    if(tasktext.value.length >2){
        let newtask = document.createElement ("p")
        newtask.innerHTML = '<span>' + tasktext.value.trim() + '</span>'  //innerHTML permette di creare del codice HTML invece che del semplice testo da assegnare al nuovo elemento creato
        newtask.addEventListener('click', function (e) {
            e.target.className= e.target.className === 'completato' ? "" : 'completato'
        })
        listatask.appendChild(newtask)
        tasktext.value = ""

        let newbutton = document.createElement ("button")
        newbutton.innerHTML = "Fatto"
        newtask.appendChild(newbutton)
        newbutton.addEventListener('click', (e) => {
            newtask.remove()
        })
    }
}


