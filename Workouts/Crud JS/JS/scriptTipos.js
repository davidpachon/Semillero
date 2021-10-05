let botonMostrar = document.querySelector('#nuevo')
let mostrarForm = document.querySelector("#popup");

botonMostrar.addEventListener("click", function(){
    mostrarForm.classList.add("mostrar");
});


document.getElementById("formulario").addEventListener("submit",crear);

function crear(e){
    descripcion = document.getElementById("descripcion").value;
    interno = document.getElementById("interno").value;

    let tipo = {
        descripcion,
        interno
    }
    if(localStorage.getItem("tipos") == null){
        let tipos = []
        tipos.push(tipo)
        localStorage.setItem("tipos",JSON.stringify(tipos))
    }else{
        let tipos = JSON.parse(localStorage.getItem("tipos"))
        tipos.push(tipo)
        localStorage.setItem("tipos",JSON.stringify(tipos))
    }
    document.getElementById("formulario").reset();
    e.preventDefault();
    location.reload();
}



function agregar(){
    let tipos = JSON.parse(localStorage.getItem("tipos"));
    document.getElementById("tbody").innerHTML = ""
    for(let i=0; i<tipos.length; i++){
        let descripcion = tipos[i].descripcion
        let interno = tipos[i].interno
        

        document.getElementById("tbody").innerHTML +=
        `
        <tr>
            <td>${codigo = i+1}</td>
            <td>${descripcion}</td>
            <td>${interno}</td>
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
    let tipos = JSON.parse(localStorage.getItem("tipos"));
    for(let i=0; i<tipos.length; i++){

        if(tipos[i].descripcion === descripcion){
            document.getElementById("body").innerHTML = `
            <form id="formulario">
                
            <div class="titForm">
                <span class="tituloForm">Evaluación de riesgos</span>
            </div>
            
            <div class="formularioInputs">
               <label for="">Descripción</label>
               <input type="text" class="descripcion" id="newDescripcion" placeholder='${tipos[i].descripcion}'>
               <label for="">Interno</label>
               <input type="text" class="interno" id="newinterno" placeholder='${tipos[i].interno}'>
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
    let tipos = JSON.parse(localStorage.getItem("tipos"));
    tipos[i].descripcion = document.getElementById("newDescripcion").value;
    tipos[i].interno = document.getElementById("newinterno").value;
    if(tipos[i].descripcion == ""){
        alert("No ha ingresado ninguna descripción");
    }else if(tipos[i].interno == ""){
        alert("No ha ingresado ningun interno");
    }else{
        localStorage.setItem("tipos",JSON.stringify(tipos));
    }
    location.reload();
};


function eliminar(descripcion){
    let tipos = JSON.parse(localStorage.getItem("tipos"));
    for(let i=0; i<tipos.length; i++){
        if(tipos[i].descripcion === descripcion){
            tipos.splice(i,1);
        }
    }
    localStorage.setItem("tipos",JSON.stringify(tipos));
    agregar();
}

agregar();

let cancelar = document.getElementById("cancelar");
cancelar.addEventListener('click', function(){location.reload()});

