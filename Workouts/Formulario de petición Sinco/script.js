let crearEl = function (elemento, tipo, nombre){
    let creador = document.createElement(elemento);

    if(tipo !== undefined || nombre !== undefined){
        creador.setAttribute(tipo, nombre);
    }
    return creador;
}

let crearInputs = function(tipo, place, idd, nombre, num){
    let input = crearEl("input", "type", tipo);
    input.classList.add('.formulario__grupo-incorrecto');
    input.placeholder = place;
    input.id = idd;
	input.name = nombre;
	input.maxLength = num;
    input.required;
    return input;
}



let main = crearEl('main');
document.body.append(main);

let linea = crearEl('div', 'class', 'linea');

let contenedorCentral = crearEl('div', 'class', 'contenedorCentral');

    let izquierda = crearEl('div', 'class', 'izquierda');
        let img = crearEl('img', 'src', 'images/Imageners-teamviewer-2.jpg');
    izquierda.append(img);


    let derecha = crearEl('div', 'class', 'derecha');
        let form = crearEl('form', 'class', 'formulario');
        form.id = 'formulario';


        let texto = crearEl('span', 'class', 'text');
        texto.innerHTML = 'Ayuda remota';
        
        let nombres = crearInputs('text', 'Nombres Completos', 'nomb', 'nomb', 50);
        let compañia = crearInputs('text', 'NIT o nombre de la compañía', 'comp', 'comp', 50);
        let celular = crearInputs('phone', 'Teléfono o celular', 'cel', 'cel', 10);
        let correo = crearInputs('email', 'Correo electrónico', 'email', 'email', 100);
        let inconveniente = crearInputs('text', 'Breve descripción del inconveniente', 'inconv', 'inconv', 500);

        let contCheckText = crearEl('div', 'class', 'contCheckText');
        let checkbox = crearEl('input', 'type', 'checkbox');
        checkbox.id = 'checkbox';
        let textoLargo = crearEl('span', 'class', 'textoLargo');
        textoLargo.innerHTML='Al enviar este formulario, autorizo el servicio de software TeamViewer para realizar el acceso remoto, autorizo realizar cambiosen el equipo los cuales incluyen puntos de restauracion del sistema operativo, manifiesto que conozco la <azul>politica de proteccion de datos</azul> "autorizo de manera voluntaria, previa, expresa e inequivoca a SINCOSOFT S.A.S, para tratar mis datos personales y caracter sensible (encaso de ser necesaria su recoleccion, de acuerdo con las politicas de tratamiento de datos personales de la empresa y para los fines relacionados con su objeto social y especial para fines legales, contractuales y comerciales de SINCOSOFT S.A.S. De igual manera, acepto los <azul>"terminos condiciones"</azul> establecidos por SINCOSOFT S.A.S';
        contCheckText.append(checkbox, textoLargo);

        let boton = crearEl('button', 'type', 'submit');
        boton.id = "boton";
        boton.innerHTML = "Solicitar sesión";


        form.append(texto, nombres, compañia, celular, correo, inconveniente, contCheckText, boton);
    derecha.append(form);

contenedorCentral.append(izquierda, derecha);

let footer = crearEl('footer');

let textoFooter =  crearEl('span');
textoFooter.innerHTML = 'PBX:(571) 5 190 343 - Cr. 12#79-50-Bogota, D.C, Colombia - Copyright 2016. SINCOSOFT S.A.S Todos los derechos reservados';
footer.append(textoFooter);

main.append(linea, contenedorCentral, footer);



let formular = document.getElementById("formulario");
let inputs = document.querySelectorAll("#formulario input");

let expresiones = {
	nomb: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    comp: /[A-Za-z0-9!?-]{8,50}/,
    cel: /[0-9]/g,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    inconv: /[A-Za-z0-9!?-]{8,500}/
}

let campos = {
	nomb: false,
    comp: false,
    cel: false,
	email: false,
    inconv: false
}

let validarFormulario = (e) => {
	switch (e.target.name) {
		case "nomb":
			validarCampo(expresiones.nomb, e.target, "nomb");
		break;
        case "comp":
			validarCampo(expresiones.comp, e.target, "comp");
		break;
        case "cel":
			validarCampo(expresiones.cel, e.target, "cel");
		break;
		case "email":
			validarCampo(expresiones.email, e.target, "email");
		break;
        case "inconv":
			validarCampo(expresiones.inconv, e.target, "inconv");
		break;
	}
}

let validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`${campo}`).classList.remove('formulario__grupo-incorrecto');
		campos[campo] = true;
	} else {
		document.getElementById(`${campo}`).classList.add('formulario__grupo-incorrecto');
		campos[campo] = false;
	}
}

/*
let validarCampo = (e) => {
    switch (e.target.name){
        case "nomb":
            if(expresiones.nomb.test(e.target.value)){
                document.getElementById("#nomb").classList.remove('formulario__grupo-incorrecto');
                campos[campo] = true;
            }else{
                document.getElementById("#nomb").classList.add('formulario__grupo-incorrecto');
                campos[campo] = false;
            }
        break;
    }
}
*/
inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formular.addEventListener('submit', (e) => {
	if(campos.nomb && campos.comp && campos.cel && campos.email && campos.inconv && (document.getElementById('checkbox').checked)){
		alert("Su Solicitud Ha Sido Registrada Con Exitoso");
	} else {
		alert("Por Favor Diligenciar De Manera Correcta Todos Los Campos");
	}
});
