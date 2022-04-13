//alert("Debes ingresar tus datos para actualizar la información")

//objeto user con los valores que voy a pedir en el form
class User {
    constructor(nombre, email, password) {
        this.nombre = nombre;
        this.email = email;
        this.password = password;
    }
}

//array donde guardo usuarios 
let usuarios = []

//conversión a JSON para mostrar en un array dentro del storage
if(localStorage.getItem('Users')) {
    usuarios = JSON.parse(localStorage.getItem('Users'))
} else {
    localStorage.setItem('Users', JSON.stringify(usuarios))
}

let formUsers = document.getElementById('formUser')
let mensaje = document.getElementById('mensaje')
let botonUsers = document.getElementById('botonUsers')


//agrego los evento para funcionamiento del boton y form
formUsers.addEventListener('submit', (e) => {
    e.preventDefault() 
    let nombre = document.getElementById('usernameID').value //para ver los valores de lo que se ingresa en el form pide los value 
    let email = document.getElementById('emailID').value 
    let password = document.getElementById('passwordID').value 
    const user = new User(nombre, email, password)
    usuarios.unshift(user) //unshift para que quede primero el último usuario que se ingresa
    localStorage.setItem('Users', JSON.stringify(usuarios)) //muestro en el storage el array en forma de JSON
    console.log(user) 
    formUsers.reset()
    mensaje.innerHTML = 
            `
            <h3>
                ¡Bienvenido/a!
            </h3>`
}
)
//AL INGRESAR OCULTO EL FORM
function ocultarForm(){
    document.getElementById('formUser').style.display = "none"
    document.getElementById('ocultar').style.display = "none"
}