"use strict";

//Arrow function
const nif = (number) => {
  let dni_regex = /^\d{8}[a-zA-Z]$/;
  let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
  if (number.match(dni_regex)) {
    let letra = letras.charAt( parseInt( number, 10 ) % 23 );
    if (letra === number.charAt(8)) {
      document.getElementById("resultado").innerHTML = "El DNI: " + number + " es correcto";
      
    }else{
      document.getElementById("resultado").innerHTML = "El DNI: " + number + " no es correcto";

    }
  }else{
    document.getElementById("resultado").innerHTML = "Introduce un DNI válido";

  }
   
};
