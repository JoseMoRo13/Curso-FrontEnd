let nota1 = Number(prompt("ingrese la nota 1: "));
let nota2 = parseFloat(prompt("ingrese la nota 2: "));
let nota3 = parseFloat(prompt("ingrese la nota 3: ")); /*si es un numero lo convierte, caso contrario (caracter (texto)) lo devuelve al NaN (Not a Number)*/
let mensaje = "La condicion del estudiante es: ";
let estado = " ";
let divMensaje = document.getElementById("mensaje");

sumaNotas = (nota1 + nota2 + nota3);
promedio = sumaNotas/ 3;

if(promedio >= 75){
    estado = "Aprobado";
}else if(promedio >= 60 && promedio < 75){
    estado = "Aplazado";
}else{
    estado = "Reprobado";
}
console.log(`la suma de las notas es ${sumaNotas}`);
console.log(`promedio calculado ${sumaNotas}`);
//console.log(mensaje+estado);
//console.log(respuesta);

let respuesta = mensaje+estado;
divMensaje.innerHTML = respuesta;

alert(mensaje+estado);

