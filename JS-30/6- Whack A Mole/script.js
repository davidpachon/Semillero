const agujeros = document.querySelectorAll('.agujero');
const tableroPuntos = document.querySelector('#tablaPuntos');
const topos = document.querySelectorAll('.topo');
const dificultad = document.querySelector("#desplegableDificultad");

let ultimoAgujero;
let tiempoFinalizado = false;
let puntaje;

function calcularTiempoAleatorio(minimo, maximo){
    return Math.round(Math.random() * (maximo - minimo) * minimo);
}

function calcularAgujeroAleatorio(agujeros){
    const ubicacion = Math.floor(Math.random()* agujeros.length);//Mathfloor es el que devuelve el maximo, el entero menor, en el piso xd
    const agujeroExtraido = agujeros[ubicacion];

    if(agujeroExtraido === ultimoAgujero){
        return calcularAgujeroAleatorio(agujeros);
    }

    ultimoAgujero = agujeroExtraido;
    return agujeroExtraido;
}


function ejecutar(){
    let tiempoJuego;

    switch(dificultad.value){
        case "1":
            tiempoJuego = calcularTiempoAleatorio(1000, 1500);
            break;

        case "2":
            tiempoJuego = calcularTiempoAleatorio(500, 1000);
            break;

        case "3":
            tiempoJuego = calcularTiempoAleatorio(400, 600);
            break;

        case "4":
            tiempoJuego = calcularTiempoAleatorio(100, 400);
            break;
        
        default:
            tiempoJuego = calcularTiempoAleatorio(500, 1000);

    }
    const agujeros = calcularAgujeroAleatorio(agujeros);
    agujeros.classList.add('up');

    setTimeout(() => {
        agujero.classList.remove('up');
        if(!tiempoFinalizado) ejecutar();//!=Selecciona una desigualdad
    },tiempoJuego);
}

function iniciarJuego() {
    tableroPuntos.textContent = 0;
    puntaje = 0;
    tiempoFinalizado = false;
    setTimeout(() => tiempoFinalizado = true, 10000);//10 segundos//Timeout establece un temporizador que ejecuta una función o una porción de código después de que transcurre un tiempo establecido.
    ejecutar();
}

function calcularGolpes(e){//e nos permite jugar con muchas propiedades
    if(!e.isTrusted) return;//isTrusted nos devuelve un valor verdadero o falso
    puntaje++;
    this.parentNote.classList.remove('up');//parentNote es el que nos trae el padre elemento de un nodo
    tableroPuntos.textContent = puntaje;
    ejecutar();
}

topos.forEach(topo => topo.addEventListener('click', calcularGolpes));