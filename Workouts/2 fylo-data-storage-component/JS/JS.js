let crear = function (Tipo, Clase, Atributo){
    let creador = document.createElement(Tipo);
    creador.setAttribute(Clase, Atributo);
    return creador;
}

let main = crear("main");
document.body.append(main);

let contenedor_principal = crear("secction", "class", "contenedor_principal")
main.append(contenedor_principal);

let contenedor_izquierda = crear("div", "class", "contenedor_izquierda");
contenedor_principal.append(contenedor_izquierda);

let contenedor_logo_btn = crear("div", "class", "contenedor_logo_btn");
contenedor_izquierda.append(contenedor_logo_btn);

let cont_logo = crear("div", "class", "cont_logo");
contenedor_logo_btn.append(cont_logo);
let logo_fylo = crear("img", "src", "images/logo.png")
cont_logo.append(logo_fylo);

let botones = crear("div", "class", "botones");
contenedor_logo_btn.append(botones);
let btnDoc = crear("img", "src", "images/docBtn.png");
let btnFol = crear("img", "src", "images/folderBtn.png");
let btnUpl = crear("img", "src", "images/uploadBtn.png");
botones.append(btnDoc, btnFol, btnUpl);



let contenedor_derecha = crear("div", "class", "contenedor_derecha");
contenedor_principal.append(contenedor_derecha);

let contenedor_contenido_der = crear("div", "class", "contenedor_contenido_der");
contenedor_derecha.append(contenedor_contenido_der);

let gb_usadas = crear("span", "class", "gb_usadas");
gb_usadas.innerText = "You've used 815 gb of you storage";
contenedor_contenido_der.append(gb_usadas)


let barra = crear("div", "class", "barra");
contenedor_contenido_der.append(barra);
let barra_fondo = crear("div", "class", "barra_fondo");
let barra_movible = crear("div", "class", "barra_movible");
let circulo = crear("div", "class", "circulo");
barra_movible.append(circulo);
barra_fondo.append(barra_movible);
barra.append(barra_fondo);


let gbs_abajo = crear("div", "class", "gbs_abajo");
contenedor_contenido_der.append(gbs_abajo);

let cero_gb = crear("span");
cero_gb.innerText="0 GB";
gbs_abajo.append(cero_gb);

let mil_gb = crear("span");
mil_gb.innerText="1000 GB";
gbs_abajo.append(mil_gb)


let gbs_flotante = crear("div", "class", "gbs_flotante");
main.append(gbs_flotante);
let contenedor_flotante = crear("div", "class", "contenedor_flotante");
let usado = crear("span", "class", "usado");
usado.innerText="185";
let gb_left = crear("span", "class", "gb_left");
gb_left.innerText="GB LEFT";
let triangulo = crear("div", "class", "triangulo");
gbs_flotante.append(contenedor_flotante, triangulo);
contenedor_flotante.append(usado, gb_left);

function hover_Doc_in(){
    btnDoc.src = "images/hoverDoc.svg";
}
function hover_Doc_out(){
    btnDoc.src = "images/docBtn.png";
}
btnDoc.addEventListener("mouseenter", hover_Doc_in);
btnDoc.addEventListener("mouseleave", hover_Doc_out);

function hover_Fol_in(){
    btnFol.src = "images/hoverFolder.svg";
}
function hover_Fol_out(){
    btnFol.src = "images/folderBtn.png";
}
btnFol.addEventListener("mouseenter", hover_Fol_in);
btnFol.addEventListener("mouseleave", hover_Fol_out);

function hover_Upl_in(){
    btnUpl.src="images/hoverUpload.svg";
}
function hover_Upl_out(){
    btnUpl.src="images/uploadBtn.png";
}
btnUpl.addEventListener("mouseenter", hover_Upl_in);
btnUpl.addEventListener("mouseleave", hover_Upl_out);

