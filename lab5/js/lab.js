// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants
// Constants
let make = "Lexus";
let model = "RX 450H";
let color = "White";
let year = 2013;
let age = 2025-year;
let ownIt = false;

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
  document.getElementById('output').innerHTML = `<br>
    Make: ${make}<br>
    Model: ${model}<br>
    Color: ${color}<br>
    Year: ${year}<br>
    Age: ${age}<br>
  `;
}

// on document ready, run function
$(document).ready(function() {
  // load html file into specified div
  $('nav#links').load('../navlinks.html');
  
  console.log("Printed");
});
// html load with help from https://www.geeksforgeeks.org/how-to-load-external-html-file-using-jquery/


// let's get this party started
main();
