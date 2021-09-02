let crear = function(elemento, clase, nombre){
    let creador = document.createElement(elemento);
        if (clase !== undefined && nombre !== undefined) {
        creador.setAttribute(clase, nombre);
    }
  return creador;
}
let countDownTimer;
let main = crear("main");

let titulo = crear("h2");
titulo.innerText = "COUNTDOWN TIMER";
main.append(titulo);

let izquierda = crear("div", "class", "izquierda");


let contedor_botones = crear("div", "class", "contedor_botones");

let botones = crear("div", "class", "botones");



let crear_boton = function(place){
    let boton_crear = document.createElement("button");
    boton_crear.setAttribute("class", "boton");
    boton_crear.innerHTML = place;
    return boton_crear;    
}

let boton1 = crear_boton("5min");
let boton2 = crear_boton("15min");
let boton3 = crear_boton("30min");
let boton4 = crear_boton("60min");

botones.append(boton1, boton2, boton3, boton4);

let div_input = crear("div", "class", "div_input");
let input = crear("input", "type", "number");
input.setAttribute("id", "input_per")
input.placeholder = "coundown Personalizado";
div_input.append(input);

contedor_botones.append(botones, div_input);

izquierda.append(contedor_botones);


let derecha = crear("div", "class", "derecha");

let circulo = crear ("div", "class", "circulo");
let tiempo = crear("h1", "id", "contador");
tiempo.innerHTML= "00:00";
circulo.append(tiempo);
derecha.append(circulo);

main.append(izquierda, derecha);
document.body.append(main);


function coundown (duracion, display) {
    clearInterval(countDownTimer);
    let timer = duracion, minutos, segundos;  
    countDownTimer = setInterval(function () {
        minutos = parseInt(timer / 60, 10);
        segundos = parseInt(timer % 60, 10);

        minutos = minutos < 10 ? "0" + minutos : minutos;
        segundos = segundos < 10 ? "0" + segundos : segundos;

        display.textContent = minutos + ":" + segundos;
        if (--timer < 0) {
            timer = duracion;
        }
    }, 1000);
}

boton1.onclick = function () {
    let minutos = 60 * 5, display = tiempo;
    coundown (minutos, display);
};

boton2.onclick = function () {
    let minutos = 60 * 15, display = tiempo;
    coundown (minutos, display);
};

boton3.onclick = function () {
    let minutos = 60 * 30, display = tiempo;
    coundown (minutos, display);
};

boton4.onclick = function () {
    let minutos = 60 * 60, display = tiempo;
    coundown (minutos, display);
};

input_per.addEventListener("keydown", () => {
    let minutos = 60 * (input_per.value), display = tiempo;
    coundown (minutos, display);
})




