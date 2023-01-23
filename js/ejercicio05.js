document.body.addEventListener("click", mostrar);

function mostrar(evento){
  if(evento.target.tagName !== "H3"){
    return ;
  }
  document.getElementById("resultado").innerHTML = "Has elegido " + evento.target.childNodes[0].nodeValue.trim() + " que se imparte en turno de " + evento.target.parentNode["id"] + ".\n Los nº de grupos que se imparten son " + evento.target.nextElementSibling.childElementCount + ": " + imprimirHijos(evento.target);
}

function imprimirHijos(padre) {
  let hijos = "";
  for (let i = 0; i < padre.nextElementSibling.childElementCount; i++) {
    if(padre.nextElementSibling.childElementCount -2 === i){
      hijos += padre.nextElementSibling.children[i].childNodes[0].nodeValue + " y ";

    } else if (padre.nextElementSibling.childElementCount-1 === i){
      hijos += padre.nextElementSibling.children[i].childNodes[0].nodeValue + ".";

    }else{
      hijos += padre.nextElementSibling.children[i].childNodes[0].nodeValue + ", ";

    }
    
  }
  return hijos;
}

