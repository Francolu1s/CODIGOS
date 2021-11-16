var mayuscula = /^[A-Z]*$/;
var minuscula = /^[a-z]*$/;
var numerico = /^[0-9]*$/;

var caracter = /^[a-z A-Z 0-9]*$/;

var correo_patron=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

function validar(){
    var nombre = document.getElementById('Nombre').value;    
    var respuesta = mayuscula.test(nombre);

    var apellido = document.getElementById('Apellido').value;
    var respuesta2 = correo_patron.test(apellido);

    var edad = document.getElementById("Edad").value;
    var respuesta3 = numerico.test(edad);

    if (! respuesta2) {
        console.log('No se permite caracteres especiales');
        alert('No se permite caracteres especiales');
    } else {
        console.log('respuesta correcto');
    }

    // if (!respuesta){
    //     console.log('Solo valores en Mayusculas');
    //     alert('Solo valores en Mayusculas')
    // }
    // else{
    //     console.log('Respuesta Correcto');
    // }

    // if (! respuesta2) {
    //     console.log("Solo valores en minuscula");
    //     alert("Solo valores en minuscula");
    //     }
    //     else{
    //         console.log('Respuesta2 Correcto');
    //     } 
        
    // if (! respuesta3) {
    //     console.log('Deben ser valores numericos');        
    //     alert('Deben ser valores numericos')
    // }
    //     else{
    //         console.log('Respuesta3 Correcto');
    //     }

    console.log("retorno test :" + mayuscula.test(nombre));
}
    
