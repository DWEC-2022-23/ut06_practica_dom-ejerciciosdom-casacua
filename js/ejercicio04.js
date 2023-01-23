const boton = document.getElementsByClassName("BotonAñadir");
const botonBorrar = document.getElementsByClassName("BotonBorrar");
const padre = document.getElementsByTagName("ul")[0];

boton[0].addEventListener("click", ()=>{
    const nuevoLi = document.createElement("li");
    const nuevoTexto = document.createTextNode(document.getElementsByClassName("AñadirElemento")[0].value);
    nuevoLi.appendChild(nuevoTexto);
    padre.appendChild(nuevoLi);
});

botonBorrar[0].addEventListener("click", ()=>{
    padre.removeChild(padre.lastElementChild);
});

botonBorrar[1].addEventListener("click", ()=>{
    padre.removeChild(padre.firstElementChild);
});