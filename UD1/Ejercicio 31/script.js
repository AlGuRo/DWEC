"use strict";

let regex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

const isDate = () => {
  let date;
  while (isNaN(date)) {
    date = prompt("Introduce una fecha ( '/' )");

    if (date.match(regex)) {
      return age(date);
    } else {
      console.log("No es una fecha válida");
    }
  }
};

const age = (bday) => {

  //Restamos fecha de nac con la fecha actual
  // let anac = new Date(bday.substr(4,8), bday.substr(2,4), bday.substr(0,1)).getFullYear();
  let x= bday;
  let anac = new Date(x);
  let age = new Date().getFullYear() - anac;

  // var mes = today.getMonth() - birthDate.getMonth();
  // if (mes < 0 || (mes === 0 && today.getDate() < birthDate.getDate())) {
  //     age--;
  // }
  return age;
}

document.getElementById("resultado").innerHTML = isDate();
