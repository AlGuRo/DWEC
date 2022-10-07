"use strict";

//Arrow function
const check = (cadena) => {
  let regexInicio = /^[md]/g;
  let regexFinal = /[ao]$/g;
  if (cadena.match(regexInicio)) {
    if (cadena.match(regexFinal)) {
      document.getElementById("resultado").innerHTML =
        "Empieza por m/d y termina por a/o";
        return true;
    }
  }

  document.getElementById("resultado").innerHTML = "";
  return false;


  // if (cadena.charAt(0) === "m" || cadena.charAt(0) === "d") {
  //   if (
  //     cadena.charAt(cadena.length - 1) === "a" ||
  //     cadena.charAt(cadena.length - 1) === "o"
  //   ) {
  //     document.getElementById("resultado").innerHTML =
  //       "Empieza por m/d y termina por a/o";
  //       return true;
  //   }
  // }
  //   document.getElementById("resultado").innerHTML = "";
  //   return false;
};
