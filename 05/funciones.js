// 01 funcion sin parametro
function saludo(){
    console.log('hola a todos');
}
saludo();

// 02 Funcion con parametro

function saludoDos(nombre){
    console.log(`hola ${nombre}, como esta?`);
}
saludoDos('Fernando');

// 03 funcion sin parametros que retornan valor

function saludoTres(){
    nombre = 'Fernando';
    saludo = `hola ${nombre}, como esta?`;
    return saludo;
}
// consolo.log(saludoTres);

variableUno = saludoTres();
console.log(variableUno);

function sumaDosValores(){
    a = 12;
    b = 13;
    c = a+b;
    return c;
}

let respuesta = sumaDosValores();
console.log(respuesta);

// 04 Funciones con parametros que retornan

function adicionarDosValores(valor1,valor2){
    resultado = valor1 + valor2
    return resultado;
}
respuesta = adicionarDosValores(25,45);
console.log(respuesta);

// clase 06

let sumaValores = 0;
console.log(sumaValores);

// 05 funciones sin parametros que retornan valor
function suma(){
    valor1 = 25;
    valor2 = 33;
    sumaValores = valor1 + valor2;
}
suma();

console.log(sumaValores);

//06 funciones con parametros que retornan valor

function sumaNumeros(a,b){
    sumaNumeros = a+b;
}

sumaNumeros(75,33);

console.log(sumaValores);