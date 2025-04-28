// Assignment stuff, in another js file
// April 2025

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

// Output
document.writeln(`List of transportation methods: ${myTransport.join(', ')} <br>`);
document.writeln("<br>");
document.writeln("My main ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");