"use strict";

const checkPatron = (cadena, patrones) => {
  let result = [];

  patrones.map((patron) => {
    let matches = 0;
    for (let i = 0; i < cadena.length; i++) {
      let construct = cadena.substr(i, patron.length);

      if (construct === patron) {
        matches++;
      }
    }
    result.push(patron + " se repite " + matches + " veces.");
  });

  return result;
};

console.log(checkPatron("1010101", ["101", "10101", "0101"]));
