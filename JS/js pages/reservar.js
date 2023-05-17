let horarios = document.getElementById("horarios");
let botones = document.getElementsByTagName("input");
let contador = 0;
let dias = document.getElementById("dias")

horarios.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(botones)
})

for (const btn of botones) { //recorres la coleccion de inputs/botones
    btn.addEventListener('click', () => {
        console.log(btn.id + btn.value) //mostras el valor en consola
    }
)}


let arrayReservas = []

if(localStorage.getItem('Reservas')) {
    arrayReservas = JSON.parse(localStorage.getItem('Reservas'))
} else {
    localStorage.setItem('Reservas', JSON.stringify(arrayReservas)
)}
