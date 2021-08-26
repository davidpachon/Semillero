let formulario = document.getElementById('formulario');
let inputs = document.querySelectorAll('#formulario input');

let expresiones = {
	First_name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	Last_name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	password: /^.{4,12}$/,
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
			validarCampo(expresiones.First_name, e.target, 'First_name');
		break;
		case "Last_name":
			validarCampo(expresiones.Last_name, e.target, 'Last_name');
		break;
		case "email":
			validarCampo(expresiones.email, e.target, 'email');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
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

