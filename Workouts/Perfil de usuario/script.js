function crearEl (elemento, clase, nombre){
    let creador = document.createElement(elemento);
        if(clase !== undefined && nombre !== undefined){
            creador.setAttribute(clase, nombre);
    }
    return creador;
}


const main = crearEl('main');
document.body.append(main);

const arriba = crearEl('div', 'class', 'arriba');
const abajo = crearEl('div', 'class', 'abajo');
main.append(arriba, abajo);

const contenedor2 = crearEl('div', 'class', 'contenedor1');

const contenedorCampos = crearEl('div', 'class', 'contCampos');

function info(camp1, camp2){
    const informacion = crearEl('div', 'class', 'info');
        const campo1 = crearEl('span', 'class', 'campo');
        campo1.innerHTML = camp1;
        const campo2= crearEl('span', 'class', 'informacion');
        campo2.innerHTML = camp2;
    informacion.append(campo1, campo2);
contenedorCampos.append(informacion);
}


let consumoDatos = function (nombre, correo, fijo, celular, direccion){
        const infoNombre = info('Nombre Completo', nombre);

        const infoCorreo = info('Correo', correo);

        const infoTelFijo = info('Teléfono Fijo', fijo);

        const infoCelular = info('Celular', celular);

        const infoDireccion = info('Dirección', direccion);
    }


contenedor2.append(contenedorCampos);

const btnDatos = crearEl('button', 'type', 'submit');
btnDatos.innerHTML = 'CARGAR DATOS';

contenedor2.append(btnDatos);
arriba.append(contenedor2);

btnDatos.addEventListener('click',  function(){

        const contenedor1 = crearEl('div', 'class', 'contenedor');
        
            const image = crearEl('div', 'class', 'image');


            const nombre = crearEl('span', 'class', 'nombre');
            nombre.innerHTML = 'David Pachón';
        
            const tipo = crearEl('span', 'class', 'txt1');
            tipo.innerHTML = "Desarrollador Front-End"
        
            const area = crearEl('span', 'class', 'txt1');
            area.innerHTML = "Área, Bogotá D.C.";
        
            const botones = crearEl('div', 'class', 'botones');
        
                const btnSeguir = crearEl("button", "type", "submit");
                btnSeguir.innerHTML = "SEGUIR";
        
                const btnMensaje = crearEl("button", "type", "submit");
                btnMensaje.innerHTML = "MENSAJE";
        
            botones.append(btnSeguir, btnMensaje);
        
        contenedor1.append(image, nombre, tipo, area, botones);
        
        arriba.append(contenedor1, contenedor2);
        
                
        function sitio(imagen, redd, sit){
            const principal = crearEl('div', 'class', 'redesSociales');
                const imagenSitio = crearEl('div', 'class', 'imgSitio');
                const imagenRedes = crearEl('img', 'src', imagen);
                const red = crearEl('span', 'class', 'red');
                red.innerHTML = redd;
                imagenSitio.append(imagenRedes, red);
                const sitio = crearEl('span', 'class', 'sitio');
                sitio.innerHTML = sit;
                principal.append(sitio, imagenSitio);
            contenedor3.append(principal);
        }
        
        
        
        
        const contenedor3 = crearEl('div', 'class', 'contenedor');
            const sitioWeb = sitio('images/web.svg', 'Sitio Web', 'https://dave.com');
            const gitHub = sitio('images/git.svg', 'Github', 'David_Pachon');
            const twitter = sitio('images/twitter.svg', 'Twitter', 'Dave_P7');
            const instagran = sitio('images/insta.svg', 'Instagram', 'alejo_p.r');
            const facebook = sitio('images/fb.svg', 'Facebook', 'David Pachón');
        
        
        const contenedor4 = crearEl('div', 'class', 'contenedor');
        
            const areaTrabajo = crearEl('span', 'class', 'ah');
            areaTrabajo.innerHTML = "ÁREAS DE TRABAJO";
        
                const contenedorFront = crearEl('div', 'class', 'contPro');
        
                    const contBarra2 = crearEl('div', 'id', 'progress');
                    contBarra2.innerHTML = '100%'
        
                    const frontEnd = crearEl('span', 'class', 'txt2');
                    frontEnd.innerHTML= 'Front-End';
        
                contenedorFront.append(contBarra2, frontEnd);
        
                
                const contenedorBack = crearEl('div', 'class', 'contPro');
        
                    const contBarra = crearEl('div', 'id', 'progress');
                    contBarra.innerHTML= '100%';
                    
                    const backEnd = crearEl('span', 'class', 'txt2');
                    backEnd.innerHTML = 'Back-End';
        
                contenedorBack.append(contBarra, backEnd);
        
        
            contenedor4.append(areaTrabajo, contenedorFront, contenedorBack);
        
        
            const contenedor5 = crearEl('div', 'class', 'contenedor');
            const habilidades = crearEl('span', 'class', 'ah');
            habilidades.innerHTML = "HABILIDADES";
        
        
                const contHtml = crearEl('div', 'class', 'contPro')
        
                    const contBarra3 = crearEl('div', 'id', 'progress');
                    contBarra3.innerHTML = '100%'
                    
                    const html = crearEl('span', 'class', 'txt2');
                    html.innerHTML = 'HTML';
        
                contHtml.append(contBarra3, html);
        
        
                const contCss = crearEl('div', 'class', 'contPro');
        
                    const contBarra4 = crearEl('div', 'id', 'progress');
                    contBarra4.innerHTML = '100%'
                    
                    const css= crearEl('span', 'class', 'txt2');
                    css.innerHTML = 'CSS';
        
                contCss.append(contBarra4, css);
        
        
                const contJs = crearEl('div', 'class', 'contPro');
        
                    const contBarra5 = crearEl('div', 'id', 'progress');
                    contBarra5.innerHTML = '100%'
                    
                    const js= crearEl('span', 'class', 'txt2');
                    js.innerHTML = 'JavaScript';
        
                contJs.append(contBarra5, js);
        
        
            
            contenedor5.append(habilidades, contHtml, contCss, contJs);        

            abajo.append(contenedor3, contenedor4, contenedor5);

});

btnDatos.addEventListener('click',  function(){
    fetch('datos.json')
    .then(response => response.json())
    .then(data =>{
        data.forEach(dato =>{
            var nombre = dato.nombre;
            var correo = dato.correo;
            var fijo = dato.fijo;
            var celular = dato.celular;
            var direccion  = dato.direccion
            consumoDatos(nombre, correo, fijo, celular, direccion);
        });
    });
});
