//llamo elementos del DOM
let horarios = document.getElementById("horarios");
let botones = document.getElementsByTagName("input");
let contador = 0;
let dias = document.getElementsByClassName("dias")

//agrego eventos (submit) para guardar las reservas 
horarios.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(botones)
})

//creo un array para guardar las reservas
let arrayReservas = []

for (const btn of botones) { //recorro los botones
    btn.addEventListener('click', () => { //agrego un evento a los botones
        console.log(btn.id + btn.value) //mostras el valor en consola
        arrayReservas.unshift(btn.id + btn.value) //muestro array en el storage
        localStorage.setItem('Reservas', JSON.stringify(arrayReservas))
        mensaje.innerHTML = 
            `
            <h4 class="listaReservasCSS">
                Lista de reservas: ${(arrayReservas)}
            </h4>`
    })
}