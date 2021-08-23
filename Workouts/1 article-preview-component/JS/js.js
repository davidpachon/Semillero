let crear = function (tipo, clase, atributo){
    let crea = document.createElement(tipo);
    crea.setAttribute(clase, atributo);
    return crea;
}

let contenedor_main = crear("div", "class", "contenedor_main");

    let img_b = crear("div", "class", "img_b");

        let img_draw = crear("img", "src", "images/drawers.jpg");
        img_b.append(img_draw);
        contenedor_main.append(img_b);

            let txt = crear("div", "class", "txt");
                let derecha = crear("div", "class", "derecha");

                    let texto = crear("h1", "class", "texto");
                    texto.innerText="Shift the overall look and feel by adding these wonderful touches to furniture in your home"; 

                    let texto1 = crear("h1", "class", "texto1");
                    texto1.innerText="Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete."; 
                    
                derecha.append(texto, texto1);
            txt.append(derecha);
        contenedor_main.append(txt);


let share = crear("div", "class", "share");

    let img_nombre_fecha = crear("div", "class", "img_nombre_fecha");
    
        let img_pro = crear("img", "src", "images/avatar-michelle.jpg");
        img_nombre_fecha.append(img_pro);

            let nombre_fecha = crear("div", "class", "nombre_fecha");
                
                let nombre = crear("div", "class", "nombre");
                nombre.innerText="Michelle Appleton"; 
                
                let fecha = crear("div", "class", "fecha");
                fecha.innerText="28 Jun 2020";
                
                nombre_fecha.append(nombre, fecha);
            img_nombre_fecha.append(nombre_fecha);
    
    share.append(img_nombre_fecha);

    let contenedor_share = crear("div", "class", "contenedor_share");

                let compartir_texto = crear("span", "class", "compartir_texto");
                compartir_texto.innerText="SHARE";
                contenedor_share.append(compartir_texto);
                        
                let logo_main = crear("div", "class", "logo_main");
                let logo_1 = crear("img", "src", "images/icon-facebook.png");
                let logo_2 = crear("img", "src", "images/icon-twitter.png");
                let logo_3 = crear("img", "src", "images/icon-pinterest.png");
                logo_main.append(logo_1, logo_2, logo_3);

    contenedor_share.append(logo_main);
contenedor_main.append(contenedor_share);

    let compartir = crear("img", "src", "images/Share.png");
    share.append(compartir);        

derecha.append(share);

    
document.body.append(contenedor_main);

function Mouse_on() {
    compartir.src = "images/Share2.png";
    contenedor_share.style.display = "flex";
}
function Mouse_off() {
    compartir.src = "images/Share.png";
    contenedor_share.style.display = "none";
}
compartir.addEventListener("mouseenter", Mouse_on);
compartir.addEventListener("mouseleave", Mouse_off);