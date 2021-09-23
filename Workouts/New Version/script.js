const crearEl = function(elemento, tipo, nombre){
    let creador = document.createElement(elemento);
    if(tipo !== undefined && nombre !== undefined){
    creador.setAttribute(tipo, nombre)
    }
    return creador;
}

let main = crearEl('main');
document.body.append(main);


let linea = crearEl('div', 'class', 'linea');

    let titulo = crearEl('h1', 'class', 'sinco');
    titulo.innerHTML= "<gris>S</gris><blanco>incoS</blanco>oporte";
    linea.append(titulo);

main.append(linea);


let contenedorPrincipal = crearEl('div', 'class', 'contenedorPrincipal');

    let contenedor1 = crearEl('div', 'class', 'contenedor1');

    let contenedorFigura = crearEl('div', 'class', 'contenedorFigura');

        let figura = crearEl('img', 'src', 'images/Figure.svg');
        contenedorFigura.append(figura);

    contenedor1.append(contenedorFigura);

    let contenedorEvolucion = crearEl('div', 'class', 'contenedorEvolucion');
        let evolucion = crearEl('span', 'class', 'evolucion');
        evolucion.innerHTML = "<gris>Nuestra página de soporte ha</gris><azul> evolucionado</azul>"
        let circulo = crearEl('img', 'src', 'images/Circle.svg');
        contenedorEvolucion.append(evolucion, circulo)
    contenedor1.append(contenedorEvolucion);

    contenedorPrincipal.append(contenedor1);


    let contenedor2 = crearEl('div', 'class', 'contenedor2');

        let contenedorImagenes = crearEl('div', 'class', 'contenedorImagenes');

        let divImg1 = crearEl('div', 'class', 'divImg1');
            let imagen1 = crearEl('img', 'src', 'images/oldVersion.png');
            let textoOld = crearEl('span', 'class', 'old');
            textoOld.innerHTML="<gris>Esta opción dejará de ser vigente</gris>";
        divImg1.append(imagen1, textoOld);

        let divImg2 = crearEl('div', 'class', 'divImg2');
            let imagen2 = crearEl('img', 'src', 'images/Newversion.png');
            let textoNew = crearEl('span', 'class', 'new');
            textoNew.innerHTML = "<azul>Accede desde el marco a la nueva opción<azul>";
        divImg2.append(imagen2, textoNew);

        contenedorImagenes.append(divImg1, divImg2);


        let imgPersona = crearEl('img', 'src', 'images/Person.svg');
        imgPersona.classList.add("imgPersona")

        contenedor2.append(contenedorImagenes, imgPersona);
    contenedorPrincipal.append(contenedor2);

main.append(contenedorPrincipal);