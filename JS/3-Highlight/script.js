const etiquetasA = document.querySelectorAll("a");
const resaltar = document.createElement("span");
resaltar.classList.add("highlight");
document.body.appendChild(resaltar);

for(let i = 0; i< etiquetasA.length; i++){
    etiquetasA[i].addEventListener('mouseenter', function(){
const coordenadasPagina = this.getBoundingClientRect();
const coords = {
    width: coordenadasPagina.width,
    height: coordenadasPagina.height,
    top: coordenadasPagina.top + window.scrollY,
    left: coordenadasPagina.left + window.scrollX,
}

    resaltar.style.width = `${coords.width}px`;
    resaltar.style.height = `${coords.height}px`;
    resaltar.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
    
    });
}
