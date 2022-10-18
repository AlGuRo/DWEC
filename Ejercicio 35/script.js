"use strict";

const alCuadrado = () => {
  let numbers = [];
  let number;
  do {
    number = prompt("Introduce números, caracteres para terminar");
    if (!isNaN(number)) {
      numbers.push(parseInt((number)));
    }
  } while (!isNaN(number));
  
  numbers = numbers.map(n =>  n * n );

  return numbers;
};

document.getElementById("resultado").innerHTML = alCuadrado();
