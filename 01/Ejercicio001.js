/*Hay un tren que se desplaza a una velocidad de 55Km/h. Para llegar a su destino demora 45min. Desarrolle un programa en JS que indique en consola la distancia recorrida por el tren en millas*/

let velocidad = 55;
let tiempo = 0.75; // 45min = 0.75, por que 60min = 100%, 45min = 75% //

let distancia = velocidad * tiempo;

const milla = 1.6;

let distanciaM = distancia/milla;

console.log("La distancia recorrida por el tren es de:", distanciaM);