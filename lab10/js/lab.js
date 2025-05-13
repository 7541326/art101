// lab.js - lab stuff random text, links
// Author: zhou
// Date: May 2025

// lab stuff
function generateRandomText() {
  const text = [
    `great holes secretly are digged where earth's pores ought to suffice`,
    `and things have learnt to walk that ought to crawl`,
    `we should have never left the primordial soup`,
    `only through death can i escape the call of the one who rules above all life`,
    `something old, far older than humanity, sleeps deep below the ground`,
    `those of us who can hear its call in the night, an invitation`,
    `an ocean of memories`,
    `where "i" ends and "we" begin`,
    `a crashed ship, a strange gate, a hole in the ground, an island beyond reach`,
    `memories from other lives`,
    `dreams of suffering and loneliness`,
    `a promise`,
    `a search for someone lost`,
    `i saw her, in the red emptiness, waiting for me`,
    `we had made a promise`,
    `as the memories of a stranger rushed into my mind`,
    `i felt the border of my self blur`,
    `i embraced my lover in the red deserts of kitezh, when a storm consumed us, the sand grinding us down until nothing remained`,
    `i was a worker in the mines of leng, when i was consumed by a shapeless mass of flesh, my flesh joining with the flesh of many others, until only my bones remained`,
    `my mind joined the collective of flesh, which persists beyond death`,
    `as a storm raged in the sky, i fell from a ruined sky-scraper on vineta, but i never reached the ocean below`,
    `i kept falling, when suddenly lightning struck the building, and i woke up`,
    `i was floating in the sunless sea below the ice of rotfront, when i saw a large creature move in the darkness below me in the moon's dark core`,
    `i saw a burning eye in the sky above the clouds of buyan`,
    `i was walking through the floating imperial palace, when the gaze of the sun-like iris burned my body to ashes`,
    `i'm no longer fully myself anymore, but i've not fully become someone else either`,
    `i'm stuck here, between her and me, with half-formed dreams and recollections penetrating my brain and tainting my every action`,
    `we were dancing to that song they start the broadcast with`,
    `we fell asleep watching that movie we had seen before so many times`,
    `if only i could take us back to that time when we were happy`,
    `these memories are mine now`
  ];  
  // const randLen = Math.floor(Math.random() * (max - min + 1)) + min;

  // choose a random string
  let randStr = Math.floor(Math.random() * text.length);

  // return string
  return text[randStr];
}

// timestamp stuff
// https://stackoverflow.com/questions/18889548/javascript-change-gethours-to-2-digit
function getNow() {
  var now = new Date();
  var time = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
  console.log(time);
  return time;
}

// click listener for generating button
$("#make-convo").click(function(){
  const newText = generateRandomText();
  $("#output").prepend(`
    <div class="text"><p>[${getNow()}] ${newText}</p></div>`);
});

// reply function
function sendReply() {
  const replyText = $("#msgTxt").val();

  // no empty forms
  if (replyText.replaceAll(" ", "") == "") {
    $("#output").prepend(`
      <div class="textError"><p>[${getNow()}] >> invalid input</p></div>`);
    $("#msgTxt").val("");
    console.log(replyText);
  }
  else {
    $("#output").prepend(`
      <div class="textReply"><p>[${getNow()}] >> ${replyText}</p></div>`);
    $("#msgTxt").val("");
    console.log(replyText);
  }
}

// click listner for reply button, button click or enter
// keyup thanks 2 https://www.geeksforgeeks.org/javascript-trigger-a-button-on-enter-key/
$("#msgTxt").keyup(function(event){
  if (event.keyCode == 13) {
    sendReply();
    console.log("Okay!");
  }
});
$("#sendMsg").click(function(){
  sendReply();
  console.log("Okay!");
});

// clear text
$("#clearTxt").click(function() {
  document.getElementById("output").innerHTML = "";
});


// ------------------------------
// links
$(document).ready(function() {
  $('nav#links').load('../navlinks.html');
  console.log("Printed");
});
