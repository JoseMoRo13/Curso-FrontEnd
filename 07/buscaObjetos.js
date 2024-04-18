let usuarios = [
    {id:1, nombre: "Juan", edad: 35},
    {id:2, nombre: "Pedro", edad: 42},
    {id:3, nombre: "Jose", edad: 25}
];

let usuarios2 = [
    {id:1, nombre: "Juan", edad: 35},
    {id:2, nombre: "Pedro", edad: 42},
    {id:3, nombre: "Jose", edad: 25}
];

let usuarioBuscado2 = usuarios.find(function(usuario){
    return usuario.id === 3;
});

console.log(usuarioBuscado2);

let usuariosMayores25 = [];

for (i=0; i<usuarios.length; i++){
    if(usuarios[i].edad > 25){
        usuariosMayores25.push(usuarios[i]);
    }
};

console.log(usuariosMayores25);

//*hacer una funcion que reciba el id de un usuario y devuelva la informacion del usuario. Si el usuario no existe debe de decir SIN USAR .find

let usuarioBuscado = null;
function buscarUsuario(id,arreglo){
    for (i=0; i<arreglo.length; i++){
        if (arreglo[i].id === id){
            usuarioBuscado = arreglo[i];
            break;
        }else{
            console.log('usuario no encontrado');
        }
    }
    console.log(usuarioBuscado);
};

buscarUsuario(3,usuarios);

let mayores25 = usuarios.filter(function(usuario){
    return usuario.edad > 25;
})
console.log(mayores25);