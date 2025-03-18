'use strict';
const tempInC = +prompt('Give temperature in °C');
let tempInF = (tempInC * 9) / 5 + 32;
let tempInK = tempInC + 273;
document.querySelector(
  '#target'
).innerHTML = `${tempInC} °C is ${tempInF} °F and ${tempInK} °K`;
