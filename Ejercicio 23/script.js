"use strict";

//Arrow function
const contarOcurrencias = (cadena) => {

  let reversed = cadena.toLowerCase().split("").reverse().join();
  reversed = reversed.replace(/[\W]/g,"")

  if (cadena.toLowerCase() == reversed) {
    document.getElementById("resultado").innerHTML =
      "Es un palíndromo";

    return true;
  }else{
    return false;
  }
};
