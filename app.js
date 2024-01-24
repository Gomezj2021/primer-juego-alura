let nummeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados= [];
let numeroMaximo = 10;

console.log(nummeroSecreto);

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento); //esta parte del codigo reduce l
    elementoHTML.innerHTML = texto;
    return;
    
}

function verificarIntento(){
let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

if (numeroDeUsuario===nummeroSecreto){
asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos===1) ? 'vez' : 'veces'}`);
document.getElementById('reiniciar').removeAttribute('disabled'); //al ganar se desbloque el boton nuevo juego

}else{
    //el numero no acerto
    if(numeroDeUsuario > nummeroSecreto){
        asignarTextoElemento('p', 'El numero es menor');
    } else{
        asignarTextoElemento('p', 'El numero es mayor');
    }
    intentos++;
    limpiarCaja();//llamando a la funcion limpiar caja
}
return;
}
function limpiarCaja(){
    document.querySelector('#valorUsuario').value ='';
}

function generarNumeroSecreto(){
    let numeroGenerado =  Math.floor(Math.random()* numeroMaximo)+1; //funcion para simplificar 
    
    //si ya sorteamos todos los numero
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p' , `Ya se sortearon todos los numero posibles`);
    } 

    //si el numero generado esta incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();

    }  else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

function condicionesIniciales(){
asignarTextoElemento('h1', 'Bienvenidos al Juego del Numero Secreto');//Esta simplificacion es muy util
asignarTextoElemento ('p', `Escribe un numero del 1 al ${numeroMaximo}`);
nummeroSecreto = generarNumeroSecreto();
intentos = 1;

}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector(' #reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();
