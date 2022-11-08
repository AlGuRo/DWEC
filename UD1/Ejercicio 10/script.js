"use strict";

//Arrow function
const esPrimo = (number) => {
  let value = Math.abs(parseInt(number.value));
  for (let i = 2; i < value - 1; i++) {
    if (value % i == 0) {
      document.getElementById("resultado").innerHTML =
        "El número: " + number.value + " no es primo";
      return false;
    }
  }
  document.getElementById("resultado").innerHTML =
    "El número: " + number.value + " es primo";
  return true;
};

//Function
// const esPrimo = function (number) {
//   let value = Math.abs(parseInt(number.value));
//   for (let i = 2; i < value - 1; i++) {
//     if (value % i == 0) {
//       document.getElementById("resultado").innerHTML =
//         "El número: " + number.value + " no es primo";
//       return false;
//     }
//   }
//   document.getElementById("resultado").innerHTML =
//     "El número: " + number.value + " es primo";
//   return true;
// };
