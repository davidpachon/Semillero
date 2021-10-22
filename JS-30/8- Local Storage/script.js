const formulario = getElementById('formularioRegistro');
const llaveLocalStorage = 'listadoEjercicio';

function guardar(){
    const datos = obtenerDatosFormulario;
    const listado = obtenerDatosLocalStorage(llaveLocalStorage) || [];
    listado.push(datos);
    asigmarDatosLocalStorage(llaveLocalStorage, listado);
}

function obtenerDatosLocalStorage(llave){
    return JSON.parse(localStorage.getItem(llave));
}

function asigmarDatosLocalStorage(llave, Valor){   
    localStorage.setItem(llave, JSON.stringify(valor));

}

(()=>{
    formulario.addEventListener('submit', guardar);
})();
function obtenerDatosFormulario(){
    const formData = new FormData(formulario);
    let datos = {}
    formData.forEach((valor, key) => {
        datos[key]=valor;
    });
    alert(JSON.stringify(datos)); 
}
