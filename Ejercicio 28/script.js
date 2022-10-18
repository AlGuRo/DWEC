"use strict";

let cadena = [];
let caracter = "";

while (isNaN(caracter)) {
  caracter = prompt("Introduce un carácter alfanumérico, número para terminar:");
  if (isNaN(caracter)) {  
    cadena.push(caracter);
  }
}

const cadenaCorta = (cadena) => {
  cadena.reduce((a, b) => a.length <= b.length ? a : b);
};

document.getElementById("cadenaCorta").innerHTML = cadenaCorta(cadena);
