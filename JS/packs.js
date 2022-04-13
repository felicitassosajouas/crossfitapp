//llamo elementos del DOM 
let pack = document.getElementsByClassName('h2')
let botonComprar = document.getElementsByTagName('button')

//array donde voy a cargar la compra que se realice
let arrayCompras = []

//aviso de la compra realizada
let mensaje = document.getElementById("mensaje")

//recorro los botones y agrego el evento correspondiente
for (const btn of botonComprar) { 
    btn.addEventListener('click', () => { 

        console.log(btn.value) //muetro el click en la consola
        arrayCompras.unshift(btn.value) //unshift para ver primero la última reserva cargada
        localStorage.setItem('Última compra', JSON.stringify(arrayCompras)) //muestro el array en storage

        mensaje.innerHTML = //agrego el mensaje al HTML
            `
                    <h4 class="mensajePacks">
                        Se acreditaron: ${btn.className} en tu cuenta
                    </h4>`
        
})
}

let Reservas = document.getElementById('divReservas')

fetch('../../JSON/packs.json')
.then(promesa => promesa.json())
.then(data => {
    console.log(data)
    data.forEach((reserva, indice) => {
        divReservas.innerHTML += `
        <div class="card" id="producto${indice}" style="width: 18rem;">
        <div class="card-body">
            <p class="card-title">${reserva.pack}</p>
            <p class="card-text"> Cantidad de clases: ${reserva.cantidad}</p>
            <p class="card-text"> Precio: $ ${reserva.precio}</p>
            </div>
        </div>
        `
    });
})