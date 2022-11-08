"use strict";

let resultado = [];

const pedirNumeros = () => {
  let numbers = [];
  let number;

  do {
    number = prompt("Introduce números, caracteres para terminar");
    if (!isNaN(number)) {
      numbers.push(parseInt(number));
    }
  } while (!isNaN(number));
  return numbers;
};

const altoBajo = () => {
  let numbers = pedirNumeros();

  resultado.push(numbers.filter((n) => n % 2 === 0));
  resultado.push(numbers.filter((n) => n % 2 !== 0));

  return "Pares: " + resultado[0] + " <br> Impares: " + resultado[1];
};


document.getElementById("resultado").innerHTML = altoBajo();
