// lab.js - General site stuff
// Author: Meeee
// Date: April 2025

// Constants


// Functions
function main() {
  console.log("Main function started.");
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
