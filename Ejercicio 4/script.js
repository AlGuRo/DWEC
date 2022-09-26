
let numbers = [];
let number;
do {
  number = prompt("Introduce un número positivo, uno negativo para terminar.");
  numbers.push(number);

} while (parseInt(number) >= 0);
numbers.pop();
//Suma
let suma = 0;
let producto = 1;
for (let i = 0; i < numbers.length; i++) {
  suma += parseInt(numbers[i]);
  producto = producto * parseInt(numbers[i]);
}
document.getElementById("suma").innerHTML = "La suma de los números es: " + suma;
document.getElementById("producto").innerHTML = "El producto de los números es: " + producto;
document.getElementById("media").innerHTML = "La media de los números es: " + suma / numbers.length;
