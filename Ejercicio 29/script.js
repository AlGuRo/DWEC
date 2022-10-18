"use strict";

let number;
const baseDecimal = (number) => {
  while (isNaN(number)) {
    number = prompt("Introduce un número");
    if (!isNaN(number)) {  
      console.log("No es un número");
    }
  }
  return parseInt(number, 2);
};


document.getElementById("resultado").innerHTML = baseDecimal(number);
