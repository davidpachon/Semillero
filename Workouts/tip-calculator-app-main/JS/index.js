let CrearEl = function (elemento, clase, nombre) {
  let creador = document.createElement(elemento);

  if (clase !== undefined && nombre !== undefined) {
    creador.setAttribute(clase, nombre);
  }

  return creador;
};

let Crear_input = function (tipo, clase, id, place) {
  let creador = document.createElement("input");
  creador.type = tipo;
  creador.placeholder = place;
  creador.setAttribute("class", clase);
  creador.setAttribute("id", id);
  return creador;
};

let contenedor_main = CrearEl("main");
document.body.append(contenedor_main);

let contenedor_izq = CrearEl("div", "class", "contenedor_izq");

let contenedor_inp = CrearEl("div", "class", "contenedor_input");
contenedor_inp.innerHTML = "Bill";
let contenedor_input = Crear_input("number", "cont_input", "input_bill", "$");
contenedor_inp.append(contenedor_input);
contenedor_izq.append(contenedor_inp);

let contenedor_prop = CrearEl("div", "class", "contenedor_prop");

let select_tip = CrearEl("div", "class", "contenedor_input");
select_tip.innerHTML = "Select Tip %";
contenedor_prop.append(select_tip);

const crearboton = function (porcentaje) {
  let boton = CrearEl("button", "class", "boton");
  boton.innerHTML = porcentaje;
  return boton;
};

let botones1 = CrearEl("div", "class", "botones");
let boton1 = crearboton("5%");
let boton2 = crearboton("10%");
let boton3 = crearboton("15%");
botones1.append(boton1, boton2, boton3);
contenedor_prop.append(botones1);

let botones2 = CrearEl("div", "class", "botones");
let boton4 = crearboton("20%");
let boton5 = crearboton("25%");
let boton6 = Crear_input("number", "boton_inp", "custom", "Custom");
contenedor_prop.append(botones2);
botones2.append(boton4, boton5, boton6);
contenedor_izq.append(contenedor_prop);

let contenedor_inp2 = CrearEl("div", "class", "contenedor_input");
contenedor_inp2.innerHTML = "Number of People";
let contenedor_input2 = Crear_input("number", "cont_input", "input_people", "");
contenedor_inp2.append(contenedor_input2);
contenedor_izq.append(contenedor_inp2);

contenedor_main.append(contenedor_izq);

let contenedor_der = CrearEl("div", "class", "contenedor_der");

let cont_main = CrearEl("div", "class", "cont_main");

let contenedor_central = CrearEl("div", "class", "contenedor_central");

let cont_arriba = CrearEl("div", "class", "cont_arriba");

let contenedor_pago1 = CrearEl("div", "class", "contenedor_pago");


let contenedor_textos1 = CrearEl("div", "class", "contenedor_textos");
let txt1 = CrearEl("div", "class", "txt1");
txt1.innerHTML = "Tip Amount";
let txt2 = CrearEl("div", "class", "txt2");
txt2.innerHTML = "/ person";
contenedor_textos1.append(txt1, txt2);
contenedor_pago1.append(contenedor_textos1);

let pesos1 = CrearEl("div", "class", "pesos");
pesos1.innerHTML = "$0.00";
contenedor_pago1.append(pesos1);


let contenedor_pago2 = CrearEl("div", "class", "contenedor_pago2");
let contenedor_textos2 = CrearEl("div", "class", "contenedor_textos");
let txt3 = CrearEl("div", "class", "txt1");
txt3.innerHTML = "Total";
let txt4 = CrearEl("div", "class", "txt2");
txt4.innerHTML = "/ person";
contenedor_textos2.append(txt3, txt4);
contenedor_pago2.append(contenedor_textos2);

let pesos2 = CrearEl("div", "class", "pesos");
pesos2.innerHTML = "$0.00";
contenedor_pago2.append(pesos2);


cont_arriba.append(contenedor_pago1, contenedor_pago2);

let cont_abajo = CrearEl("div", "class", "cont_abajo");
let boton_reset = CrearEl("button", "id", "boton_reset");
boton_reset.innerHTML = "RESET";
cont_abajo.append(boton_reset);

contenedor_central.append(cont_arriba, cont_abajo);

cont_main.append(contenedor_central);
contenedor_der.append(cont_main);
contenedor_main.append(contenedor_der);


function calcular_porcentaje() {
  let input_bill = document.querySelector("#input_bill").value;
  let input_people = document.querySelector("#input_people").value;
  let valor_porcentaje = input_bill * porcentaje;
  let valor_por_persona = Math.round(valor_porcentaje / input_people);
  pesos1.innerHTML = "$" + valor_por_persona;
  let division_bill_person = input_bill / input_people;
  let total = Math.round(division_bill_person + valor_por_persona);
  pesos2.innerHTML = "$" + total;
}

let porcentaje;

boton1.onclick = function () {
  porcentaje = 0.05;
  calcular_porcentaje();
}

boton2.onclick = function () {
  porcentaje = 0.10;
  calcular_porcentaje();
}
boton3.onclick = function () {
  porcentaje = 0.15;
  calcular_porcentaje();
}
boton4.onclick = function () {
  porcentaje = 0.20;
  calcular_porcentaje();
}
boton5.onclick = function () {
  porcentaje = 0.25;
  calcular_porcentaje();
}
boton6.addEventListener("keydown", () => {
  let valor = boton6.value;
  porcentaje = valor / 100;
  calcular_porcentaje();
})


boton_reset.onclick= function limpiar(){
  document.getElementById("input_bill").value = "";
  document.getElementById("input_people").value = "";
  document.getElementById("custom").value = "";
  pesos1.innerHTML = "$0.00";
  pesos2.innerHTML = "$0.00";
}