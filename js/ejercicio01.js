const color = document.getElementById("color");
const boton = document.getElementById("cambiarColor");

//al pulsar el botón busca el elemento h1 y le cambia el color al seleccionado
boton.addEventListener("click", ()=>{
    document.getElementsByTagName("h1")[0].style.color = color.value;
})