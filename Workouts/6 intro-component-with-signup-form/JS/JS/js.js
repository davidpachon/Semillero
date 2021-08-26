let crear = function(elemento, tipo, usuario) {
    let creador = document.createElement(elemento);
    creador.setAttribute(tipo, usuario);
    return creador;
}
let form = function(tipo, place) {
    let creador = document.createElement("input");
    creador.type = tipo;
    creador.placeholder = place;
    creador.setAttribute("class", "campos");
    creador.required;
    return creador;
}


let main = crear("main");
document.body.append(main);

let texto = crear("div", "class", "texto");

let texto1 = crear("span", "class", "texto1");
texto1.innerHTML = "Learn to code by watching others <br>";
let texto2 = crear("span", "class", "texto2");
texto2.innerHTML = "See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.";
texto.append(texto1, texto2);

main.append(texto);


let Try_free = crear("div", "class", "Try_free");
Try_free.innerHTML = "<txt><strong>Try it free 7 days</strong> then $20/mo. thereafter</txt>";
main.append(Try_free);


let contenedor_form = crear("div", "class", "contenedor_form");
let formulario = crear("form");


contenedor_form.append(formulario);
main.append(contenedor_form);
