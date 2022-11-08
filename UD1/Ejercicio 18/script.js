"use strict";

//Arrow function
const cortarCaracteres = (cadena) => {
  let number = prompt("¿Cuántos carácteres quieres?");
  let trunc = cadena.substr(0, number);
  document.getElementById("resultado").innerHTML = "Nueva cadena: " + trunc;
  return trunc;

};

