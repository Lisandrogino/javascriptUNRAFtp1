
/*function leerNumero() {

    let numero = parseInt(prompt("ingresa un nro"));

    while(isNaN(numero) || numero < 1 || numero > 100){

        console.log("fuera de rango")

        numero = parseInt(prompt("ingresa un nro, otra vez"));

        
    }

    console.log("ingresaste " + numero);
    
   
    
}

let nuevonumero = leerNumero();*/

function comprobarValor(numeroUsuario, numeroCorrecto) {

    const nroGanador = 22;
    numeroCorrecto = nroGanador

    let ingresarNro = parseInt(prompt("Ingresa un Nro"))
    numeroUsuario = ingresarNro

    if(numeroUsuario === numeroCorrecto){
        console.log("0 - los nros son iguales")    
    }else if (numeroUsuario > numeroCorrecto) {
        console.log("1 - el Nro. de Usuario es mayor al Nro. Correcto")
        
    }else{ console.log("-1 - Nro. de Usuario es mayor al Nro. Correcto")}

}

let comprobar = comprobarValor()





 
  








