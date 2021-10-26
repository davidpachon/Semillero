let modelo = document.getElementById("modelo");
let botonConsultar = document.getElementById("boton");
let ocultarInputs = document.getElementById("ocultarInputs");
let main = document.getElementById("main");
let tabla = document.getElementById("tabla");
let ocultarFooter = document.getElementById("ocultarFooter");
let orden = document.getElementById("orden");
let cliente = document.getElementById("cliente");
let fechaInicial = document.getElementById("fechaInicial");
let fechaFinal = document.getElementById("fechaFinal");
let monedas = document.getElementById("monedas");
let loader = document.querySelector(".cargador");
let contenedorFlotante = document.getElementById("contenedorFlotante")
let imagenCheck;
let capturarCheck;
let btnGenerar;
let arreglo = [];

let crearElemento = function (elemento, tipo, nombre) {
    let creador = document.createElement(elemento);
    if (tipo !== undefined || nombre !== undefined) {
        creador.setAttribute(tipo, nombre);
    }
    return creador;
};

function cargarMoneda() {
    fetch('JSON/monedas.JSON')
        .then(response => response.json())
        .then(data => {
            data.forEach(dato => {
                monedas.innerHTML += `<option value="${dato.abreviatura}">${dato.abreviatura}-${dato.descripcion}</option>`
            });
        })
};
cargarMoneda();

function cargarModelo() {
    fetch('JSON/modeloNegocio.JSON')
        .then(response => response.json())
        .then(data => {
            data.forEach(dato => {
                modelo.innerHTML += `<option value="${dato.nombre}">${dato.nombre}</option>`
            });
        })
};
cargarModelo();

function crearInputSelect(link, titulo, descripcion) {
    let input = crearElemento("div", "class", "input");
    let img = crearElemento("img", "src", link);
    let contenedorTituloSubtitulo = crearElemento("div", "class", "inputNuevo");
    let h3 = crearElemento("h3");
    h3.innerHTML = titulo;
    let span = crearElemento("span");
    span.innerHTML = descripcion;
    contenedorTituloSubtitulo.append(h3, span);
    input.append(img, contenedorTituloSubtitulo);
    main.append(input);
};

function crearBoton(id, texto) {
    let boton = crearElemento("button");
    boton.id = id;
    boton.innerHTML = texto;
    return boton;
};

function cerrar() {
    location.reload();
};

function validarCheck() {
    for (let i = 0; i < capturarCheck.length; i++) {
        if (capturarCheck[i].value != "0") {
            imagenCheck[i].innerHTML = `<img src="images/icono seleccionado.svg">`;
            btnGenerar.disabled = false;
            btnGenerar.style.cursor = "pointer";
            btnGenerar.style.background = "#355882";
        } else {
            imagenCheck[i].innerHTML = `<img src="images/icono no seleccionado.svg">`;
        }
    }
};

function cerrarFlotante() {
    contenedorFlotante.style.display = "none";
    tbody.innerHTML = "";
};

fetch('JSON/factura.JSON')
    .then(response => response.json())
    .then(data => arreglo.push(...data))
