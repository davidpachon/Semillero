let botonMostrar = document.querySelector('#nuevo')
let mostrarForm = document.querySelector("#popup");

botonMostrar.addEventListener("click", function(){
    mostrarForm.classList.add("mostrar");
});


document.getElementById("formulario").addEventListener("submit",crear);

function crear(e){
    descripcion = document.getElementById("descripcion").value;
    valor = document.getElementById("valor").value;

    let impacto = {
        descripcion,
        valor
    }
    if(localStorage.getItem("impactos") == null){
        let impactos = []
        impactos.push(impacto)
        localStorage.setItem("impactos",JSON.stringify(impactos))
    }else{
        let impactos = JSON.parse(localStorage.getItem("impactos"))
        impactos.push(impacto)
        localStorage.setItem("impactos",JSON.stringify(impactos))
    }
    document.getElementById("formulario").reset();
    e.preventDefault();
    location.reload();
}



function agregar(){
    let impactos = JSON.parse(localStorage.getItem("impactos"));
    document.getElementById("tbody").innerHTML = ""
    for(let i=0; i<impactos.length; i++){
        let descripcion = impactos[i].descripcion
        let valor = impactos[i].valor
        

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
    let impactos = JSON.parse(localStorage.getItem("impactos"));
    for(let i=0; i<impactos.length; i++){

        if(impactos[i].descripcion === descripcion){
            document.getElementById("body").innerHTML = `
            <form id="formulario">
                
            <div class="titForm">
                <span class="tituloForm">Evaluación de riesgos</span>
            </div>
            
            <div class="formularioInputs">
               <label for="">Descripción</label>
               <input type="text" class="descripcion" id="newDescripcion" placeholder='${impactos[i].descripcion}'>
               <label for="">valor</label>
               <input type="text" class="valor" id="newValor" placeholder='${impactos[i].valor}'>
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
    let impactos = JSON.parse(localStorage.getItem("impactos"));
    impactos[i].descripcion = document.getElementById("newDescripcion").value;
    impactos[i].valor = document.getElementById("newValor").value;
    if(impactos[i].descripcion == ""){
        alert("No ha ingresado ninguna descripción");
    }else if(impactos[i].valor == ""){
        alert("No ha ingresado ningun valor");
    }else{
        localStorage.setItem("impactos",JSON.stringify(impactos));
    }
    location.reload();
};


function eliminar(descripcion){
    let impactos = JSON.parse(localStorage.getItem("impactos"));
    for(let i=0; i<impactos.length; i++){
        if(impactos[i].descripcion === descripcion){
            impactos.splice(i,1);
        }
    }
    localStorage.setItem("impactos",JSON.stringify(impactos));
    agregar();
}

agregar();

let cancelar = document.getElementById("cancelar");
cancelar.addEventListener('click', function(){location.reload()});

