"use strict";

//Arrow function
const dibujar = (caracter) => {
  let sierra = "";
  
  if (caracter.length == 1) {
    let arrayCaracteres = [];
    let iteraciones = prompt("Iteraciones: ");
    //Rellenamos el array
    for (let i = 0; i < iteraciones; i++) {
      arrayCaracteres.push(caracter.toUpperCase());
    }
    for (let i = 0; i < iteraciones; i++) {
      sierra += arrayCaracteres + "\n"  
      arrayCaracteres.pop();
    }
    console.log(sierra);
  }
};
