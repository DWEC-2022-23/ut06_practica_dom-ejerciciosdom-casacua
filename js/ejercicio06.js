let listDiv = "";
let listUl = "";
let lis = "";
let toggleList = "";
let descriptionInput = "";
let descriptionP = "";
let descriptionButton = "";
let addItemInput = "";
let addItemButton = "";


 window.addEventListener("load",iniciar);
 function iniciar(){
  listDiv = document.querySelector('.list');
  listUl = listDiv.querySelector('ul');
  lis = listUl.children;
  toggleList = document.getElementById('toggleList');
  descriptionInput = document.querySelector('input.description');
  descriptionP = document.querySelector('p.description');
  descriptionButton = document.querySelector('button.description');
  addItemInput = document.querySelector('input.addItemInput');
  addItemButton = document.querySelector('button.addItemButton');

  for (let i = 0; i < lis.length; i += 1) {
     attachListItemButtons(lis[i]);
    }
  listUl.addEventListener('click', crearbotones); 
  toggleList.addEventListener('click', MostrarOcultarLista);
  descriptionButton.addEventListener('click', CambiarTextoLista); 
  addItemButton.addEventListener('click', AñadirElemento); 
}
 
 function attachListItemButtons(li) {
   let subir = document.createElement('button');
   subir.className = 'subir';
   subir.textContent = 'subir';
   li.appendChild(subir);

   let bajar = document.createElement('button');
   bajar.className = 'bajar';
   bajar.textContent = 'bajar';
   li.appendChild(bajar);  

   let borrar = document.createElement('button');
   borrar.className = 'borrar';
   borrar.textContent = 'borrar';
   li.appendChild(borrar);
 }

 function crearbotones(event) {
  // Realiza las acciones de los botones subir, borrar y bajar para los elementos de la lista
    let elemento = event.target.parentElement;
    let opcion = event.target.className;

    switch (opcion) {
      case "borrar":
        elemento.remove();
        break;
      case "bajar":
        (elemento.nextElementSibling !== null)? elemento.before(elemento.nextElementSibling): elemento;
        break;
      case "subir":
        (elemento.previousElementSibling !== null)? elemento.after(elemento.previousElementSibling): elemento;
        break;
      default:
        break;
    }
 }

 function MostrarOcultarLista(){
  // Muestra u oculta la información de las cosas que son violeta (listDiv)
    document.getElementsByClassName('list')[0].classList.toggle("ocultar");
 }
 function CambiarTextoLista(){
  //Modifica  el texto de la lista (descriptionP) con el valor del input (descriptionInput).
  // Inicialmente COSAS QUE SON VIOLETA
  document.getElementsByClassName("description")[0].innerHTML = document.getElementsByClassName("description")[1].value;
 }
 function AñadirElemento(){
  //Añade un nuevo elemento a la lista con el valor del input (addItemInput). 
  //Recuerda que el elemento tendrá que tener sus botones de subir, bajar y borrar.
    listUl = listDiv.querySelector('ul');
    const nuevoLi = document.createElement("li");
    const nuevoTexto = document.createTextNode(document.getElementsByClassName("addItemInput")[0].value);
    nuevoLi.appendChild(nuevoTexto);
    listUl.appendChild(nuevoLi);
    let lis = listUl.children;
    attachListItemButtons(lis[lis.length-1]);
 }


