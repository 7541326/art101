// lab.js - General site stuff
// Author: Meeee
// Date: April 2025

// Variables
let myTransport = ["the bus", "walking", "a car"];

// Object
let myMainRide = {
  make: "Lexus",
  model: "RX 450H",
  color: "white",
  year: 2013,
  age: function() {
    return 2025 - this.year;
  }
};


// Functions
function main() {
  console.log("Main function started.");
  $("#output").html(`
    List of transportation methods: ${myTransport.join(', ')} <br>
    <br>
    My main ride: <pre>
    ${JSON.stringify(myMainRide, null, '\t')}</pre>`)
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
