"use strict";

//Arrow function
const contarCaracteres = (cadena) => {
  document.getElementById("resultado").innerHTML =
    "La cadena contiene: " + cadena.length + " carácteres";
  return cadena.length;
};
