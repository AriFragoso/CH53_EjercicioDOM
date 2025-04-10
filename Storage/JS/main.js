
let encabezado1 = document.getElementsByTagName("h1").item(0);

if (localStorage.getItem("email")!=null){
    let email = localStorage.getItem("email");
    encabezado1.innerText = `Bienvenido de nuevo ${email}`;
    console.log(email);

    localStorage.removeItem("email"); //removeItem: Elimina solo un valor 
    localStorage.clear(); //clear: limpia todos los conjuntos de Clave/Valor

}else{
    //Guarda el correo electrónico en el navegador 
    localStorage.setItem("email", "persona@hotmail.com");
}
