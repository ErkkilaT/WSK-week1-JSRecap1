const sideStr = prompt('enter three sides of the triangle in format x,y,z');
const arr = sideStr.split(',');
if (arr[0] == arr[1] && arr[0] == arr[2]) {
  document.querySelector('#target').innerHTML = 'Triangle is equilateral';
} else if (arr[0] != arr[1] && arr[0] != arr[2] && arr[1] != arr[2]) {
  document.querySelector('#target').innerHTML = 'Triangle is scalene';
} else {
  document.querySelector('#target').innerHTML = 'Triangle is isosceles';
}
