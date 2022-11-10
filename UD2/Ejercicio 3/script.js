"use strict";

let rows = 10;
let columns = 10;

const button = document.querySelector("button");

//Populates table
button.addEventListener("click", (event) => {
  let number = 1;
  let table = document.querySelector("table");
  for (rows; rows >= 0; rows--) {
    let tr = document.createElement("tr");
    for (columns; columns >= 0; columns--) {
      let td = document.createElement("td");
      td.innerHTML = number;
      tr.appendChild(td);
      number++;
    }
    table.appendChild(tr);
    
  }
  
 



});
