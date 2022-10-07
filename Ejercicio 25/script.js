"use strict";

//Arrow function
const capicua = (cadena) => {
  let reversed = cadena.toLowerCase().split("").reverse().join();
  reversed = reversed.replace(/[\W]/g,"")
  if (cadena.toLowerCase() == reversed) {
    document.getElementById("resultado").innerHTML = "Es un número capicúa";
    return true;
  }else{
    document.getElementById("resultado").innerHTML = "";
    return false;
  }
};
