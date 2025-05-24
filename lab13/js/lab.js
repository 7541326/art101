// lab.js - looping, links
// Author: zhou
// Date: May 2025

// lab stuff

// variables shmariables
let fizzObj = {};
let maxNum = 100;

// function for object
// taken from wes modes' site
function getFizzy() {
  let fizzObj = {};

  // loop 4 times for 4 fields
  for (let i = 0; i < 4; i++) {
    // get ids for input fields
    numId = `num${i}`;
    strId = `str${i}`;
    console.log(numId, strId)
    // get values from input fields
    fizzNum = $(`#${numId}`).val();
    fizzStr = $(`#${strId}`).val();
    console.log(`${i}: ${fizzNum}-${fizzStr}`);
    //assign to key:value in obj
    if (fizzNum && fizzStr) {
      fizzObj[fizzNum] = fizzStr;
    }
  }
  return fizzObj;
}

// function for da loop
// also taken from wes modes' site
function printDaLoop(fizz, max) {
  // loop maxNum amount of times
  for (i=1; i<Number(max)+1; i++) {
    // reset output string
    let fizzString = "";
    // for each item in object 
    for (el in fizz) {
      // if the current number%number from object = 0, add relevant string to output string
      if (i%el === 0) {
        fizzString += ` ${fizz[el]}`;
      }
    }
    // add number and string (if any)
    $("#output").append(`<b>${i.toString().padStart(3, '0')}</b> ${fizzString}<br>`);
    console.log(fizzString);

  }
}

// function for duplicates
// https://medium.com/@biswajitpanda973/check-duplicate-input-with-this-simple-javascript-function-4b08c178e4f
function dupeFizz() {
  let dupes = false;
  let inputs = $('[name="factorNum"]');
  let values = [];
  // loop thru fields and add to array
  inputs.each(function() {
    values.push($(this).val());
  });
  // https://stackoverflow.com/questions/35476948/remove-empty-or-whitespace-strings-from-array-javascript
  values = values.filter(entry => entry.trim() != '');
  console.log(values)
  // check for dupes
  for (i = 0; i < values.length; i++) {
    if (values.indexOf(values[i]) !== values.lastIndexOf(values[i])) {
      dupes = true;
      console.log(dupes)
      break;
    }
  }
  return dupes;
}


// button pressings
$("#submit").click(function(){
  dupeFizz()
  // clear output html
  $("#output").slideUp(100, function(){
    $("#output").html(" ");
  });

  // wait a bit
  setTimeout(function(){
    // get num and obj from fields
    maxNum = $("#maxNumInput").val();
    fizzObj = getFizzy();
    console.log(fizzObj);
    console.log(maxNum);
    // limit maxnum 1-100, make sure there's a number there, make sure at least one item is in object, no duplicate numbers
    if (maxNum === "" || maxNum < 1 || maxNum > 100) {
      $("#output").removeClass("columns")
      $("#output").append(`
        <p>Please input a max number between 1-100 :(</p>`);
    } else if (Object.keys(fizzObj).length === 0) {
      $("#output").removeClass("columns")
      $("#output").append(`
        <p>Please input at least one factor :(</p>`);
    } else if (dupeFizz()) {
      $("#output").removeClass("columns")
      $("#output").append(`
        <p>Please don't input duplicate factor numbers :(</p>`);
    } else {
      $("#output").addClass("columns")
      printDaLoop(fizzObj, maxNum);
    }
    $("#output").slideDown();
  }, 300)
  
  
})


// -------------------------------------------------------
// links
$(document).ready(function() {
  $('nav#links').load('../navlinks.html');
  console.log("Printed");
});
