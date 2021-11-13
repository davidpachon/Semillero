let juegoDisplay = document.querySelector(".notificacion"),
    estadoJuego= ["", "", "", "", "", "", "", "", ""],
    ganador= [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ],
    mensajeGanador = () => `El jugador ${jugador} ha ganado`,
    empate = () => `Empate`,
    turnoJugador = () => `Turno de ${jugador}`;
  
    
let juegoActivo = true,
    jugador = 'X';


function main(){
    estadoDisplay(turnoJugador());
    listeners();
}

function listeners(){
    document.querySelector(".contenedorCeldas").addEventListener('click', celdaClickeada);
    document.querySelector(".reiniciar").addEventListener('click', reiniciar);
}

function estadoDisplay(mensaje){
    juegoDisplay.innerHTML= mensaje;
}

function celdaClickeada(evento){
    let clickCelda = evento.target;
    if(clickCelda.classList.contains('celdas')){
        let clickCeldaIndex = Array.from(clickCelda.parentNode.children).indexOf(clickCelda)
        if(estadoJuego[clickCeldaIndex] !== '' || !juegoActivo){
            return false
        }

        celdaJugada(clickCelda, clickCeldaIndex)
        validacionResultado()
    }
}

function celdaJugada(clickCelda, clickCeldaIndex){
    estadoJuego[clickCeldaIndex] = jugador
    clickCelda.innerText = jugador
}


function reiniciar(){
    juegoActivo = true;
    jugador = "X",
    reiniciarJuego()
    estadoDisplay(turnoJugador())
    document.querySelectorAll(".celdas").forEach(cell => cell.innerHTML = "")
}

function reiniciarJuego(){
    let i = estadoJuego.length
    while(i--){
        estadoJuego[i] = ""
    }
}

function validacionResultado(){
    let redondeo = false;
    for(let i=0; i < ganador.length; i++){
        let condicionGanador = ganador[i]
        let posicion1 = estadoJuego[condicionGanador[0]],
            posicion2 = estadoJuego[condicionGanador[1]],
            posicion3 = estadoJuego[condicionGanador[2]]
        if(posicion1 === '' || posicion2 === '' || posicion3 === ''){
            continue;
        }
        if(posicion1 === posicion2 && posicion2 === posicion3 && posicion3 === posicion1){
            redondeo = true;
            break;
        }
    }
    if(redondeo){
        estadoDisplay(mensajeGanador());
        juegoActivo=false;
        return;
    }

    let redondeoEmpate = !estadoJuego.includes('');

    if(redondeoEmpate){
        estadoDisplay(empate());
        juegoActivo=false;
        
        return;
    }

    cambioJugador();
}

function cambioJugador(){
    jugador = (jugador === 'O') ? 'X' : 'O';
    estadoDisplay(turnoJugador()); 
}

main();