"use strict";

//Se asignan e iteran los parrafos para anadirles el evento mouseover
let coord = document.getElementById("coord");

// const coordenadas = (event) => {
//   coord.innerHTML = "X: " + event.clientX + " Y: " + event.clientY;
// };

// document.addEventListener("mousemove", coordenadas);

const pintarCoordenadas = (e) => {
  let coord = document.getElementById("coord");
  coord.textContent = "X:" + e.clientX + " Y:" + e.clientY;
}


document.addEventListener("mousemove", pintarCoordenadas);