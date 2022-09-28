let number;
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

do {

  number = parseInt(prompt("Introduce un número"));

} while (isNaN(number));

numbers.forEach(element => {
  document.getElementById("resultado").innerHTML += number +
                                                    " multiplicado por " +
                                                     element +
                                                     " es " +
                                                     (element * number) +
                                                      "<br />";
  
});






