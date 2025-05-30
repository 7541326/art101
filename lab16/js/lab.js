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

function grabXKCD() {

  $.ajax(ajaxObj)
  .done(function(data){
    console.log(data);
  })
  .fail(function(xhr, status, errorThrown){
    console.log(`${errorThrown} status: ${status}`);
  })
}



// --------------------------------------------------------
// links
$(document).ready(function() {
  $('nav#links').load('../navlinks.html');
  console.log("Printed");
});

grabXKCD()