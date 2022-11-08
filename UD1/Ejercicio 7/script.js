let number;
let numbers = [];

do {

  number = parseInt(prompt("Introduce un número"));

} while (isNaN(number));

for (let i = number; i != 1; i--) {
  if (number % i == 0) {
    numbers.push(i);
  }
}
numbers.push(1);
numbers.reverse();  
document.getElementById("resultado").innerHTML = numbers;
