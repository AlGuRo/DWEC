"use strict";

//Arrow function
const contarOcurrencias = (cadena) => {

  let reversed = cadena.toLowerCase().split("").reverse().join();
  reversed = reversed.replace(/[\W]/g,"");
  reversed = reversed.replaceAll(/á/g, "a");
  reversed = reversed.replaceAll(/é/g, "b");
  reversed = reversed.replaceAll(/í/g, "c");
  reversed = reversed.replaceAll(/ó/g, "d");
  reversed = reversed.replaceAll(/ú/g, "e");

  if (cadena.toLowerCase() == reversed) {
    document.getElementById("resultado").innerHTML =
      "Es un palíndromo";

    return true;
  }else{
    document.getElementById("resultado").innerHTML =
      "";
    return false;
  }
};
