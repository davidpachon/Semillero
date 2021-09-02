const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything',
'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function quitar(nombre){
    
    return nombre.replace(/(a |the |an)/i,'').trim();
    //recive 2 parametros, el primero es para buscar y es segundo por que se va a cambiar y los vuelve insensibles a mayusculas
    //trim quita los espacios de los lados pero no los de dentro de la oracion (ho la)
}

//sort() nos ordena los elementos ((a,b)=>b-a)ordena
//const bandsOrdenado = bands.sort(function(a,b){//forma 1
//    if(quitar(a)>quitar(b)){
//        return 1;
//    }
//    return -1;
//});

const bandsOrdenado = bands.sort((a,b)=>quitar(a)>quitar(b)?1:-1);//forma 2

//map recorrer cada elemento y aplicar lo que uno le mande
document.querySelector("#bands").innerHTML = 
bandsOrdenado.map(elemento=>`<li>${elemento}</li>`).join("");

//join lo que hace es que el puede unir todos los elementos de un array en un 
//string y el separador seria lo que uno le manda por parametro

