// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */

    // TODO: Use document parameter to change innerHTML - no return // how to make this picked planet name, diameter, etc??
    
    let missionTargetVar = document.getElementById("missionTarget");
    missionTargetVar.innerHTML  = `
    <h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li> 
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons} </li>
    </ol>
    <img src="${imageUrl}">
    `

}

function validateInput(testInput) {
    let inputValType;
    if (testInput === "") { 
    inputValType = "Empty"; 
    }
    else if (Number(testInput)) {
    inputValType = "Is a Number";
    }
    else if (isNaN(testInput)) {
    inputValType = "Not a Number";
    }
    return inputValType;
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) { 




}   

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });
        console.log(planetsReturned);
    return planetsReturned;
}

function pickPlanet(planets) {
    // TODO: Use math.random() to *return* one random planet
    let planetIndex = Math.floor(Math.random() * planets.length);
    let pickedPlanet = planets[planetIndex];
    return pickedPlanet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
