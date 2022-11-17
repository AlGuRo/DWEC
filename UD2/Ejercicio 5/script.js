"use strict";

//Se asignan e iteran los parrafos para anadirles el evento mouseover
// let coord = document.getElementById("coord");

// coord.addEventListener("mousemove", (onmousemove = (result) => {
//     coord.innerHTML = "X:" + result.clientX + " Y:" + result.clientY;
//   })
// );

const pintarCoordenadas = (e) => {
  let coord = document.getElementById("coord");
  coord.textContent = "X:" + e.clientX + " Y:" + e.clientY;
}


document.addEventListener("mousemove", pintarCoordenadas);

let letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P",
                  "D", "X", "B", "N", "J", "Z", "S", "Q", "V",
                  "H", "L", "C", "K", "E"];