"use strict";
const check = (cadena) => {
  let regex = /^[md].*[ao]$/gi;
  if (cadena.match(regex)) {
    document.getElementById("resultado").innerHTML =
      "Empieza por m/d y termina por a/o";
    return true;
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