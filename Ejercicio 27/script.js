"use strict";

let numbers = [];
let number = 0;

while (!isNaN(number)) {
  number = parseInt(
    prompt("Introduce un número, carácter alfanumérico para terminar:")
  );
  if (!isNaN(number)) {
    numbers.push(number);
  }
}

//Arrow function
const imprimeNElementos = (numbers) => {
  return "El vector contiene: " + numbers.length + " elementos.";
};

document.getElementById("imprimeNElementos").innerHTML =
  imprimeNElementos(numbers);

const paresImpares = (numbers) => {
  let pares = [];
  let impares = [];

  numbers.forEach((element) => {
    if (element % 2 == 0) {
      pares.push(element);
    } else {
      impares.push(element);
    }
  });

  return (
    "El vector contiene: " +
    pares +
    " elementos pares y " +
    impares +
    " impares."
  );
};

document.getElementById("paresImpares").innerHTML = paresImpares(numbers);

const sumaProd = (numbers) => {
  let suma = 0;
  let producto = 1;

  numbers.forEach((element) => {
    let number = parseInt(element);
    if (number < 0) {
      //Negativo
      suma += number;
    } else if (number > 0) {
      //Positivo
      producto *= number;
    }
  });

  return (
    "La suma de los números negativos es: " +
    suma +
    " El producto de los números positivos es: " +
    producto
  );
};

document.getElementById("sumaProd").innerHTML = sumaProd(numbers);

const primo = (number) => {
  let value = Math.abs(parseInt(number.value));
  for (let i = 2; i < value - 1; i++) {
    if (value % i == 0) {
      return false;
    }
  }
  return true;
};

const esPrimo = (numbers) => {
  let primos = [];

  if (numbers.includes(1)) {
    primos.push(1);
  }
  if (numbers.includes(2)) {
    primos.push(2);
  }
  if (numbers.includes(3)) {
    primos.push(2);
  }

  numbers.forEach((element) => {
    if (primo(element)) {
      primos.push(number);
    }

    // for (let i = 2; i < Math.abs(element) - 1; i++) {
    //   if (Math.abs(element) % i == 0) {
    //     continue;
    //   }
    //   esPrimo = true;
    // }
  });

  return ( "Los números primos son: " + primos);
};

document.getElementById("esPrimo").innerHTML = esPrimo(numbers);

const posicionPar = (numbers) => {
  let posicionPar = [];

  for (let i = 0; i < numbers.length; i++) {
    if (i % 2 == 0) {
      posicionPar.push(numbers[i]);
    }
  }

  return posicionPar;
};

document.getElementById("posicionPar").innerHTML =
  "Los números en posiciones pares son: " + posicionPar(numbers);

const menorMayor = (numbers) => {
  return "Mayor: " + Math.max(...numbers) + " Menor: " + Math.min(...numbers);
};

document.getElementById("menorMayor").innerHTML = menorMayor(numbers);

const ordenarDesc = (numbers) => {
  return numbers.sort((a, b) => b - a);
};

document.getElementById("ordenarDesc").innerHTML = ordenarDesc(numbers);

const mediaRara = () => {
  let suma = 0;

  numbers.forEach((element) => {
    suma += element - 1;
    suma += element;
    suma += element + 1;
  });

  return suma / numbers.length;
};

document.getElementById("mediaRara").innerHTML = mediaRara(numbers);

const search = (value) => {
  if (numbers.includes(parseInt(value))) {
    document.getElementById("buscar").innerHTML = value + " Existe en el array";
  } else {
    document.getElementById("buscar").innerHTML =
      value + " No existe en el array";
  }
};

/*
menorMayor"></p>
mediaRara"></p>
ordenarDesc"></p>
buscar"></p>

*/
