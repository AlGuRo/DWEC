
let max;
let min;
let numbers = [];

do {

  min = parseInt(prompt("Introduce el mínimo")) + 1;
  max = prompt("Introduce el máximo");

} while ((isNaN(min) || isNaN(max)));

for (let i = min; i < max; i++) {
  numbers.push(i);
}
document.getElementById("resultado").innerHTML = numbers;
