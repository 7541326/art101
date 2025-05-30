// lab.js - links, ajax/api
// Author: meeeee
// Date: may 2025

// lab stuff
// vars
let ajaxObj = {
  url: `https://pokeapi.co/api/v2/pokemon/10238`,
  // data: {},
  type: "GET",
  dataType : "json",
};
const favArray = [
  "ninetales",
  "ninetales-alola",
  "zubat",
  "crobat",
  "paras",
  "parasect",
  "gastly",
  "haunter",
  "gengar",
  "porygon",
  "porygon2",
  "porygon-z",
  "cyndaquil",
  "quilava",
  "typhlosion",
  "typhlosion-hisui",
  "natu",
  "xatu",
  "wooper-paldea",
  "clodsire",
  "dunsparce",
  "dudunsparce",
  "sneasel-hisui",
  "sneasler",
  "corsola-galar",
  "cursola",
  "shedinja",
  "mawile",
  "trapinch",
  "shuppet",
  "banette",
  "absol",
  "drifloon",
  "spiritomb",
  "rotom",
  "snivy",
  "serperior",
  "samurott",
  "samurott-hisui",
  "pidove",
  "venipede",
  "whirlipede",
  "scolipede",
  "yamask",
  "cofagrigus",
  "yamask-galar",
  "runerigus",
  "zorua",
  "zorua-hisui",
  "zoroark",
  "zoroark-hisui",
  "reuniclus",
  "escavalier",
  "litwick",
  "lampent",
  "chandelure",
  "hydreigon",
  "larvesta",
  "volcarona",
  "doublade",
  "skrelp",
  "dragalge",
  "sylveon",
  "sliggoo-hisui",
  "goodra-hisui",
  "noivern",
  "lycanroc-dusk",
  "lycanroc-midday",
  "fomantis",
  "lurantis",
  "wimpod",
  "golisopod",
  "type-null",
  "silvally",
  "mimikyu-disguised",
  "dhelmise",
  "corviknight",
  "nickit",
  "wooloo",
  "dubwool",
  "applin",
  "flapple",
  "hydrapple",
  "toxtricity-low-key",
  "toxtricity-amped",
  "sizzlipede",
  "centiskorch",
  "sinistea",
  "polteageist",
  "poltchageist",
  "sinistcha",
  "dreepy",
  "drakloak",
  "dragapult",
  "sprigatito",
  "floragato",
  "meowscarada",
  "charcadet",
  "armarouge",
  "ceruledge",
  "shroodle",
  "grafaiai",
  "bramblin",
  "brambleghast",
  "girafarig",
  "farigiraf",
  "flutter-mane",
  "slither-wing",
  "iron-moth",
  "wo-chien",
  "chien-pao",
  "ting-lu",
  "chi-yu",
  "iron-valiant",
  "jirachi",
  "deoxys-normal",
  "deoxys-defense",
  "deoxys-speed",
  "deoxys-attack",
  "giratina-origin",
  "giratina-altered",
  "darkrai",
  "reshiram",
  "yveltal",
  "zygarde-10",
  "zygarde-50",
  "lunala",
  "necrozma",
  "nihilego",
  "xurkitree",
  "celesteela",
  "guzzlord",
  "blacephalon",
  "eternatus",
  "banette-mega",
  "absol-mega",
  "centiskorch-gmax",
  "gengar-mega",
  "mawile-mega"
];
const favTypes = ["bug","ghost"];
const typesArray = [
  "normal",
  "fire",
  "fighting",
  "water",
  "flying",
  "grass",
  "poison",
  "electric",
  "ground",
  "psychic",
  "rock",
  "ice",
  "bug",
  "dragon",
  "ghost",
  "dark",
  "steel",
  "fairy"
]

// ---------------------------------------------
// get random of some array
function randFav(whatArray) {
  return whatArray[Math.floor(Math.random() * whatArray.length)];
}

// get random number
// https://www.w3schools.com/JS/js_random.asp
function randNum(min, max) {  
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// get and check input field
function checkType(){
  let typeToCheck = $("#typeInput").val().toLowerCase().replace(" ","");
  // make sure input matches a type in the field
  if (typesArray.includes(typeToCheck)) {
    // run function for random pokemon in chosen type
    randPokemon(typeToCheck, "type");
    $("#typeInput").attr("placeholder", "Enter a type");

  } else {
    // clear input and ask for valid type, do not run function
    $("#typeInput").val("");
    $("#typeInput").attr("placeholder", "Please enter a valid type");
  }
}

// ----------------------------------------
// random pokemon 
function randPokemon(num, doWhat){
  // change endpoint depending on what's being asked for
  ajaxObj.url = `https://pokeapi.co/api/v2/${doWhat}/${num}`;
  // ajax call
  $.ajax(ajaxObj)
  .done(function(data){
    // check if asking for type or pokemon endpoint
    if (doWhat == "type"){
      // grab random pokemon from selected type
      let numType = randNum(0, data.pokemon.length-1);
      let numName = data.pokemon[numType].pokemon.name;
      // rerun function with random pokemon from selected type 
      randPokemon(numName, "pokemon");
    } else {
      console.log(num, data.name);
      // grab first type, append second type if there is one
      type = data.types[0].type.name
      if (data.types[1]) {
        type += `, ${data.types[1].type.name}`;
      }
      // output to html
      $("#output").html(`
        <h2>${data.name}</h2>
        <p>${type}</p>
        <img src="${data.sprites.front_default}"></img>
        <img src="${data.sprites.front_shiny}"></img>`)
      } 
  })
  .fail(function(xhr, status, errorThrown){
    console.log(`${errorThrown} status: ${status}`);
  })
}

// -----------------------------------------------
// buttons
$("#activate").click(function(){
  randPokemon(randNum(0, 1025),"pokemon");
})
$("#activate2").click(function(){
  randPokemon(randNum(10001, 10277),"pokemon");
})

$("#types").click(function(){
  randPokemon(randFav(favTypes), "type");
})
$("#favs").click(function(){
  randPokemon(randFav(favArray), "pokemon");
})

$("#typeButton").click(function(){
  checkType();
});
$("#typeInput").keyup(function(event){
  if (event.keyCode == 13) {
    checkType();
}});



// ---------------------------------------------
// links 
$(document).ready(function() {
  $('nav#links').load('../navlinks.html');
  console.log("Printed");
});

