alert("Debes ingresar tus datos para actualizar la información")
class User {
    constructor(nombre, email, password) {
        this.nombre = nombre;
        this.email = email;
        this.password = password;
    }
}

let usuarios = []

if(localStorage.getItem('Users')) {
    usuarios = JSON.parse(localStorage.getItem('Users'))
} else {
    localStorage.setItem('Users', JSON.stringify(usuarios))
}

let formUsers = document.getElementById('formUser')
let botonUsers = document.getElementById('botonUsers')

formUsers.addEventListener('submit', (e) => {
    e.preventDefault()
    let nombre = document.getElementById('usernameID').value 
    let email = document.getElementById('emailID').value 
    let password = document.getElementById('passwordID').value 
    const user = new User(nombre, email, password)
    usuarios.push(user)

    localStorage.setItem('Users', JSON.stringify(usuarios))

    usuarios.push(User)
    console.log(usuarios)
    formUsers.reset()
})
