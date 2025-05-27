// lab.js - conditionals, and link stuff
// Author: zhou
// Date: May 2025


// lab stuff

// --------------------------------------------------
// setup

// array of colors
const colorArray = [
  {
    name: "WATCHER",
    image: "./img/watcherlogo.png",
    bust: "./img/watcherimg.png",
    desc: `
      <b>Watchers</b> monitor not only the daily on-goings of life in The Orchard, but they also hold the sacred duty of performing communions and directly witnessing the memories of the ALLMOTHER.`,
    colors: [
      "#010f58",
      "#e2eeff",
      "#0868c9",
      "#72c2ff",
      "#f5feff",
      "#feffff",
      "#000e4c",
      "#00EAFF"]
  },
  {
    name: "KNOWER",
    image: "./img/knowerlogo.png",
    bust: "./img/knowerimg.png",
    desc: `
      <b>Knowers</b> tend to the library, archiving the history of the world and ALLMOTHER's teachings, as well as being a scholarly resource on various topics.`,
    colors: [
      "#2e0158",
      "#f0e2ff",
      "#5208c9",
      "#d772ff",
      "#fbf5ff",
      "#fffeff",
      "#35004c",
      "#D158FF"]
  },
  {
    name: "HEALER",
    image: "./img/healerlogo.png",
    bust: "./img/healerimg.png",
    desc: `
      <b>Healers</b> take care of general health and wellness of the sisters. They also oversee the cloning chambers, and are responsible for assigning a color-function to each newborn shell.`,
    colors: [
      "#580154",
      "#ffe2fe",
      "#c908c9",
      "#ff72e0",
      "#fff5ff",
      "#fffeff",
      "#3f004c",
      "#FFB3EE"]
  },
  {
    name: "BANG BANG FIRE",
    image: "./img/bbflogo.png",
    bust: "./img/bbfimg.png",
    desc: `
      <b>Bang Bang Fires</b> are the security force that protects The Orchard from Occupant attacks, monitoring for Occupant activity via radar and infrared scans, and conducting training drills.`,
    colors: [
      "#582201",
      "#ffece2",
      "#c95c08",
      "#ffad72",
      "#fff8f5",
      "#fffffe",
      "#4c1900",
      "#FFA900"]
  },
  {
    name: "FIXER",
    image: "./img/fixerlogo.png",
    bust: "./img/fixerimg.png",
    desc: `
      <b>Fixers</b> maintain various systems and repairs across The Orchard. They have access to many back-end areas normally inaccessible to other shells.`,
    colors: [
      "#015811",
      "#e2ffe7",
      "#08c91f",
      "#72ff9a",
      "#f5fff5",
      "#fefffe",
      "#004c03",
      "#6DE75D"]
  }
];
const rootVars = [
  "--main-bg",
  "--content-bg",
  "--a-color",
  "--ahover-color",
  "--sec-bg",
  "--linkshover-bg",
  "--linksactive-color",
  "--header-color",
]
const defaultColors = [
  "#272727",
  "#efefef",
  "#5b5b5b",
  "#999999",
  "#e4e4e4",
  "#fefffe",
  "#ffffff",
  "#ffffff"
]

// function to change colors
function changeColors(color) {
  for (i in rootVars) {
    document.documentElement.style.setProperty(rootVars[i], colorArray[color].colors[i]);
    console.log(rootVars[i]);
    console.log(colorArray[color].colors[i]);
  };
} 

// fuction to reset colors
function resetColors() {
  for (i in rootVars) {
    document.documentElement.style.setProperty(rootVars[i], defaultColors[i]);
    console.log(rootVars[i]);
    console.log(defaultColors[i]);
  };
}

// grab random phrase
function randPhrase() {
  const phraseArray = [
    "Red to blue",
    "Six to one",
    "Hair to hair",
    "Sphere to square",
    "Hekki ALMO"
  ]

  // choose a random string
  let randStr = Math.floor(Math.random() * phraseArray.length);

  // return string
  return phraseArray[randStr];
}

