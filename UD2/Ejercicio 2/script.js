"use strict";

let number = 1;

let table = document.querySelector("table");
const bCrear = document.getElementById("create");
const bCalcular = document.getElementById("calcular");

//Populates table
bCrear.addEventListener("click", () => {
  for (let i = 0; i < 100; i++) {
    let tr = document.createElement("tr");
    for (let j = 0; j < 100; j++) {
      let td = document.createElement("td");
      td.innerHTML = number;
      tr.appendChild(td);
      number++;
    }
    table.appendChild(tr);
  }
});

bCalcular.addEventListener("click", () => {
  for (const tr of table.children) {
    for (const td of tr.children) {
      if (casiPrimo(td.textContent)) {
        td.style.backgroundColor = "YELLOW";
      }
    }
  }
});

const casiPrimo = (number) => {
  let cont = 0;
  for (let i = number - 1; i >= 2; i--) {
    if (number % i === 0) {
      cont++;
    }
  }
  if (cont === 1) {
    return true;
  } else {
    return false;
  }
};
