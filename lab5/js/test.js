// test.js - Using writeln, I guess
// Author: Meeee
// Date: April 2025

// Constants
let make = "Lexus";
let model = "RX 450H";
let color = "White";
let year = 2013;
let age = 2025-year;
let ownIt = false;

// document.writeln("<br>");
// document.writeln("Make: " + make + "<br>");
// document.writeln("Model: " + model + "<br>");
// document.writeln("Color: " + color + "<br>");
// document.writeln("Year: " + year + "<br>");
// document.writeln("Age: " + age + "<br>");

$("#output").html(`<br>
    Make: ${make}<br>
    Model: ${model}<br>
    Color: ${color}<br>
    Year: ${year}<br>
    Age: ${age}<br>
    `);