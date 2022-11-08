"use strict"

const button = document.querySelector("button");

button.addEventListener("click", () => {
    let ul = document.querySelector("ul");
    let num = Math.random();
    const li = document.createElement("li");
    li.style.color = "rgb("+ Math.random()* 256+"," + Math.random()* 256 +","+ Math.random()* 256 +")"; 
    
    li.textContent=num;
    ul.insertAdjacentElement("afterbegin", li); 

});

