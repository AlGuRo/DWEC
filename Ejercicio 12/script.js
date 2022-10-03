"use strict";

//Arrow function
const celsiusFarenheit = (number) => {

  let result = ( 9/5 * number ) +32;
  document.getElementById("farenheit").innerHTML = number + "ºC = " + result + "ºF";

};

const farenheitCelsius = (number) => {

  let result = ( number - 32 ) * 5/9;
  document.getElementById("celsius").innerHTML = number + "ºF = " + result + "ºC";
  
};
