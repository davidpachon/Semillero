let contenedor = document.getElementById('lista');
let contenedorTabla = document.getElementById('tabla');
let checkAlmacenado = [];
let storedChecks = (localStorage.getItem("storedChecks")|| '').split(',');


let table = function (idUnica, nombreTexto, logginTexto, homologacionTexto) {
    let tab = document.createElement('tr');
    contenedorTabla.append(tab);

    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.id = idUnica;

    let nombre = document.createElement('td');
    nombre.innerHTML = nombreTexto;

    let loggin = document.createElement('td');
    loggin.innerHTML = logginTexto;

    let homologacion = document.createElement('td');
    homologacion.innerHTML = homologacionTexto;

    tab.append(checkbox, nombre, loggin, homologacion);
}


let spans = function (descripcionTexto, cantidadTexto) {

    let contenedorDatos = document.createElement('div');
    contenedorDatos.classList.add('contenedorDatos');
    contenedorDatos.id = "contenedorDatos";

    let descripcion = document.createElement('span');
    descripcion.classList.add('descripcion');
    descripcion.innerHTML = descripcionTexto;

    let cantidad = document.createElement('p');
    cantidad.classList.add('cantidad');
    cantidad.innerHTML = cantidadTexto;

    contenedorDatos.append(descripcion, cantidad);

    contenedor.append(contenedorDatos)

    

    descripcion.addEventListener("click", ()=>{    
        contenedorTabla.innerHTML = "";
        if("Acceso Total - Descripción" === descripcionTexto){
            listas();    
        }else if("Coordinadora de Calidad" === descripcionTexto){    
            listas2();
        }else {
            alert("No hay contenido para mostrar");
        } 
    })
}


function listas() {
    fetch('JSON/AccesoTotal.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(dato => {
                let id = dato.Id;
                let nombreTexto = dato.Nombre;
                let logginTexto = dato.Loggin;
                let homologacionTexto = dato.Homologacion;
                table(id, nombreTexto, logginTexto, homologacionTexto);
            });


            const marcar = document.getElementById('seleccionar');
            const desmarcar = document.getElementById('desseleccionar');
            const check = [...document.querySelectorAll('input[type=checkbox]')];

            marcar.addEventListener("click", () => {

                check.forEach(function (check) { (check.checked = true) });
            });

            desmarcar.addEventListener("click", () => {
                check.forEach(function (check) { (check.checked = false) });
            });

            [...document.querySelectorAll("input[type=checkbox]")].forEach(check => { 
                check.addEventListener("change", ()=>{
                    if(check.checked){
                        storedChecks.push(`${check.id}`)
                    }else{
                    storedChecks.splice(storedChecks.indexOf(check.id), 1);            
                }
                    localStorage.setItem("storedChecks", storedChecks);
                    
                })
            });
        
        });
} 
function listas2(){

    fetch('JSON/CoordinadoraDeCalidad.json')
            .then(response => response.json())
            .then(data => {
            data.forEach(dato => {
                let id = dato.Id;
                let nombreTexto = dato.Nombre;
                let logginTexto = dato.Loggin;
                let homologacionTexto = dato.Homologacion;
                table(id, nombreTexto, logginTexto, homologacionTexto);
        });
    
    [...document.querySelectorAll("input[type=checkbox]")].forEach(check => { 
        check.addEventListener("change", ()=>{
            if(check.checked){
                storedChecks.push(`${check.id}`)
            }else{
            storedChecks.splice(storedChecks.indexOf(check.id), 1);            
        }
            localStorage.setItem("storedChecks", storedChecks);
            
        })
    });
});
}

function filtro(){
    fetch('JSON/NivelesDeAceso.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(dato => {
            let descripcionTexto = dato.Descripcion;
            let cantidadTexto = dato.Cantidad;
            spans(descripcionTexto, cantidadTexto);
        });
        

        let filtro = document.querySelector(".contInput input");

        let filtroValue;
        filtro.addEventListener("keyup", function () {
            filtroValue = filtro.value.trim();
            min(filtroValue);
        });

        const contDatos = document.querySelectorAll(".contenedorDatos span");
        function min(value) {
            contDatos.forEach(contDatos => {
                let descrip = contDatos.innerHTML;
                let padre = contDatos.parentElement;
                descrip.toLowerCase().indexOf(value.toLowerCase()) > -1 ? padre.classList.add("mostrar") : padre.classList.remove("mostrar");
            })
        }

    });

}


filtro();