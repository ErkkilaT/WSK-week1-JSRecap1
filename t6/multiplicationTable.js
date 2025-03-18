const n = prompt('Enter a positive integer: ');
document.querySelector('#n').innerHTML = 'Enter a positive integer: ' + n;
let table = '';
for (let i = 1; i <= n; i++) {
  table += '<tr>';
  for (let j = 1; j <= n; j++) {
    table += '<td>' + i * j + '</td>';
  }
  table += '</tr>';
}
document.querySelector('#target').innerHTML = table;
