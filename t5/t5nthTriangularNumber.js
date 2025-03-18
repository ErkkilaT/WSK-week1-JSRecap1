'use strict';
const n = prompt('gief nummero:');
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum += i;
}
document.querySelector(
  '#target'
).innerHTML = `The Triangular number of ${n} is ${sum}`;
