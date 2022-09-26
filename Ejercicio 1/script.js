let a = prompt("Numero a");
let b = prompt("Numero b");

let c = parseInt(b) - parseInt(a);
if (c < 0) {
    document.getElementById("resultado").innerHTML = a + " es mayor que " + b;
}else if (c > 0) {
    document.getElementById("resultado").innerHTML = a + " es menor que " + b;
}else if (c === 0) {
    document.getElementById("resultado").innerHTML = a + " es igual a " + b;
}
