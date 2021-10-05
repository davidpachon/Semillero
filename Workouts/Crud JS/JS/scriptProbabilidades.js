let botonMostrar = document.querySelector('#nuevo')
let mostrarForm = document.querySelector("#popup");

botonMostrar.addEventListener("click", function(){
    mostrarForm.classList.add("mostrar");
});


document.getElementById("formulario").addEventListener("submit",crear);

function crear(e){
    descripcion = document.getElementById("descripcion").value;
    valor = document.getElementById("valor").value;

    let probabilidad = {
        descripcion,
        valor
    }
    if(localStorage.getItem("probabilidades") == null){
        let probabilidades = []
        probabilidades.push(probabilidad)
        localStorage.setItem("probabilidades",JSON.stringify(probabilidades))
    }else{
        let probabilidades = JSON.parse(localStorage.getItem("probabilidades"))
        probabilidades.push(probabilidad)
        localStorage.setItem("probabilidades",JSON.stringify(probabilidades))
    }
    document.getElementById("formulario").reset();
    e.preventDefault();
    location.reload();
}



function agregar(){
    let probabilidades = JSON.parse(localStorage.getItem("probabilidades"));
    document.getElementById("tbody").innerHTML = ""
    for(let i=0; i<probabilidades.length; i++){
        let descripcion = probabilidades[i].descripcion
        let valor = probabilidades[i].valor
        

        document.getElementById("tbody").innerHTML +=
        `
        <tr>
            <td>${codigo = i+1}</td>
            <td>${descripcion}</td>
            <td>${valor}</td>
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
    let probabilidades = JSON.parse(localStorage.getItem("probabilidades"));
    for(let i=0; i<probabilidades.length; i++){

        if(probabilidades[i].descripcion === descripcion){
            document.getElementById("body").innerHTML = `
            <form id="formulario">
                
            <div class="titForm">
                <span class="tituloForm">Evaluación de riesgos</span>
            </div>
            
            <div class="formularioInputs">
               <label for="">Descripción</label>
               <input type="text" class="descripcion" id="newDescripcion" placeholder='${probabilidades[i].descripcion}'>
               <label for="">valor</label>
               <input type="text" class="valor" id="newValor" placeholder='${probabilidades[i].valor}'>
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
    let probabilidades = JSON.parse(localStorage.getItem("probabilidades"));
    probabilidades[i].descripcion = document.getElementById("newDescripcion").value;
    probabilidades[i].valor = document.getElementById("newValor").value;
    if(probabilidades[i].descripcion == ""){
        alert("No ha ingresado ninguna descripción");
    }else if(probabilidades[i].valor == ""){
        alert("No ha ingresado ningun valor");
    }else{
        localStorage.setItem("probabilidades",JSON.stringify(probabilidades));
    }
    location.reload();
};


function eliminar(descripcion){
    let probabilidades = JSON.parse(localStorage.getItem("probabilidades"));
    for(let i=0; i<probabilidades.length; i++){
        if(probabilidades[i].descripcion === descripcion){
            probabilidades.splice(i,1);
        }
    }
    localStorage.setItem("probabilidades",JSON.stringify(probabilidades));
    agregar();
}

agregar();

let cancelar = document.getElementById("cancelar");
cancelar.addEventListener('click', function(){location.reload()});

