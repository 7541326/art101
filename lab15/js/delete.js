// lab.js - links, ajax/api
// Author: meeeee
// Date: may 2025
// my weirdo code before i decided to just split the two randnum ranges


// // lab stuff
let type;
const ajaxObj = {

};
const favArray = [
  "vulpix",
  "vulpix-alola",
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
  "piplup",
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
  "phantump",
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
  "eternatus"
];
const favTypes = ["bug","ghost","dark"];
// 10001 - 10277

// get random number
function randNum(min, max) {  
  let num =  Math.floor(Math.random() * (max - min + 1) + min);
  return num
}

// get random fav
function randFavNum() {
  let num = favArray[Math.floor(Math.random() * favArray.length)];
  console.log(num);
  return num;
}

// for getting types
function randType() {
  let num = favTypes[Math.floor(Math.random() * favTypes.length)];
  console.log(num);
  return num;
}

// get random pokemon from api
function randPokemon(num) {
$.ajax({
  url: `https://pokeapi.co/api/v2/pokemon/${num}`,
  data: {},
  type: "GET",
  dataType : "json",
  success: function(data) {
    console.log(data);
    console.log(data.name);
    console.log(data.sprites.front_default);
    console.log(data.sprites.front_shiny);
    console.log(data.types[0].type.name)
    type = data.types[0].type.name
    if (data.types[1]) {
      console.log(data.types[1].type.name);
      type += `, ${data.types[1].type.name}`;
    }
    $("#output").html(`
      <h2>${data.name}</h2>
      <p>${type}</p>
      <img src="${data.sprites.front_default}"></img>
      <img src="${data.sprites.front_shiny}"></img>`)
  },
  error: function (jqXHR, textStatus, errorThrown) { 
    console.log("Error:", textStatus, errorThrown);
    $("#output").html(`<p>Please wait a few seconds and try again.</p>`)
  }
})}


// get random pokemon from specific type from api
function randPokemonFromType(type) {
$.ajax({
  url: `https://pokeapi.co/api/v2/type/${type}`,
  data: {},
  type: "GET",
  dataType : "json",
  success: function(data) {
    console.log(data.pokemon);
    console.log(data.pokemon[randNum(data.pokemon.length)]);
  },
  error: function (jqXHR, textStatus, errorThrown) { 
    console.log("Error:", textStatus, errorThrown);
    $("#output").html(`<p>Please wait a few seconds and try again.</p>`)
  }
})}


// buttons
$("#activate").click(function(){
  randPokemon(randNum(0, 10278));
})
$("#favs").click(function(){
  randPokemon(randFavNum());
})
$("#types").click(function(){
  randPokemonFromType(randType());
})


// -------------------------------------
// links 
$(document).ready(function() {
  $('nav#links').load('../navlinks.html');
  console.log("Printed");
});

