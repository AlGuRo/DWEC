"use strict";

//Se asignan e iteran los parrafos para anadirles el evento mouseover
let coord = document.getElementById("coord");

coord.addEventListener("mousemove", (onmousemove = (result) => {
    coord.innerHTML = "X:" + result.clientX + " Y:" + result.clientY;
  })
);
