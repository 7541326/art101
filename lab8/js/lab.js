// lab.js - loading links and other lab stuff
// Author: zhou
// Date: May 2025

// lab stuff:
const myArray = [1, 2, 3, 4, 5];

//named func
function multByTen(x) {
  return x * 10;
}
var mapResults1 = myArray.map(multByTen);

// anon func
var mapResults2 = myArray.map(function(x) {
  return x * 100;
})

console.log("Results: ", mapResults1);
console.log("Results: ", mapResults2);

// output
document.getElementById('output').innerHTML = `Array: ${myArray}<br>
Array * 10: ${mapResults1}<br>
Array * 100: ${mapResults2}<br>
`

// links stuff
$(document).ready(function() {
  $('nav#links').load('../navlinks.html');
  console.log("Printed");
});
