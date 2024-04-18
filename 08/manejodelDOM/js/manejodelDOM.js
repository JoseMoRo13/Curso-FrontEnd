let titulo = document.getElementById('titulo');

let botonCambiar = document.getElementById('botonCambiar');

let parrafo = document.getElementById('parrafo');

botonCambiar.addEventListener('click',function(){
    titulo.textContent = 'Me cambiaron a travez del DOM';
    titulo.style.color = 'blue';
    parrafo.textContent = 'Ahora soy un parrafo mas grande y gordo';
    parrafo.style.color = 'white';
    parrafo.style.fontSize = '25px';
    parrafo.style.background = 'green';

});//addEventListener: es un escuchador que indica al navegador que este atento a la interacción del usuario.

document.getElementById('miBoton').addEventListener('click',function(event){
    alert('Dije que no presionara')
})