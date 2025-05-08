// lab.js - lab stuff (jquery buttons) and links
// Author: zhou
// Date: May 2025

// lab stuff

// append buttons
// $(".minor-section").append("<button class='btn'>Make Special</button>");
$("#challenge").append("<button id='button-challenge'>Make Special</button>");
$("#problem").append("<button id='button-problem'>Make Special</button>");
$("#reflection").append("<button id='button-reflection'>Make Special</button>");

// listeners
// $(".btn").click(function(){
//   $(this).parent().toggleClass("special");
//   console.log("Clicked");
// });
$("#button-challenge").click(function(){
  $("#challenge").toggleClass("special");
});
$("#button-problem").click(function(){
  $("#problem").toggleClass("special2");
});
$("#button-reflection").click(function(){
  $("#reflection").toggleClass("special3");
});

// link stuff
$(document).ready(function() {
  $('nav#links').load('../navlinks.html');
  console.log("Printed");
});