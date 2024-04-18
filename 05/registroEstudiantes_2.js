function nombreEstudiante(){
    nombre = prompt("Ingrese el nombre del estudiante: ");
    return nombre;
}

function ctnNotas(){
    ctn = Number(prompt("Ingrese la cantidad de notas: "));
    return ctn;
}

function notas(){
    notas = [];
    cantidadDeNotas = ctnNotas();
    for(i=1; i<=cantidadDeNotas; i++){
        tmpNota = Number(prompt(`ingrese la nota #${i}: `));
        notas.push(tmpNota);
    }
    return notas;
}

function promedio(arregloNotas){
    sumaNotas = 0;
    for (i=0;i <arregloNotas.length;i++){
        sumaNotas = sumaNotas + arregloNotas[i];
    }
    promedio = sumaNotas / arregloNotas.length;
    return promedio;
}

function condicion(promedioNotas){
    estado =``;
    if(promedioNotas < 60){
        estado = 'Reprobado';
    }else if (promedioNotas > 75 && promedioNotas >= 60){
        estado = 'Aplazado'
    }else{
        estado = 'Aprobado';
    }
    return estado;
}

function main(){
    nombre = nombreEstudiante();
    listaNotas = notas();
    promedioNotas = promedio(listaNotas);
    estadoAlumno = condicion(promedioNotas);
    alert(`El Nombre del estudiante ${nombre}, obtuvo un promedio de ${promedio} y su condicion es de ${estado} `);
}

main();