// lab.js - lab stuff, events and forms, and links
// Author: zhou
// Date: May 2025

// lab stuff

// sort string func
function sortStr(input) {
  // split, sort, rejoin
  return input.split("").sort().join("").toLowerCase();
}

// shuffle string func
// from https://stackoverflow.com/questions/3943772/how-do-i-shuffle-the-characters-in-a-string-in-javascript
// comments are my best attempt to understand the code
function shuffleStr(input) {
  // creates an array from the string
  var a = input.split(""),
    // gets the length of the array as a variable
    n = a.length;

  // iterates through the array, i being the position in the array
  for(var i = n - 1; i > 0; i--) {
    // creates a random number that falls within the array length
    var j = Math.floor(Math.random() * (i + 1));
    // temporarily reassigns the current letter to a placeholder variable
    var tmp = a[i];
    // moves a random letter to the current position
    a[i] = a[j];
    // moves the former letter to the random letter's position
    a[j] = tmp;
  }

  // returns the shuffled array as a string
  return a.join("");
}


// name func
function getPrintName() {
  // get name
  const userName = $("#username").val();
  // clear name
  $("#username").val("");

  // no empty forms
  if (userName.replaceAll(" ", "") == "") {
    $("#output").html(`
      <div class="text">
        <p>Dude, you gotta type something first :(</p>
      </div>`)
  } else {
    // print both sorted and shuffled name to div
    $("#output").html(`
    <div class="text">
      <p>I sorted your name for you :)</p>
      <p class="nameStyle">${sortStr(userName)}</p>
      <p>But then I dropped your name and the letters spilled all over the floor :(</p>
      <p class="nameStyle">${shuffleStr(userName.toLowerCase())}</p>
    </div>
    `)
  }
  
  console.log(userName)
}

// run namefunc on click or enter
$("#submit").click(function(){
  getPrintName();
});
$("#username").keyup(function(event){
  if (event.keyCode == 13) {
    getPrintName();
}});

// --------------------------------------------

// password func
function getPrintPass() {
  const password = $("#password").val();
  $("#password").val("");

  // no empty form
  if (password.replaceAll(" ", "") == "") {
    $("#output2").html(`
      <div class="text">
        <p>Dude, you gotta type something first :(</p>
      </div>`)
  } else {
    // output
    $("#output2").html(`
    <div class="text">
      <p>Your password isn't safe anymore :( sorry :( I made your password public information</p>
      <p class="nameStyle">${password}</p>
    </div>
    `)
}};

// run password func on button click or enter
$("#submitPw").click(function(){
  getPrintPass();
  console.log("Pressed!")
});
$("#password").keyup(function(event){
  if (event.keyCode == 13) {
    getPrintPass();
}});

// --------------------------------------------

// get random color
// https://stackoverflow.com/questions/1484506/random-color-generator
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// randomize all colors
function randColors(){
  console.log("Randomized:)");
  // https://stackoverflow.com/questions/40572157/change-css-root-variable-with-jquery-or-javascript
  document.documentElement.style.setProperty('--main-bg', getRandomColor());
  document.documentElement.style.setProperty('--content-bg', getRandomColor());

  document.documentElement.style.setProperty('--a-color', getRandomColor());
  document.documentElement.style.setProperty('--ahover-color', getRandomColor());
  document.documentElement.style.setProperty('--sec-bg', getRandomColor());
  document.documentElement.style.setProperty('--linkshover-bg', getRandomColor());
  document.documentElement.style.setProperty('--linksactive-color', getRandomColor());

  document.documentElement.style.setProperty('--tert-bg', getRandomColor());
  document.documentElement.style.setProperty('--font-color', getRandomColor());
};

// buttons
$("#randColors").click(function(){
  randColors();
});
$("#randColorsTimed").click(function(){
  let randConfirm = window.prompt(`pressing this button will cause flashing colors\nenter YES to confirm`);
  if (randConfirm.toLowerCase() == "yes") {
    randInterval = setInterval(randColors, 1000);
  };
});
$("#randColorsTimedStop").click(function(){
  clearInterval(randInterval);
});

// reset colors button
$("#resetColors").click(function(){
  document.documentElement.style.setProperty('--main-bg', "#30324f");
  document.documentElement.style.setProperty('--content-bg', "#cfcade");

  document.documentElement.style.setProperty('--a-color', "#20064f");
  document.documentElement.style.setProperty('--ahover-color', "#7280ff");
  document.documentElement.style.setProperty('--sec-bg', "#eeeff0");
  document.documentElement.style.setProperty('--linkshover-bg', "#fefeff");
  document.documentElement.style.setProperty('--linksactive-color', "#00134c");

  document.documentElement.style.setProperty('--tert-bg', "#fbfdff");
  document.documentElement.style.setProperty('--font-color', "#000000");
});

// --------------------------------------------

// links
$(document).ready(function() {
  $('nav#links').load('../navlinks.html');
  console.log("Printed");
});
