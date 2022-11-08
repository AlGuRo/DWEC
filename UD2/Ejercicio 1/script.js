"use strict"


const button = document.querySelector("button");

button.addEventListener("click", () => {
    let ul = document.querySelector("ul");
    let num = Math.random();
    const li = document.createElement("li");
    li.textContent=num;
    ul.insertAdjacentElement("afterbegin", li); 

});

