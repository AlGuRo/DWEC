
let min = parseInt(prompt("Introduce el mínimo")) + 1 ;
let max = prompt("Introduce el máximo");
let numbers = [];

for (let i = min; i < max; i++) {
  numbers.push(i);
}
document.getElementById("resultado").innerHTML = numbers;
