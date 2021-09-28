import{ bancos } from "./bancos.js";
import{ cuentas } from "./cuentas.js";
import{ moneda } from "./moneda.js";


$(document).ready(() => {
    $('.jtoggler').jtoggler();
    $(document).on('jt:toggled', function(event, target) {
        console.log(event, target);
        console.info($(target).prop('checked'))
    });
    $(document).on('jt:toggled:multi', function (event, target) {
        console.log(event, target);
        console.info($(target).parent().index())
    });
});
let boton = function( $) {
    "use strict";
        var pluginName = "jtoggler",
            defaults = {
                className: "",
            };
        function Toggler ( element, options ) {
            this.element = element;
            this.settings = $.extend( {}, defaults, options );
            this._defaults = defaults;
            this._name = pluginName;
            this.init();
        }
        $.extend( Toggler.prototype, {
            init: function() {
                var $element = $(this.element);
                    this.generateTwoStateHTML();
            },
            generateTwoStateHTML: function() {
                var $element = $(this.element);

                if (!$element.hasClass('jqtoggler-inited')) {
                    $element.addClass('jqtoggler-inited');
                    var $wrapper = $('<label />', {
                        class: $.trim("jtoggler-wrapper " + this._defaults.className),
                    });
                    var $control = $('<div />', {
                        class: 'jtoggler-control',
                    });
                    var $handle = $('<div />', {
                        class: 'jtoggler-handle',
                    });
                    $control.prepend($handle);
                    $element.wrap($wrapper).after($control);
                    if ($element.data('jtlabel')) {

                        var $label = $('<div />', {
                            class: 'jtoggler-label',
                        });
                        if ($element.prop('checked')) {
                            if ($element.data('jtlabel-success')) {
                                $label.text($element.data('jtlabel-success'));
                            } else {
                                this.setWarningLabelMessage();
                                $label.text($element.data('jtlabel'));
                            }
                        } else {
                            $label.text($element.data('jtlabel'));
                        }
                        $control.after($label);
                    }
                }
            },
        } );
        $.fn[ pluginName ] = function( options ) {
            return this.each( function() {
                if ( !$.data( this, "plugin_" + pluginName ) ) {
                    $.data( this, "plugin_" +
                        pluginName, new Toggler( this, options ) );
                }
            } );
        };
}( jQuery, window, document );


let crearEl = function(elemento, tipo, nombre){
    let creador = document.createElement(elemento);
    if(tipo !== undefined && nombre !== undefined){
        creador.setAttribute(tipo, nombre);
    }
    return creador;
}
let crearFIzq = function(titulo){
    let inp = crearEl("div", "class", "inputForm");
        inp.innerHTML = titulo;
        formIzquierda.append(inp);
    return inp;

}

function fechaHora(){
        let date = new Date();
        let dia = date.getDate();
        let mes = date.getMonth() + 1;
        let año = date.getFullYear();
        let hora = date.getHours();
        let minutos = date.getMinutes();
        let segundos = date.getSeconds();
        dia = dia < 10 ? "0" + dia : dia;
        mes = mes < 10 ? "0" + mes : mes;
        hora = hora < 10 ? "0"+ hora : hora;
        minutos = minutos < 10 ? "0"+ minutos : minutos;
        segundos = segundos < 10 ? "0"+ segundos : segundos;
        document.getElementById('FH').innerHTML= "Fecha: "+ dia + "/" + mes + "/" + año + " Hora: " + hora  + ":" + minutos + ":" + segundos;
    }   
setInterval(fechaHora, 1000);

let header = crearEl("header");

    let titulo = crearEl("h1", "class", "titulo");
    titulo.innerHTML = "Subir Extracto Bancario";
    header.append(titulo);

document.body.append(header);

let contenedorTextos = crearEl("div", "class", "contenedorTextos");

    let texto1 = crearEl("span", "class", "texto1");
    texto1.innerHTML = "DEMO SAS NIT 85,133,458-9";
    let texto2 = crearEl("span", "class", "texto2");
    texto2.id = "FH";
    contenedorTextos.append(texto1, texto2)

