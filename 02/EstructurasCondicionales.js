/*Crear un programa en js que dadas tres calificaciones, calcule el promedio y determine la condición del estudiante*/
/*Aprobado si la nota es mayor a 75, Reprobado si la nota es menor a 60 y aplazado si la nota es mayor a 60 pero menr a 75*/

let nota1 = 75;
let nota2 = 85;
let nota3 = 55;
let promedio = 0;
let mensaje = "La condicion del estudiante es ";
let estado = " ";

promedio = (nota1 + nota2 + nota3) / 3;

/*Version 1*/

if (promedio >= 75){
    console.log(`el estudiante aprobó el curso`);
}else{
    if(promedio >= 60 && promedio < 75){
        console.log(`El estudiante esta aplazado`);
    }else{
        console.log(`El esteudiante Reprobo el curso`);
    }
}

/*Version2*/

if(promedio >= 75){
    estado = "Aprobado";
}else if(promedio >= 60 && promedio < 75){
    estado = "Aplazado";
}else{
    estado = "Repreobado";
}
console.log(mensaje+estado);