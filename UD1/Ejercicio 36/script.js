"use strict";

let numbers = [];
let number;

const altoBajo = () => {
  do {
    number = prompt("Introduce números, caracteres para terminar");
    if (!isNaN(number)) {
      numbers.push(number);
    }
  } while (!isNaN(number));
  
  numbers.sort();

  return "Bajo: " + numbers[0] + "Alto: " + numbers.pop();
};

document.getElementById("resultado").innerHTML = altoBajo();
