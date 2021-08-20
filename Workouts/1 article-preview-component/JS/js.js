let contenedor_main = document.createElement('div');
contenedor_main.setAttribute("class", "contenedor_main");
document.body.append(contenedor_main);

let img_b = document.createElement('div');
img_b.setAttribute("class", "img_b");
contenedor_main.append(img_b);

let img_draw = document.createElement('img');
img_draw.setAttribute("src", "images/drawers.jpg");
img_b.append(img_draw);

let txt = document.createElement('div');
txt.setAttribute("class", "txt");
contenedor_main.append(txt);

let parrafos = document.createElement('div');
parrafos.setAttribute("class", "parrafos");
txt.append(parrafos);

let texto = document.createElement ('h1');
texto.setAttribute("class", "texto");
texto.innerText="Shift the overall look and feel by adding these wonderful touches to furniture in your home"; 
parrafos.append(texto);

let texto1 = document.createElement ('h2');
texto1.setAttribute("class", "texto1");
texto1.innerText="Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete."; 
parrafos.append(texto1);

let share = document.createElement('div');
share.setAttribute("class", "share");
parrafos.append(share)

let img_nombre_fecha=document.createElement('div');
img_nombre_fecha.setAttribute("class", "img_nombre_fecha");
share.append(img_nombre_fecha);

let img_pro = document.createElement('img');
img_pro.setAttribute("src", "images/avatar-michelle.jpg");
img_nombre_fecha.append(img_pro);

let nombre_fecha = document.createElement('div');
nombre_fecha.setAttribute("class", "nombre_fecha");
img_nombre_fecha.append(nombre_fecha);

let nombre = document.createElement ('div');
nombre.setAttribute("class", "nombre");
nombre.innerText="Michelle Appleton"; 
nombre_fecha.append(nombre);

let fecha = document.createElement('div');
fecha.setAttribute("class", "fecha");
fecha.innerText="28 Jun 2020";
nombre_fecha.append(fecha);

let compartir = document.createElement('img');
compartir.setAttribute("src", "images/Share.png", "id", "compartir");
share.append(compartir);

let contenedor_share = document.createElement ('div');
contenedor_share.setAttribute("id", "contenedor_share");
contenedor_main.append(contenedor_share);

let compartir_texto = document.createElement('span');
compartir_texto.setAttribute("class", "compartir_texto");
compartir_texto.innerText="SHARE";
contenedor_share.append(compartir_texto);

let logo_main = document.createElement('div');
logo_main.setAttribute("class", "logo_main");
contenedor_share.append(logo_main);

let logo_1 = document.createElement('img');
logo_1.setAttribute("src", "images/icon-facebook.png");
logo_main.append(logo_1);

let logo_2 = document.createElement('img');
logo_2.setAttribute("src", "images/icon-twitter.png");
logo_main.append(logo_2);

let logo_3 = document.createElement('img');
logo_3.setAttribute("src", "images/icon-pinterest.png");
logo_main.append(logo_3);


function cambiar() {
    compartir.src = "images/Share2.png";
    contenedor_share.style.display = "flex";
}
function cambiar2() {
    compartir.src = "images/Share.png";
    contenedor_share.style.display = "none";
}

compartir.addEventListener("mouseenter", ()=>{
    cambiar()
});
compartir.addEventListener("mouseleave", ()=>{
    cambiar2()
});


