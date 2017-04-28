console.log("array-methods js is working");

var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/

planets.forEach(function(item){
  var newPlanetsString = item + " ";
  console.log(newPlanetsString);
  var solarSystem = document.getElementById("planets");
  solarSystem.innerHTML += newPlanetsString;
  });



/* Use the map method to create a new array where the first letter of each planet is capitalized
*/


// var capitalPlanets = planets.map(function(planets) {
//   return planets.toLowerCase();
//   return planets.replace(planets[0], planets[0].toUpperCase());

// });
// console.log(capitalPlanets);


var capitalPlanets = planets.map(function(capitalized){
  return capitalized.charAt(0).toUpperCase() + capitalized.charAt(1) + capitalized.charAt(2) + capitalized.charAt(3) + capitalized.charAt(4) + capitalized.charAt(5) + capitalized.charAt(6);
});
console.log("capitalPlanets", capitalPlanets);



// var capitalPlanets = planets.map(function(planets){
//   return planets.split("").join("");
// });
//  console.log("capitalPlanets", capitalPlanets);




/* Use the filter method to create a new array that contains planets with the letter 'e'
*/


// var ePlanets = planets.filter(function(planets) {
//   return planets.charAt === "e";
//   console.log("ePlanets", ePlanets);
// });

var ePlanets = planets.filter(function(e){
  return e.includes("e");
});
console.log(ePlanets);


// function filter(e) {
//   var results = [];
//   var len = planets.length;
//   for (var i = 0; i < len; i++) {
//     if (planets[i].indexOf[0] == e) results.push(planets[i]);
//   }
//   return results;
//   console.log(planets[i]);
// }


 //Use the reduce method to create a sentence from the words in the following array
//

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];


var sentence = words.reduce(function(prev, curr){
  // console.log(prev, curr);
  return prev + " " + curr;
});

console.log(sentence);










