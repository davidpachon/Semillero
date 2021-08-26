let crear = function(elemento, tipo, usuario) {
    let creador = document.createElement(elemento);
    creador.setAttribute(tipo, usuario);
    return creador;
}
let form = function(tipo, id, place, nom) {
    let creador = document.createElement("input");
    creador.type = tipo;
    creador.placeholder = place;
    creador.setAttribute("class", "formulario__input");
    creador.setAttribute("id", id);
	creador.setAttribute("name", nom);
    creador.required;
    return creador;
}
let crear_class_id = function (tipo, clase, id){
    let crear = document.createElement(tipo);
    crear.setAttribute("class", clase);
    crear.setAttribute("id", id);
    return crear;
}

let main = crear("main");
document.body.append(main);

let texto = crear("div", "class", "texto");

let texto1 = crear("span", "class", "texto1");
texto1.innerHTML = "Learn to code by watching others <br>";
let texto2 = crear("span", "class", "texto2");
texto2.innerHTML = "See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.";
texto.append(texto1, texto2);

main.append(texto);


let Try_free = crear("div", "class", "Try_free");
Try_free.innerHTML = "<txt><strong>Try it free 7 days</strong> then $20/mo. thereafter</txt>";
main.append(Try_free);


let contenedor_form = crear("div", "class", "contenedor_form");
let formulario =  crear_class_id("form", "formulario", "formulario");


let formulario__grupo1 = crear_class_id("div", "formulario__grupo", "grupo__First_name");
let formulario__grupo_input1 = crear("div", "class", "formulario__grupo-input");
let input_formulario1 = form("text", "First_name", "First Name", "First_name");
let validacion_estado1 = crear("i", "class", "formulario__validacion-estado ");
let imagen_alerta1 = crear("img", "src", "images/alerta.png");
let texto_error1 = crear("p", "class", "formulario__input-error");
texto_error1.innerHTML = "Firts Name can not be empty";
validacion_estado1.append(imagen_alerta1);
formulario__grupo_input1.append(input_formulario1, validacion_estado1);
formulario__grupo1.append(formulario__grupo_input1, texto_error1);


let formulario__grupo2 = crear_class_id("div", "formulario__grupo", "grupo__Last_name");
let formulario__grupo_input2 = crear("div", "class", "formulario__grupo-input");
let input_formulario2 = form("text", "Last_name", "Last Name", "Last_name");
let validacion_estado2 = crear("i", "class", "formulario__validacion-estado ");
let imagen_alerta2 = crear("img", "src", "images/alerta.png");
let texto_error2 = crear("p", "class", "formulario__input-error");
texto_error2.innerHTML = "Last Name can not be empty";
validacion_estado2.append(imagen_alerta2);
formulario__grupo_input2.append(input_formulario2, validacion_estado2);
formulario__grupo2.append(formulario__grupo_input2, texto_error2);


let formulario__grupo3 = crear_class_id("div", "formulario__grupo", "grupo__email");
let formulario__grupo_input3 = crear("div", "class", "formulario__grupo-input");
let input_formulario3 = form("email", "email", "Email Address", "email");
let validacion_estado3 = crear("i", "class", "formulario__validacion-estado ");
let imagen_alerta3 = crear("img", "src", "images/alerta.png");
let texto_error3 = crear("p", "class", "formulario__input-error");
texto_error3.innerHTML = "Looks like this is not an email";
validacion_estado3.append(imagen_alerta3);
formulario__grupo_input3.append(input_formulario3, validacion_estado3);
formulario__grupo3.append(formulario__grupo_input3, texto_error3);


let formulario__grupo4 = crear_class_id("div", "formulario__grupo", "grupo__password");
let formulario__grupo_input4 = crear("div", "class", "formulario__grupo-input");
let input_formulario4 = form("password", "password", "Password", "password");
let validacion_estado4 = crear("i", "class", "formulario__validacion-estado ");
let imagen_alerta4 = crear("img", "src", "images/alerta.png");
let texto_error4 = crear("p", "class", "formulario__input-error");
texto_error4.innerHTML = "Password cannot be empty";
validacion_estado4.append(imagen_alerta4);
formulario__grupo_input4.append(input_formulario4, validacion_estado4);
formulario__grupo4.append(formulario__grupo_input4, texto_error4);

let btn_enviar = crear("div", "class", "formulario-btn-enviar");
let boton = document.createElement("button");
boton.setAttribute("type", "submit");
boton.setAttribute("class", "formulario__btn");
boton.innerHTML = "CLAIM YOUR FREE TRIAL";
btn_enviar.append(boton);

let texto_aceptar = crear("div", "class", "texto_aceptar");
texto_aceptar.innerHTML = "By clicking the button, you are agreeing to our <red>Terms and Services</red>";

formulario.append(formulario__grupo1, formulario__grupo2, formulario__grupo3, formulario__grupo4, btn_enviar, texto_aceptar);

contenedor_form.append(formulario);
main.append(contenedor_form);


let formular = document.getElementById("formulario");
let inputs = document.querySelectorAll("#formulario input");

let expresiones = {
	First_name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	Last_name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	password: /^.{8,50}$/,
}

let campos = {
	First_name: false,
	Last_name: false,
	email: false,
	password: false,
}

let validarFormulario = (e) => {
	switch (e.target.name) {
		case "First_name":
			validarCampo(expresiones.First_name, e.target, "First_name");
		break;
		case "Last_name":
			validarCampo(expresiones.Last_name, e.target, "Last_name");
		break;
		case "email":
			validarCampo(expresiones.email, e.target, "email");
		break;
		case "password":
			validarCampo(expresiones.password, e.target, "password");
		break;
	}
}

let validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formular.addEventListener('submit', (e) => {
	if(campos.First_name && campos.Last_name && campos.email && campos.password){
		alert("Registro Exitoso");
	} else {
		alert("Por Favor Diligenciar De Manera Correcta Todos Los Campos");
	}
});
