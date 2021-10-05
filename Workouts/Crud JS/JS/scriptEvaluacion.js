let botonMostrar = document.querySelector('#nuevo')
let mostrarForm = document.querySelector("#popup");

botonMostrar.addEventListener("click", function(){
    mostrarForm.classList.add("mostrar");
});


document.getElementById("formulario").addEventListener("submit",crear);

function crear(e){
    descripcion = document.getElementById("descripcion").value;
    valorMinimo = document.getElementById("valorMinimo").value;
    valorMaximo = document.getElementById("valorMaximo").value;

    let evaluacion = {
        descripcion,
        valorMinimo,
        valorMaximo
    }
    if(localStorage.getItem("evaluaciones") == null){
        let evaluaciones = []
        evaluaciones.push(evaluacion)
        localStorage.setItem("evaluaciones",JSON.stringify(evaluaciones))
    }else{
        let evaluaciones = JSON.parse(localStorage.getItem("evaluaciones"))
        evaluaciones.push(evaluacion)
        localStorage.setItem("evaluaciones",JSON.stringify(evaluaciones))
    }
    document.getElementById("formulario").reset();
    e.preventDefault();
    location.reload();
}



function agregar(){
    let evaluaciones = JSON.parse(localStorage.getItem("evaluaciones"));
    document.getElementById("tbody").innerHTML = ""
    for(let i=0; i<evaluaciones.length; i++){
        let descripcion = evaluaciones[i].descripcion
        let valorMinimo = evaluaciones[i].valorMinimo
        let valorMaximo = evaluaciones[i].valorMaximo

        document.getElementById("tbody").innerHTML +=
        `
        <tr>
            <td>${codigo = i+1}</td>
            <td>${descripcion}</td>
            <td>${valorMinimo}</td>
            <td>${valorMaximo}</td>
            <td><button onclick="editar('${descripcion}')"></button>
            <button onclick="eliminar('${descripcion}')"></button></td>
        </tr>
        `
    }
}

function cancelarDos(){
    location.reload()
};

function editar(descripcion){
    let evaluaciones = JSON.parse(localStorage.getItem("evaluaciones"));
    for(let i=0; i<evaluaciones.length; i++){

        if(evaluaciones[i].descripcion === descripcion){
            document.getElementById("body").innerHTML = `
            <form id="formulario">
                
            <div class="titForm">
                <span class="tituloForm">Evaluación de riesgos</span>
            </div>
            
            <div class="formularioInputs">
               <label for="">Descripcion</label>
               <input type="text" class="descripcion" id="newDescripcion" placeholder='${evaluaciones[i].descripcion}'>
               <label for="">Valor minimo</label>
               <input type="text" class="valorMinimo" id="newValorMinimo" placeholder='${evaluaciones[i].valorMinimo}'>
               <label for="">Valor maximo</label>
               <input type="text" class="valorMaximo" id="newValorMaximo" placeholder='${evaluaciones[i].valorMaximo}'>
            </div>
            <div class ="formularioBotones">
            <button class="btn" onclick="actualizar('${i}')">Actualizar</button>
            <button class="btn" onclick="cancelarDos()">Cancelar</button>
            </div>
            </form>
            `
        }
    }
}

function actualizar(i){
    let evaluaciones = JSON.parse(localStorage.getItem("evaluaciones"));
    evaluaciones[i].descripcion = document.getElementById("newDescripcion").value;
    evaluaciones[i].valorMinimo = document.getElementById("newValorMinimo").value;
    evaluaciones[i].valorMaximo = document.getElementById("newValorMaximo").value;
    if(evaluaciones[i].descripcion == ""){
        alert("No ha ingresado ninguna descripción");
    }else if(evaluaciones[i].valorMinimo == ""){
        alert("No ha ingresado ningun precio minimo");
    }else if(evaluaciones[i].valorMaximo == ""){
        alert("No ha ingresado ningun valor maximo");
    }else{
        localStorage.setItem("evaluaciones",JSON.stringify(evaluaciones));
    }
    location.reload();
};


function eliminar(descripcion){
    let evaluaciones = JSON.parse(localStorage.getItem("evaluaciones"));
    for(let i=0; i<evaluaciones.length; i++){
        if(evaluaciones[i].descripcion === descripcion){
            evaluaciones.splice(i,1);
        }
    }
    localStorage.setItem("evaluaciones",JSON.stringify(evaluaciones));
    agregar();
}

agregar();

let cancelar = document.getElementById("cancelar");
cancelar.addEventListener('click', function(){location.reload()});

