let libro = {
    titulo: "El Hobbit",
    autor: "J.R.R Tolkien",
    publicado: 1937,
    disponibilidad: true,
};

console.log(libro.autor);

//simular que esta en prestamo

//libro.disponibilidad = false;
const prestaLibro = function(){
    libro.disponibilidad = false;
};
prestaLibro();

if(libro.disponibilidad){
    console.log(`El Libro ${libro.titulo} esta disponible y fue escrito po ${libro.autor} !!! `);
}else{
    console.log(`El libro ${libro.titulo} se encuentra en prestamo!!! `);
};

let biblioteca =[
    {titulo: 'El Hobbit', autor: 'J.R.R Tolkien', publicado: 1937, disponibilidad: true},
    {titulo: '1984', autor: 'George Orwell', publicado: 1949, disponibilidad: true},
    {titulo: 'La Fundacion', autor: 'Isaac Asimov', publicado: 1951, disponibilidad: true},
];

//console.log(biblioteca);

for(i=0; i<biblioteca.length;i++){
    console.log(biblioteca[i].autor);
};