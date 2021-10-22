let crear = function(elemento, clase, nombre){
    let creador = document.createElement(elemento);
        if (clase !== undefined && nombre !== undefined) {
        creador.setAttribute(clase, nombre);
    }
  return creador;
}

let main = crear("main");

let cara_reloj = crear("div", "class", "cara_reloj");

let circulo = crear("div", "class", "circulo");
cara_reloj.append(circulo);

let hora = crear ("div", "class", "manecilla hora");
let minutos = crear ("div", "class", "manecilla minutos");
let segundos = crear ("div", "class", "manecilla segundos");
cara_reloj.append(hora, minutos, segundos);

main.append(cara_reloj);


document.body.append(main);


function funcionalidad_reloj(){
    let now = new Date();

    let seg = now.getSeconds();
    let segundosGrados = ((seg/60)*360)+90;
    segundos.style.transform = `rotate(${segundosGrados}deg)`;    

    let min = now.getMinutes();
    let minutosGrados = ((min/60)*360)+((seg/60)*6)+90;
    minutos.style.transform = `rotate(${minutosGrados}deg)`;

    let hor = now.getHours();
    let horaGrados = ((hor/12)*360)+((min/60)*30)+90;
    hora.style.transform = `rotate(${horaGrados}deg)`;
}
setInterval(funcionalidad_reloj,1000);
funcionalidad_reloj();
