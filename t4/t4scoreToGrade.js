'use strict';
const score = prompt('Enter your score from 0 to 100');
let grade = 0;
if (score > 87) grade = 5;
else if (score > 75) grade = 4;
else if (score > 63) grade = 3;
else if (score > 51) grade = 2;
else if (score > 39) grade = 1;
document.querySelector('#target').innerHTML = `your grade is ${grade}`;
