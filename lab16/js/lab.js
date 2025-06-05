// lab.js - json and apis, links
// Author: meeeeeeeeeeeeeeeeeee :3
// Date: may 2025

// lab stuff
// vars
let ajaxObj = {
  url: "https://xkcd.com/info.0.json",
  type: "GET",
  dataType: "JSON"
}
let comicNum;
let comicMax;
let comicObj;


// randnum
// https://www.w3schools.com/JS/js_random.asp
function randNum(min, max) {  
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}


// xkcd
function grabXKCD(num) {
  if (num == 0) {
    ajaxObj.url = "https://api.allorigins.win/get?url=" + encodeURIComponent(`https://xkcd.com/info.0.json`);
  } else {
    ajaxObj.url = "https://api.allorigins.win/get?url=" + encodeURIComponent(`https://xkcd.com/${num}/info.0.json`);
  }
  $.ajax(ajaxObj)
  .done(function(data){
    let comicObj = JSON.parse(data.contents);
    console.log(comicObj.num);
    $("#output").html(`
      <h2>${comicObj.safe_title}</h2>
        <p>${comicObj.month}/${comicObj.day}/${comicObj.year}</p>
      <img class="resultimg" src="${comicObj.img}" alt="${comicObj.alt}">`);
      comicNum = comicObj.num;
      if (num == 0) {
        comicMax = comicObj.num;
      }
  })
  .fail(function(xhr, status, errorThrown){
    console.log(`${errorThrown} status: ${status}`);
  })
}

// -------------------------------------------------
// buttons
$("#current").click(function() {
  grabXKCD(0);
  console.log(comicNum);
});
$("#random").click(function() {
  comicNum = randNum(0,comicMax);
  grabXKCD(comicNum);
  console.log(comicNum);
});
$("#next").click(function() {
  grabXKCD(comicNum+1);
  console.log(comicNum);
});
$("#prev").click(function() {
  grabXKCD(comicNum-1);
  console.log(comicNum);
});





// --------------------------------------------------------
// links
$(document).ready(function() {
  $('nav#links').load('../navlinks.html');
  console.log("Printed");
  grabXKCD(0);
});

