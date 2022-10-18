"use strict";

let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gi;

const isMail = () => {
  let cadena;
  do {
    cadena = prompt("Introduce un email");
    if (!cadena.match(regex)) {
      console.log("Formato inválido");
    }
  } while (!cadena.match(regex));

  return "Email válido: " + cadena;
};

document.getElementById("resultado").innerHTML = isMail();
