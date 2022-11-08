let a;
let b;

do {
    
    a = prompt("Numero a:");
    b = prompt("Numero b:");
    
} while ((isNaN(a) || isNaN(b)) || b === 0 || a == 0);

let c = parseInt(b) - parseInt(a);
if (c < 0) {
    document.getElementById("resultado").innerHTML = a + " es mayor que " + b;
}else if (c > 0) {
    document.getElementById("resultado").innerHTML = a + " es menor que " + b;
}else if (c === 0) {
    document.getElementById("resultado").innerHTML = a + " es igual a " + b;
}