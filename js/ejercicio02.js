const boton = document.getElementById("boton");
const parrafos = document.getElementsByTagName("p");

boton.addEventListener("click", ()=>{
    console.log(parrafos[0].parentElement.style.background)
    if (parrafos[0].parentElement.style.background === "black") {
        parrafos[0].parentElement.style.background = "white";
        for(let i = 0; i < parrafos.length; i++) {
            parrafos[i].style.color = "black";
        };
        boton.innerHTML = "Fondo Oscuro";
    }else{
        parrafos[0].parentElement.style.background = "black";
        for(let i = 0; i < parrafos.length; i++) {
            parrafos[i].style.color = "white";
        };
        boton.innerHTML = "Fondo Claro";
    }
})
