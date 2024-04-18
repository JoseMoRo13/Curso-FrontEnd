// app para calcular el IMC

let peso = parseFloat(prompt('Por favor ingrese su peso: '));
let altura = parseFloat(prompt('Por favor ingrese su altura: '));
let indice = `su IMC es: `;
let resultado = ``;

indice = (peso/(altura*altura));

if (indice < 18.5){
    resultado = ` Su IMC es inferior al normal.`;
}else if (indice >= 18.5 && indice < 25){
    resultado = ` Su IMC es normal.`;
}else if (indice >=25 && indice < 30){
    resultado = ` Su IMC es superior al normal.`;
}
else {
    resultado = ` Obesidad`;
}

let mensaje = (`Su IMC es: ` + indice + resultado);
alert (mensaje);
