// --------------------------espresiones regulares
var correo_patron = /^([\da-z A-Z\.-]+)@([\da-z A-Z\.-]+)\.([a-z A-Z\.]{2,30})$/;
var clave_patron = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,20}/;
//-------------------------- expresiones regulares

var datosArray = [];
console.log(datosArray);

function registar_Usuario() {
    var nombre = document.getElementById('txt_name').value;
    var apellido = document.getElementById('txt_lastname').value;
    var correo = document.getElementById('txt_email').value;
    var fechaNacimiento = document.getElementById('Fecha_Nacimiento').value;
    var password = document.getElementById('txt_password').value;

    var rta_correo = correo_patron.test(correo);
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
                                    "contraseña": password
                                };
                                console.log(persona);

                                datosArray.push(persona);
                                alert('Registro realizado correctamente')
                                limpiarFormulario();
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

function limpiarFormulario() {
    document.getElementById("formulario").reset();
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

    var rta_correo = correo_patron.test(correo);
    var rta_clave = clave_patron.test(password);

    if (correo != '') {
        if (rta_correo) {
            console.log('Correo Correcto');
            if (password != '') {
                if (correo == 'franco.luis@live.com' && password == 'Klave$123') {
                    location.href = 'https://sso.upb.edu.co/authenticationendpoint/login.do?commonAuthCallerPath=%2Fsamlsso&forceAuth=false&passiveAuth=false&tenantDomain=carbon.super&sessionDataKey=42c8e0a2-3f5e-411e-8958-a0de86d62661&relyingParty=https%3A%2F%2F105c05bd-2461-421a-88e8-ec1d4021ec2d.tenants.brightspace.com%2FsamlLogin&type=samlsso&sp=d2l&isSaaSApp=false&authenticators=BasicAuthenticator:LOCAL';
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