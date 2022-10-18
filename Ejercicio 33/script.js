"use strict";

let vocales = ["a", "e", "i", "o", "u"];
let regex = /^[a-z]+$/gi;

const vocalConsonante = () => {
  let cadena;
  let nVocales = 0;
  let nConsonantes = 0;
  do {
    cadena = prompt("Introduce caracteres alfanuméricos");
    if (!cadena.match(regex)) {
      console.log("Introduce sólo carácteres alfanuméricos");
    }
  } while (!cadena.match(regex));

  cadena.split("").map((currentValue) => {
    if (vocales.includes(currentValue)) {
      nVocales += 1;
    } else {
      nConsonantes += 1;
    }
  });

  return "Vocales: " + nVocales + "Consonantes: " + nConsonantes;
};

document.getElementById("resultado").innerHTML = vocalConsonante();
