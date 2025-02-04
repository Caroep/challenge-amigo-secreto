let listaAmigos = [];
document.getElementById('add').removeAttribute('disabled');


//Función que ingresa un nuevo amigo, lo muestra por pantalla y lo guarda en un array.

function agregarAmigo(){
    let amigo = document.getElementById('amigo').value;
    console.log(typeof amigo);
    if (amigo === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }else{
        if (listaAmigos.includes(amigo)) {
            alert(`El amigo ${amigo} ya se encuentra en la lista`);
        }else{
            listaAmigos.push(amigo);
            asignarTextoElemento('#listaAmigos', `${amigo}\n`);
        }
    }
    limpiarCaja();
    return;
}


//Función que sortea un amigo secreto de la lista de amigos y lo muestra por pantalla.
function sortearAmigo(){
    if(listaAmigos.length !=0) {
    document.querySelector('#add').setAttribute('disabled','true');
    let amigoSorteado =  Math.floor(Math.random()*listaAmigos.length);
    asignarTextoElemento('#resultado', `El amigo secreto sorteado es: ${listaAmigos[amigoSorteado]}`);
    document.querySelector('#listaAmigos').innerHTML = '';
    }else{
        alert('No hay amigos en la lista');
    }
    return;
}

//Función que limpia el campo de texto luego de cada ingreso de un nuevo amigo
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

//Función que asigna un texto a un elemento HTML
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerText += texto + "\n";
    return;
}