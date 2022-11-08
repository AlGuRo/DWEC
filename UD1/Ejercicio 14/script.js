"use strict";

//Arrow function
const descuento = (number) => {
  let descuento = prompt("Descuento (%): ");
  let result = (descuento / 100) * number;
   
  document.getElementById("resultado").innerHTML =
    "El monto final es de " + ( number - result );
};
