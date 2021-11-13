
var Tripulantes=[{"Nombre":"Admin","Password":"123"},{"Nombre":"rey","Password":"456"}]
console.log(Tripulantes)


function validar_user(){

	var sw=false
	var nombre=document.getElementById('txt_user').value
	var pass=document.getElementById('txt_Password').value

		Tripulantes.forEach(function(x){
			if (x.Nombre==nombre && x.Password==pass) 
			{
				location.href='principal.html'
				sw =true
			}



			})

		if(sw==false)
		{
			alert("El usuario no existe/ Credenciales usuario y/o Password incorrectos  ")


		}

}


function Registrar()
{

location.href='registrar.html'

}