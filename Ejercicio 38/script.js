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

const ascDesc = () => {
  let numbers = pedirNumeros().sort();
  let reverse = numbers.reverse();
  resultado.push(numbers);
  resultado.push(reverse);

  return "Ascendente: " + resultado[0] + " <br> Descendente: " + resultado[1];
};


document.getElementById("resultado").innerHTML = ascDesc();
