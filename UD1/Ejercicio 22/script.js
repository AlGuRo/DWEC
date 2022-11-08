"use strict";

//Arrow function
const contarOcurrencias = (cadena) => {
  let palabra = prompt("Buscar: ");

  let count = 0;
  cadena.split(" ").forEach(element => {
    if (element.match(palabra)) {
      count++;
    }
    
  });
  document.getElementById("resultado").innerHTML = palabra + " existe " + count + " veces.";
  return count;
};