document.body.append(contenedorTextos);


let contenedorForm = crearEl("form", "class", "contenedorForm");
    
    let formIzquierda = crearEl("div", "class", "formIzquierda");

        let archivoPro = crearFIzq("Archivo a procesar");
        archivoPro.id = "ocultarLabel";
        let archivoLimpio = crearFIzq("Archivo en limpio");
        let DMA = crearFIzq("Dia-Mes-Año");
        let banco = crearFIzq("Banco");
        let cuenta = crearFIzq("Cuenta");
        let Moneda = crearFIzq("Divisa");
    
    let formDerecha = crearEl("div", "class", "formDerecha");
    formDerecha.id = "formulario";

        let selecArchivo = crearEl("div", "class", "inputForm seleccionar");  
        selecArchivo.id = "ocultarInput";
            let botonSeleccionar = crearEl("input", "type", "file");
            botonSeleccionar.innerHTML = "Seleccionar Archivo";
            botonSeleccionar.id = "seleccionar";
        selecArchivo.append(botonSeleccionar);
        

        let divCheck = crearEl("div", "class", "inputForm")
        let archivoPrender = crearEl("input", "type", "checkbox"); 
        archivoPrender.classList.add("jtoggler");
        archivoPrender.id = "switch";
        divCheck.append(archivoPrender);

        let selectMes = crearEl("input", "type", "date");
        selectMes.classList.add("inputForm");
        selectMes.name = "Mes";
        

        let selectBanco = crearEl("select", "class", "inputForm");
        selectBanco.id = "selectBanco";
        selectBanco.name = "Banc";
        selectBanco.innerHTML = "<option disabled selected> Seleccione un banco </option>";

        let selectCuenta = crearEl("select", "class", "inputForm");
        selectCuenta.id = "selectCuentas";
        selectCuenta.name = "Cuent";
        selectCuenta.innerHTML = "<option disabled selected> Tipo de cuenta </option>";

        let selectMoneda = crearEl("select", "class", "inputForm");
        selectMoneda.id = "selectMoneda";
        selectMoneda.name = "mConciliacion";
        selectMoneda.innerHTML = "<option disabled selected> Moneda de cambio </option>";


        formDerecha.append(selecArchivo, divCheck, selectMes, selectBanco, selectCuenta, selectMoneda);


    contenedorForm.append(formIzquierda, formDerecha);

document.body.append(contenedorForm);

    let botonSubir = crearEl("button", "type", "submit");
    botonSubir.classList.add("botonSubir");
    botonSubir.innerHTML = "Subir Archivo";

    document.body.append(botonSubir);

    
    let hidden = document.querySelector("#switch");
    let ocInput = document.querySelector("#ocultarInput");
    let ocLabel = document.querySelector("#ocultarLabel");

    hidden.addEventListener("click", function(){
        ocInput.classList.toggle("ocultar");
        ocLabel.classList.toggle("ocultar");
    });


    let selectBan = document.querySelector("#selectBanco");
    for (let i = 0; i < bancos.length; i++) {
        selectBan.innerHTML += '<option>'+bancos[i]+'</option>'; 
    }
    let cuentasb = document.querySelector("#selectCuentas");
    for (let i = 0; i < cuentas.length; i++) {
        cuentasb.innerHTML +='<option>'+cuentas[i]+'</option>'; 
    }
    let selectCue = document.querySelector("#selectMoneda");
    for (let i = 0; i < moneda.length; i++) {
        selectCue.innerHTML +='<option>'+moneda[i]+'</option>'; 
    }
  
let validacion = document.getElementById("seleccionar");

function validar(){
let elejir = document.querySelector('input[type="file"]');
if (elejir.value ==0|| elejir.value =="") {
        validacion.classList.add("incorrecto");
}else{
        validacion.classList.remove("incorrecto");
}
}

validacion.addEventListener("click",validar);
validacion.addEventListener("change",validar);
