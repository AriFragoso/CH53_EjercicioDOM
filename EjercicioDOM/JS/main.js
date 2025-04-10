/*console.log(document.getElementById("encabezado1")); // "docuemnt" : Nos va a permitir entrar a los elementos HTML
                                                    //"getElementById" : Obtener el elemento por el id 
*/

let encabezado1 = document.getElementById("encabezado1");
let encabezado2 = document.getElementById("encabezado2");
let listas = document.getElementsByTagName("ul");
let elementos = document.getElementsByClassName("list-group-item");
let otroElemento = document.querySelector("ul>il"); //selector para CSS, toma el PRIMERO que encuentra
let otrosElemento = document.querySelectorAll("ul>il"); //todos
let btnMostrar = document.getElementById("btnMostrar");

let txtRFC = document.getElementById("txtRFC");
let txtCURP = document.getElementById("txtCURP");
let txtTelefono = document.getElementById("txtTelefono");


console.log(listas.length);//2
console.log(listas.item(1));

console.log(elementos.length);//10
console.log(elementos.item(2));

console.log("otroElemento", otroElemento);
console.log(otrosElemento.length);

let contador=0;
function modifica(){
    encabezado1.innerText = "Ejercicio DOM";//"innerText":Propiedad de la etiqueta que esta en el interior. Se puede LEER o se puede MODIFICAR
    console.log(encabezado1.innerText); 
    encabezado2.innerHTML = "DOM <em>Exercise</em>";
    console.log(encabezado2.innerText);
    encabezado3.innerHTML = ++contador;
}

btnMostrar.addEventListener("click", function(event){
    event.preventDefault(); //no hagas lo que haces por defecto
    console.log("Boton btnModificar presionado");

    //AGREGAR ELEMENTOS CREANDO VARIABLES 
    // FORMA 1

    let element = document.createElement("li");
    element.innerText="Otro item"; //Agrega  otro elemneto dentro de la lista 
    element.classList.add("list-group-item"); //Agregamos formato al elemento,que este dentro de un cuadro 

    let element2 = element.cloneNode(true); //.cloneNode: Clona el mismo contenido dentro de otra variable  
    let element3 = element.cloneNode(true);
    let element4 = element.cloneNode(true);
    
    listas.item(0).before(element);
    listas.item(0).prepend(element2);
    listas.item(0).append(element3);
    listas.item(0).after(element4);

    //AGREGAR ELEMENTOS CREANDO VARIABLES 
    // FORMA 2

    let element5 = element.cloneNode(true);
    let element6 = element.cloneNode(true);

    listas.item(1).insertAdjacentElement("afterbegin", element5);
    listas.item(1).insertAdjacentElement("beforeend", element6);

    // AGREGAR ELEMENTOS SIN VARIABLES
    listas.item(1).insertAdjacentHTML("beforebegin",
        `<li class="list-group-item">beforebegin item</li>`);

    listas.item(1).insertAdjacentHTML("afterbegin",
        `<li class="list-group-item">afterbegin item</li>`);

    listas.item(1).insertAdjacentHTML("beforeend",
        `<li class="list-group-item">beforeend item</li>`);
    
    listas.item(1).insertAdjacentHTML("afterend",
        `<li class="list-group-item">afterend item</li>`);
    
});

//Se ejecita cuando termina de cargar todos loselementps de la página
window.addEventListener("load", function(event){
    console.log("Se terminó de cargar la página");
}); //load


// Convertir de minusc a MAYUSC 
//blur -> cuando se sale del campo (pierde el foco)
/*txtRFC.addEventListener("blur", function (event){
    event.preventDefault();
    txtRFC.value = txtRFC.value.toUpperCase();
}); 

txtCURP.addEventListener("blur", function (event){
    event.preventDefault();
    txtCURP.value = txtCURP.value.toUpperCase();
}); */

//Automatizar los eventos de arriba con una FUNCIÓN para poderlo hacer mas facil y rápido para varios campos 
function txtToUpper(event){
    event.preventDefault();
    event.target.value = event.target.value.trim().toUpperCase(); //terget: Se aplica el evento al compo donde esta
                                                                //trim: No toma los espacios 
}
txtRFC.addEventListener("blur", txtToUpper);
txtCURP.addEventListener("blur", txtToUpper);


txtTelefono.addEventListener("blur", function (event){
    event.preventDefault();
    txtTelefono.value = txtTelefono.value.trim().slice(0,10);
}); //txtTelefono

