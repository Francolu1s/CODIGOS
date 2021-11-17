// --------------------------espresiones regulares
var correo_patron = /^([\da-z A-Z\.-]+)@([\da-z A-Z\.-]+)\.([a-z A-Z\.]{2,30})$/;
var clave_patron = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,20}/;
//-------------------------- expresiones regulares

let memArray = JSON.parse(localStorage.getItem("Registro")) || [];
var datosArray =[];
console.log(datosArray);

function registar_Usuario() {
    var nombre = document.getElementById('txt_name').value;
    var apellido = document.getElementById('txt_lastname').value;
    var correo = document.getElementById('txt_email').value;
    var fechaNacimiento = document.getElementById('Fecha_Nacimiento').value;
    var password = document.getElementById('txt_password').value;

    var rta_correo = correo_patron.test(correo);            //verificacion expresiones regulares.
    var rta_clave = clave_patron.test(password);

    if (nombre != '') {
        if (apellido != '') {
            if (correo != '') {
                if (rta_correo) {
                    console.log('correo correcto');
                    if (fechaNacimiento != '') {
                        if (password != '') {
                            if (rta_clave) {                            
                                
                                var persona = {
                                    "name": nombre,
                                    "lastname": apellido,
                                    "email": correo,
                                    "fechaNa": fechaNacimiento,
                                    "clave": password
                                };
                                console.log(persona);
                                datosArray.push(persona);
                                let memArray = JSON.stringify(datosArray);                                
                                localStorage.setItem("Registro", memArray);
                                alert ('Registro realizado correctamente');
                                document.getElementById("formulario").reset();                                                       
                                console.log(datosArray);                        

                            } else {
                                alert('Contraseña debe contener Mayusculas, minusculas, numeros y caracter especial')
                            }
                        } else {
                            alert('Contraseña no puede estar en blanco');
                        }
                    } else {
                        alert('Fecha de Nacimiento no puede estar en blanco');
                    }
                } else {
                    alert('correo No valido');
                }
            } else {
                alert('Correo no puede estar en blanco');
            }
        } else {
            alert('Apellidos no puede estar en blanco');
        }
    } else {
        alert('Nombres no puede estar en blanco');
    }
}

//   ------------------------Ir al incico
function ir_inicio() {
    location.href = 'Principal.html';
}
//   ------------------------Ir al incico


//   ------------------------Ir al registro
function ir_registro() {
    location.href = 'Registrar.html';
}
//   ------------------------Ir al registro


// -------------------------Ir a inciar sesion
function ir_inciar_sesion() {
    location.href = 'LOGIN.html';
}
// -------------------------Ir a inciar sesion

function comprobar_Datos() {
    var correo = document.getElementById('txt_email').value;
    var password = document.getElementById('txt_password').value;
    var bandera = false;
    var rta_correo = correo_patron.test(correo);
    var rta_clave = clave_patron.test(password);

    if (correo != '') {
        if (rta_correo) {
            console.log('Correo Correcto');
            if (password != '') {
                datosArray = memArray;
                console.log(datosArray);
                datosArray.forEach(function(x){
                    if (correo == x.email && password == x.clave) {                                            
                        bandera = true;                                                                      
                    } else{
                        console.log('Datos Incorrectos');
                    }
                } )
                    if (bandera == true) {
                        location.href = 'https://www.misiontic2022.gov.co/portal/';
                    } else {
                        alert('Correo o contraseña Incorrecto');
                    }                
            } else {
                alert('Contraseña no puede estar en blanco');
            }
        } else {
            alert('Correo no valido');
        }
    } else {
        alert('Correo no puede estar en blanco');
    }
}
