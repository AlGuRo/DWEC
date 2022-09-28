let min;
let max;
let numbers = [];

do {

  min = parseInt(prompt("Introduce el mínimo")) + 1;
  max = prompt("Introduce el máximo");

} while ((isNaN(min) || isNaN(max)));

for (let i = min; i < max; i++) {
  if (i % 2 != 0) {
    numbers.push(i);
  }
}
document.getElementById("resultado").innerHTML = numbers;
