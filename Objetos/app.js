const valorNombre= document.querySelector(".main__nombre");
const valorEdad= document.querySelector(".main__edad");
const valorCiudad= document.querySelector(".main__ciudad");
const actionButton= document.querySelector(".main__registrar");

let arreglo = [];

actionButton.addEventListener("click", activar)

function activar(){
    const nombre = valorNombre.value;
    const edad = valorEdad.value;
    const ciudad = valorCiudad.value;
    const Usuario = new Usuarios (nombre, edad, ciudad);
    arreglo.push(Usuario);
    console.log(usuario);
}

class Usuarios {
    constructor (valorNombre,valorEdad, valorCiudad){
        this.valorNombre=valorNombre;
        this.valorEdad=valorEdad;
        this.valorCiudad=valorCiudad;                
    }
    mostrarInfo(){
        console.log('Su nombre es ${this.valorNombre} y su edad es ${this.valorEdad} y vive en ${this.valorCiudad}');
    }
}