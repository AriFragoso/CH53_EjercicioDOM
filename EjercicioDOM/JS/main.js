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
    
});