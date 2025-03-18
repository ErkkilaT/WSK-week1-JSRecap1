'use strict';
console.log('jee');
const point1 = prompt('give point 1 in x,y format');
const point2 = prompt('give point 2 in x,y format');
const p1arr = point1.split(',');
const p2arr = point2.split(',');

let distance = Math.sqrt(
  (p1arr[0] - p2arr[0]) ** 2 + (p1arr[1] - p2arr[1]) ** 2
);
document.querySelector('#target').innerHTML =
  'distance between points is ' + distance;
