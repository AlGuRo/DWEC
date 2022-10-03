"use strict";

//Arrow function
const factorial = (number) => {
  let result = 1;

  for (let i = number; i > 1; i--) {
    result = result * i;
  }
  document.getElementById("resultado").innerHTML = "El factorial de " + number + " es " + result;
};
