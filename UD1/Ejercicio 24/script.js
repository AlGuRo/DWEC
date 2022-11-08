"use strict";

//Arrow function
const replace = (cadena) => {
  let patron;
  do {
    patron = prompt("Introduce un patrón");
  } while (!isNaN(patron));
  let nCadena = cadena.replaceAll(patron, "");
  document.getElementById("resultado").innerHTML = nCadena;

  return nCadena;
};
