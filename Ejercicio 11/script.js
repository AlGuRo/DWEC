"use strict";

//Arrow function
// const esParImpar = (number) => {
//   if (number.value % 2 == 0) {
//     document.getElementById("resultado").innerHTML =
//         "El número: " + number.value + " es par";
//   }else{
//     document.getElementById("resultado").innerHTML =
//         "El número: " + number.value + " es impar";
//   }
// };

//Function
const esParImpar = function (number) {
  if (number.value % 2 == 0) {
    document.getElementById("resultado").innerHTML =
      "El número: " + number.value + " es par";
  } else {
    document.getElementById("resultado").innerHTML =
      "El número: " + number.value + " es impar";
  }
};
