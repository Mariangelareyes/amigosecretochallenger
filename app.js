// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaDeAmigos = [];
let listaDeNombres = document.getElementById("listaAmigos");
let elementoAmigoSorteado = document.getElementById("resultado");

// Agregar los nombres de los amigos
function agregarAmigo() {
    let nombreDeAmigos = document.getElementById("amigo").value;

    if(nombreDeAmigos === ""){
        alert("Para empezar el Juego debes ingresar los Nombres de tus Amigos");
        return;
    } else {
        listaDeAmigos.push(nombreDeAmigos);
        document.getElementById("amigo").value = "";
    }
        listaDeNombres.innerHTML = "";
        for(let i = 0; i < listaDeAmigos.length; i++){
        let nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = listaDeAmigos[i];
        listaDeNombres.appendChild(nuevoElemento);    
    }
}

// Sortear el amigo secreto
function sortearAmigo() {
    if(listaDeAmigos.length > 0) {
        let amigoSorteado = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
        elementoAmigoSorteado.innerHTML = `El amigo secreto es: ${amigoSorteado}`;
        
    } else {    
        alert("Debes ingresar al menos un nombre para sortear el Juego");
    }
    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";
    return;
}
