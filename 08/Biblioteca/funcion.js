document.getElementById('buscaLibro').addEventListener('submit',function(e){
  e.preventDefault();

  const fechaInicio = document.getElementById('fechaInicio').value;
  const fechaFin = document.getElementById('fechaFin').value;

  let rango = [];

  for(i=0;i<biblioteca.length;i++){
    if(biblioteca[i].añoDePublicacion >= fechaInicio && biblioteca[i].añoDePublicacion<= fechaFin){
    rango.push(biblioteca[i])}
  }

   for(i=0;i<rango.length;i++){
    alert(/*rango[i].id + "\n" +*/ "Libro: " + rango[i].titulo + "\n" + "Autor: " + rango[i].autor + "\n" + "Publicado en: " + rango[i].añoDePublicacion);
  
    }
    
  });