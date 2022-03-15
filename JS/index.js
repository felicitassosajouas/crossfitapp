class usuario{
    constructor(usuario, edad, pack) {
        this.usuario = usuario;
        this.edad   = edad;
        this.pack  = pack;
    }
    abonoUsado(){
        console.log("el pack que usa es de " + this.pack);
    }
}

alert("Ingrese sus datos")
const usuario2 = new usuario(
    prompt("Ingrese su usuario"),
    parseInt(prompt("Ingrese su edad")),
    parseInt(prompt("Ingrese el número de clases de su pack")),
)
console.log(usuario2)

const usuario3 = new usuario("usuario3", 25, 18)
const usuario4 = new usuario("usuario4", 22, 18)


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i=0; i<=array.length; i++) { 
    
    if(i < 10) {
        console.log("i es menor a 10")

    }
    console.log(i)
}