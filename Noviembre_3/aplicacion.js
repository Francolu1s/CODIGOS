function Sumar(){
    var n1 = parseFloat(document.getElementById('numero1').value) ;
    var n2 = parseFloat(document.getElementById('numero2').value) ;

    var suma = n1 + n2;

    console.log("El resultado de la suma es",{suma});
    document.getElementById('resultado_suma').innerHTML=suma;

}
