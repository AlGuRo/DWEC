function suma() {
  let a = parseInt(document.getElementById("a").value);
  let b = parseInt(document.getElementById("b").value);

  document.getElementById("resultado").innerHTML = a + b;
  
}

function resta() {
  let a = parseInt(document.getElementById("a").value);
  let b = parseInt(document.getElementById("b").value);

  document.getElementById("resultado").innerHTML = a - b;
  
}

function mult() {
  let a = parseInt(document.getElementById("a").value);
  let b = parseInt(document.getElementById("b").value);
  
  document.getElementById("resultado").innerHTML = a * b;
  
}

function div() {
  let a = parseInt(document.getElementById("a").value);
  let b = parseInt(document.getElementById("b").value);

  document.getElementById("resultado").innerHTML = a / b;
  
}



