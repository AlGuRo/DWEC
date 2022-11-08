"use strict";

//Arrow function
const repetir = (cadena) => {
  let iter = prompt("Iteraciones: ");
  let palabras = [];

  for (let i = 0; i < iter; i++) {
    palabras.push(cadena);
  }

  document.getElementById("resultado").innerHTML = "< " + palabras + " >";
  return palabras;

};

