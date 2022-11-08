"use strict";

//Arrow function
const split = (cadena) => {
  let nCadena = cadena.split(',');
  document.getElementById("resultado").innerHTML = "Nueva cadena: " + nCadena;
  return nCadena;

};

