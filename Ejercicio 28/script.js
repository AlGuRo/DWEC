"use strict";

let cadenas = [];
let cadena = "";

do {
  cadena = prompt("Introduce un carácter alfanumérico, número para terminar:");
  if (isNaN(cadena)) {
    cadenas.push(cadena);
  }
  
} while (isNaN(cadena));

const cadenaCorta = (cadenas) => {
  let shortest = "";
  cadenas.forEach(element => {
    if (element.length < shortest) {
      shortest = element;
    }
  })

  return shortest;
};

document.getElementById("cadenaCorta").innerHTML = cadenaCorta(cadenas);

const cadenaLarga = (cadenas) => {
  let wider = "";
  cadenas.forEach(element => {
    if (element.length < wider) {
      wider = element;
    }
  })

  return wider;
};

document.getElementById("cadenaLarga").innerHTML = cadenaLarga(cadenas);


const cadenaA = (cadenas) => {
  let cadena = "";
  cadenas.forEach(element => {
    if (element.includes("a")) {
      element.replaceAll(new RegExp("[^a]", "g"), "");
      if (element > cadena) {
        cadena = element;
      }
    }
  });
  return cadena;
}

document.getElementById("cadenaA").innerHTML = cadenaA(cadenas);


const hayB = (cadenas) => {
  let i = 0;
  cadenas.forEach(element => {
    if (element.includes("b")) {
      i++;
      console.log("Ejercicio 28 d: " + element);
    }
  });

}

hayB(cadenas);
