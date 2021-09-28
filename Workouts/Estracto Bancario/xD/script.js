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

let fechaHora =function(){
        let hoy = new Date();
        let fecha = hoy.getDate() + '/' + ( hoy.getMonth() + 1 ) + '/' + hoy.getFullYear();
        let hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
        let fechaYHora = fecha + ' ' + hora;

        return fechaYHora;
    }

let header = crearEl("header");

    let titulo = crearEl("h1", "class", "titulo");
    titulo.innerHTML = "Subir Extracto Bancario";
    header.append(titulo);

document.body.append(header);

let contenedorTextos = crearEl("div", "class", "contenedorTextos");

    let texto1 = crearEl("span", "class", "texto1");
    texto1.innerHTML = "DEMO SAS NIT 85,133,458-9";
    let texto2 = crearEl("span", "class", "texto2");
    texto2.innerHTML = `Fecha: ${fechaHora()}`;
    contenedorTextos.append(texto1, texto2)

document.body.append(contenedorTextos);


let contenedorForm = crearEl("form", "class", "contenedorForm");
    
    let formIzquierda = crearEl("div", "class", "formIzquierda");

        let archivoPro = crearFIzq("Archivo a procesar");
        let archivoLimpio = crearFIzq("Archivo en limpio");
        let DMA = crearFIzq("Dia-Mes-Año");
        let banco = crearFIzq("Banco");
        let cuenta = crearFIzq("Cuenta");
        let Moneda = crearFIzq("Moneda conciliación");
    
    let formDerecha = crearEl("div", "class", "formDerecha");

        let selecArchivo = crearEl("div", "class", "inputForm");  
            let botonSeleccionar = crearEl("input", "type", "file");
            botonSeleccionar.innerHTML = "Seleccionar Archivo";
            botonSeleccionar.id = "seleccionar";
        selecArchivo.append(botonSeleccionar);

        let divCheck = crearEl("div", "class", "inputForm")
        let archivoPrender = crearEl("input", "type", "checkbox"); 
        archivoPrender.classList.add("jtoggler");
        divCheck.append(archivoPrender);

        let selectMes = crearEl("input", "type", "date");
        selectMes.classList.add("inputForm");
        

        let selectBanco = crearEl("select", "class", "inputForm");
        selectBanco.innerHTML = "<option disabled selected> Seleccione un banco </option>";

        let selectCuenta = crearEl("select", "class", "inputForm");
        selectCuenta.innerHTML = "<option disabled selected> Tipo de cuenta </option>";

        let selectMoneda = crearEl("select", "class", "inputForm");
        selectMoneda.innerHTML = "<option disabled selected> Moneda de cambio </option>";


        formDerecha.append(selecArchivo, divCheck, selectMes, selectBanco, selectCuenta, selectMoneda);


    contenedorForm.append(formIzquierda, formDerecha);

document.body.append(contenedorForm);

    let botonSubir = crearEl("button", "type", "submit");
    botonSubir.classList.add("botonSubir");
    botonSubir.innerHTML = "Subir Archivo";

    document.body.append(botonSubir);

    



