"use strict";

//Arrow function
const invertir = (cadena) => {

  let reverse = "";
  for (let i = cadena.split("").length; i >= 0; i--) {
    reverse += cadena.charAt(i);
    
  }
  document.getElementById("resultado").innerHTML = reverse;
  return reverse;
};