botonConsultar.addEventListener("click", () => {
    if (fechaFinal.value < fechaInicial.value) {
        alert("La fecha inicial no puede ser mayor a la fecha final")
        location.reload();
    } else
    loader.style.display = "flex";
    setTimeout(() => {
        loader.style.display = "none";
    }, 1000);
    ocultarInputs.classList.toggle("ocultar");
    ocultarFooter.classList.toggle("ocultar");
    main.classList.toggle("row");
    crearInputSelect("images/calendario.svg", "Fecha inicial", fechaInicial.value);
    crearInputSelect("images/calendario.svg", "Fecha final", fechaFinal.value);
    crearInputSelect("images/icono moneda.svg", "Moneda", monedas.value);

    let botonFiltrar = crearBoton("filt", "Filtrar");
    botonFiltrar.addEventListener("click", () => { cerrar() });
    let botonGenerar = crearBoton("generar", "Generar");
    main.append(botonFiltrar, botonGenerar);
    btnGenerar = document.getElementById("generar")
    btnGenerar.style.cursor = "default";
    btnGenerar.disabled = true;
    tabla.innerHTML += `
        <thead>
            <th>Ver</th>
            <th>Orden de facturación</th>
            <th>Fecha registro</th>
            <th>Cliente</th>
            <th>Modelo de negocio</th>
            <th>Descripción</th>
            <th>Forma de pago</th>
            <th>Fecha de vencimiento</th>
            <th>Valor total a cobrar</th>
            <th>Valor anticipo</th>
            <th>Asociar anticipo</th>
            <th><img src="images/icono no seleccionado.svg"></th>
        </thead>`;

        arreglo.forEach(dato => {
        let valorACobrar;
        let valorAnticipo;
        function conversor (valor){
            let peso= (dato.valorTotalACobrar)*1;
            valorACobrar = peso*valor;
            valorACobrar = valorACobrar.toFixed(3);
            dato.valorTotalACobrar = valorACobrar;
            let peso2 = (dato.valorAnticipo)*1;
            valorAnticipo = peso2*valor;
            valorAnticipo = valorAnticipo.toFixed(3);
            dato.valorAnticipo = valorAnticipo;
        }
        if(monedas.value == "COP"){
            valorACobrar = dato.valorTotalACobrar;
            valorAnticipo = dato.valorAnticipo;
        }else if(monedas.value == "USD"){
            conversor(0.00026);
        }else if(monedas.value == "EUR"){
            conversor(0.00023);
        }
        else if(monedas.value == "PAB"){
            conversor(0.00027);
        }
        else if(monedas.value == "GBP"){
            conversor(0.00019);
        }
        else if(monedas.value == "MXN"){
            conversor(0.0054);
        }
        else if(monedas.value == "PEN"){
            conversor(0.0010);
        }
        else if(monedas.value == "TDD"){
            conversor(0.001357);
        }
        else if(monedas.value == "VEZ"){
            conversor(0.00110977);
        }
        else if(monedas.value == "DOP"){
            conversor(0.015);
        }
        else if(monedas.value == "BTC"){
            conversor(0.00000000437915);
        }
        else if(monedas.value == "CNY"){
            conversor(0.0017);
        }
        else if(monedas.value == "PYG"){
            conversor(1.93981);
        }
        else if(monedas.value == "CHF"){
            conversor(0.00024);
        }
        else if(monedas.value == "CAD"){
            conversor(0.00033);
        }
        if (orden.value == dato.codigoOrdenDeFacturacion && cliente.value == dato.clienteNombre.toUpperCase() || cliente.value == dato.clienteNombre.toLowerCase() || orden.value == dato.codigoOrdenDeFacturacion || fechaInicial.value == dato.fechaRegistro && fechaFinal.value == dato.fechaVencimiento || modelo.value == dato.modeloNegocio) {
            tabla.innerHTML += `
                    <tr>
                        <td id="imagenesVerdes"><img src="images/icono adobe verde.svg"><img src="images/icono documento verde.svg"></td>
                        <td>${dato.codigoOrdenDeFacturacion}</td>
                        <td>${dato.fechaRegistro}</td>
                        <td>${dato.clienteCodigo} - ${dato.clienteNombre}</td>
                        <td>${dato.modeloNegocio}</td>
                        <td><p class="arreglo">${dato.descripcionOrdenFacturacion}</p></td>
                        <td>
                            <select id="capturarCheck" onChange="validarCheck()">
                                <option value="0" selected>--Seleccionar--</option>
                                <option value="${dato.codigoOrdenDeFacturacion}">5 días</option>
                                <option value="${dato.codigoOrdenDeFacturacion}">10 días</option>
                                <option value="${dato.codigoOrdenDeFacturacion}">15 días</option>
                                <option value="${dato.codigoOrdenDeFacturacion}">20 días</option>
                                <option value="${dato.codigoOrdenDeFacturacion}">25 días</option>
                                <option value="${dato.codigoOrdenDeFacturacion}">30 días</option>
                            </select>
                        </td>
                        <td>${dato.fechaVencimiento}</td>
                        <td>${monedas.value}$${valorACobrar}</td>
                        <td>${monedas.value}$${valorAnticipo}</td>
                        <td>${dato.asociarAnticipo}</td>
                        <td id="imagenCheck"><img src="images/icono no seleccionado.svg"></td>
                    </tr>`;
            imagenCheck = document.querySelectorAll("#imagenCheck");
            capturarCheck = document.querySelectorAll("#capturarCheck");
            botonGenerar.addEventListener("click", function () {
                contenedorFlotante.style.display = "block";
                contenedorFlotante.innerHTML = `
                    <div class="barraArriba">
                        <span>Órdenes de facturación procesadas</span>
                        <button id="cerrar" onClick="cerrarFlotante()"><h2>X</h2></button>
                    </div> 
                    <table id="tablaFlotante">
                        <thead>
                            <th>Orden de facturacion</th>
                            <th>Tipo de documento</th>
                            <th>Factura</th>
                            <th>Valor</th>
                            <th>Ver</th>
                        </thead>
                        <tbody id="tbody"></tbody>
                    </table>`;
                contenedorFlotante = document.getElementById("contenedorFlotante");
                let tbody = document.getElementById("tbody");
                arreglo.forEach(dato => {
                    if (orden.value == dato.codigoOrdenDeFacturacion && cliente.value == dato.clienteNombre.toUpperCase() || cliente.value == dato.clienteNombre.toLowerCase() || orden.value == dato.codigoOrdenDeFacturacion || fechaInicial.value == dato.fechaRegistro && fechaFinal.value == dato.fechaVencimiento || modelo.value == dato.modeloNegocio) {
                        fetch('JSON/modeloNegocio.JSON')
                            .then(response => response.json())
                            .then(data => {
                                data.forEach(elemento => {
                                    for (let i = 0; i < capturarCheck.length; i++) {
                                        if (dato.codigoOrdenDeFacturacion === elemento.codigoOrdenDeFacturacion && capturarCheck[i].value == dato.codigoOrdenDeFacturacion) {
                                            tbody.innerHTML += `
                                                    <tr>
                                                        <td>${dato.codigoOrdenDeFacturacion}</td>
                                                        <td>${elemento.tipoDocumentoFacturaDiaria}</td>
                                                        <td>${elemento.prefijo}</td>
                                                        <td>${monedas.value}$${valorACobrar}</td>
                                                        <td id="imagenesAzules"><img src="images/icono adobe azul.svg"><img src="images/icono documento azul.svg"></td>
                                                    </tr>`;
                                    };
                                };
                            });
                        });
                    };
                });
            });
        };
    });
});