// get hash
// https://stackoverflow.com/a/8831937
function hashCode(str) {
    let hash = 0;
    for (let i = 0, len = str.length; i < len; i++) {
        let chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

// sorting func
function sortingFunc(str) {
  // takes string, counts letters, and modulus 4 jk. modulus 5 for 5 results
  // let strLength = str.length % 5;
  let strLength = Math.abs(hashCode(str) % 5);
  console.log(strLength);
  return strLength;
}

// close function - had to add the function link on the html button cuz click didnt work on the button i added to the div lol :/
function closeStuff() {
  console.log("I closed your output div for you because I'm so nice")
  $("#hideThis").slideDown();
  $("#output").slideUp();
  $("#source").slideUp();
  setTimeout(resetColors, 300)
};

// create function for button/enter
function outputColor(){
  // gets input value and runs the function
  let colorS = sortingFunc($("#input").val());

  // empty form checker
  if ($("#input").val().replaceAll(" ", "") == "") {
    console.log("TYPE SOMETHING FIRST!");
    // if entering a blank form while output is open, close it
    if ($("#output").css("display") != "none"){
      closeStuff();
    }
  } else {
    // change colors
    changeColors(colorS);

    // hide 
    $("#hideThis").slideUp();

    // show output box
    $("#output").slideDown();
    $("#source").slideDown();

    // print output
    $("#output").html(`
          <img id="logoImg" src="${colorArray[colorS].image}">
          <h3>YOU ARE: ${colorArray[colorS].name}-TYPE</h3>
          <div class="centerBtn">
          <img id="bustImg" src="${colorArray[colorS].bust}">
            <p>${colorArray[colorS].desc}<br>
            <a class="hColor" href="https://1000xresist.wiki.gg/wiki/Shapen_Sisters">x</a></p>
            <p class="hColor">
              Hekki ALLMO six to one<br>
              Each sister's function to be done<br>
            </p> 
            <button id="closeBtn" onclick="closeStuff()">${randPhrase()}</button>
          </div>
        `);
    }

  // clear form LAST and not first cuz that makes it stop working 
  $("#input").val("");
};


// ---------------------------------------------------
// buttons

// add function to button/enter
$("#submit").click(function(){
  outputColor();
});
$("#input").keyup(function(event){
  if (event.keyCode == 13) {
    outputColor();
}});



// ---------------------------------------------------
// links
$(document).ready(function() {
  $('nav#links').load('../navlinks.html');
  console.log("Printed");
});


// ---------------------------------------------------
// old code


  // document.documentElement.style.setProperty('--main-bg', colorArray[color].mainbg);
  // document.documentElement.style.setProperty('--content-bg', colorArray[color].contentbg);

  // document.documentElement.style.setProperty('--a-color', colorArray[color].acolor);
  // document.documentElement.style.setProperty('--ahover-color', colorArray[color].ahovercolor);
  // document.documentElement.style.setProperty('--sec-bg', colorArray[color].secbg);
  // document.documentElement.style.setProperty('--linkshover-bg', colorArray[color].linkshoverbg);
  // document.documentElement.style.setProperty('--linksactive-color', colorArray[color].linksactivecolor);
  // document.documentElement.style.setProperty('--header-color', colorArray[color].headercolor);

//   document.documentElement.style.setProperty('--main-bg', "#272727");
//   document.documentElement.style.setProperty('--content-bg', "#efefef");

//   document.documentElement.style.setProperty('--a-color', "#5b5b5b");
//   document.documentElement.style.setProperty('--ahover-color', "#999999");
//   document.documentElement.style.setProperty('--sec-bg', "#e4e4e4");
//   document.documentElement.style.setProperty('--linkshover-bg', "#fefffe");
//   document.documentElement.style.setProperty('--linksactive-color', "#ffffff");

//   document.documentElement.style.setProperty('--header-color', "#ffffff");