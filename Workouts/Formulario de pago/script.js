let crearEl = function (elemento, tipo, nombre){
    let creador = document.createElement(elemento);

    if(tipo !== undefined || nombre !== undefined){
        creador.setAttribute(tipo, nombre);
    }
    return creador;
}

let inputs = function(texto, tipo, place, idd, nombre, num, app){

    let div = crearEl("div", "class", "contenedor_input");

    let span = crearEl("span", "class", "txt");
    span.innerHTML = texto;

    let input = crearEl("input", "type", tipo);
    input.placeholder = place;
    input.id = idd;
	input.name = nombre;
	input.maxLength = num;

    div.append(span, input);
    if(app !== undefined){
    (app).append(div);
}else{
    formulario.append(div);
}
}


let main = crearEl("main");
document.body.append(main);

let izquierda = crearEl("section", "class", "izquierda");

let logo = crearEl("img", "src", "img/LOGO.png")
logo.classList.add("logo");
izquierda.append(logo);

let texto_abajo = crearEl("div", "class", "texto_abajo");

let titulo_abajo = crearEl("h1", "class", "titulo_abajo");
titulo_abajo.innerHTML = "FORMULARIO DE PAGO";
texto_abajo.append(titulo_abajo);

let contenido_abajo = crearEl("span", "class", "contenido_abajo");
contenido_abajo.innerHTML = "Ingresa tus datos para realizar el pago de tu pedido.";
texto_abajo.append(contenido_abajo);

izquierda.append(texto_abajo);

main.append(izquierda);



let derecha = crearEl("section", "class", "derecha");


let formulario = crearEl("form", "class", "formulario");
formulario.id = "formulario-tarjeta";

let pago = crearEl("h1", "class", "pago");
pago.innerHTML = "!REALIZA TU PAGO!";
formulario.append(pago);



let nombres = inputs("Nombres y Apellidos", "text", "Nombres y Apellidos Completos", "inputNombre", "nombres", "60");

let correo = inputs("Correo", "mail", "Correo electronico", "correo", "correo", "60");

let numTarjeta = inputs("Número de la tarjeta", "text", "XXXX-XXXX-XXXX-XXXX", "inputNumero", "numTarjeta", "19");


let expedicionCCV = crearEl("div", "class", "expedicionCCV");


let mes = crearEl("div", "class", "contenedor_input");

let mesSpan = crearEl("span", "class", "txt");
mesSpan.innerHTML = 'Expiración';

let mesInput = crearEl("select", "name", "mes");
mesInput.placeholder = 'Mes';
mesInput.id = 'selectMes';
mesInput.innerHTML = "<option disabled selected> Mes </option>";

mes.append(mesSpan, mesInput);
expedicionCCV.append(mes);


let año = crearEl("div", "class", "contenedor_input");

let añoSpan = crearEl("span", "class", "txt");
añoSpan.innerHTML = 'Año';

let añoInput = crearEl("select", "name", "año");
añoInput.placeholder = 'Año';
añoInput.id = 'selectYear';
añoInput.innerHTML = "<option disabled selected> Año </option>";

año.append(añoSpan, añoInput);
expedicionCCV.append(año);


let ccv = inputs("CCV", "text", "XXX", "inputCCV", "ccv", "3", expedicionCCV);
formulario.append(expedicionCCV);



let terminos = crearEl("div", "class", "terminos");

let checkbox = crearEl("input", "type", "checkbox");
checkbox.id = "checkbox";
let aceptar = crearEl("div", "class", "aceptar");
aceptar.innerHTML= "Aceptar <u>terminos y condiciones.</u>"

terminos.append(checkbox, aceptar);
formulario.append(terminos);


let boton = crearEl("button", "type", "submit");
boton.innerHTML= "ENVIAR";
formulario.append(boton);

derecha.append(formulario);

main.append(derecha);

let rotTarjeta = document.querySelector('#tarjeta');

rotTarjeta.addEventListener('click', () => {
    rotTarjeta.classList.toggle('active');
});


for(let i = 1; i <= 12; i++){
	let opcion = document.createElement('option');
	opcion.value = i;
	opcion.innerText = i;
	formulario.selectMes.appendChild(opcion);
}


const yearActual = new Date().getFullYear();
for(let i = yearActual; i <= yearActual + 8; i++){
	let opcion = document.createElement('option');
	opcion.value = i;
	opcion.innerText = i;
	formulario.selectYear.appendChild(opcion);
}

let formu = document.querySelector('#formulario-tarjeta');


numeroTarjeta = document.querySelector('#tarjeta .numero');
nombreTarjeta = document.querySelector('#tarjeta .nombre'),
firma = document.querySelector('#tarjeta .firma p'),
mesExpiracion = document.querySelector('#tarjeta .mes'),
yearExpiracion = document.querySelector('#tarjeta .year');
ccv = document.querySelector('#tarjeta .ccv');

formu.inputNumero.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	formu.inputNumero.value = valorInput
	.replace(/\s/g, '')
	.replace(/\D/g, '')
	.replace(/([0-9]{4})/g, '$1 ')
	.trim();

	numeroTarjeta.textContent = valorInput;

	if(valorInput == ''){
		numeroTarjeta.textContent = 'XXXX XXXX XXXX XXXX';
	}
	mostrarFrente();
});


formu.inputNombre.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
	nombreTarjeta.textContent = valorInput;
	firma.textContent = valorInput;

	if(valorInput == ''){
		nombreTarjeta.textContent = 'XXXX XXXX';
	}
	mostrarFrente();
});

formulario.selectMes.addEventListener('change', (e) => {
	mesExpiracion.textContent = e.target.value;
	mostrarFrente();
});

formulario.selectYear.addEventListener('change', (e) => {
	yearExpiracion.textContent = e.target.value.slice(2);
	mostrarFrente();
});

formulario.inputCCV.addEventListener('keyup', () => {
	if(!tarjeta.classList.contains('active')){
		tarjeta.classList.toggle('active');
	}

	formulario.inputCCV.value = formulario.inputCCV.value
	.replace(/\s/g, '')
	.replace(/\D/g, '');

	ccv.textContent = formulario.inputCCV.value;
});

let formula = document.getElementById('formulario-tarjeta');
let inputsValidacion = document.querySelectorAll("#formulario-tarjeta input");


let expresiones = {
	names: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    nTarjeta: /^[\s\S]{0,10}$/,
    ccvE: /^[47][0-9]{3}$/
}

let campos = {
	names: false,
	email: false,
    nTarjeta: false,
    ccvE: false
}

let validarFormulario = (e) => {
	switch (e.target.name) {
		case "names":
			validarCampo(expresiones.names, e.target, "nombres");
		break;
		case "email":
			validarCampo(expresiones.email, e.target, "correo");
		break;
		case "Num":
			validarCampo(expresiones.nTarjeta, e.target, "numTarjeta");
		break;
		case "ccvE":
			validarCampo(expresiones.ccvE, e.target, "ccv");
		break;
	}
}

let validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		campos[campo] = true;
	} else {
		campos[campo] = false;
	}
}

inputsValidacion.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});



formula.addEventListener('submit', () => {
	if(campos.names && campos.email && campos.nTarjeta && campos.ccvE && (document.getElementById('checkbox').checked)){
		alert("Registro Exitoso");
	} else {
		alert("Por Favor Diligenciar De Manera Correcta Todos Los Campos");
	}
});
