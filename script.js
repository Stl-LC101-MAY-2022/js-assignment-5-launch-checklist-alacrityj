// Write your JavaScript code here!

// const { pickPlanet } = require("./scriptHelper");

// const { formSubmission } = require("./scriptHelper"); // Necessary for grading?? or only necessary to use formSub which I do not need? 

window.addEventListener("load", function() {
    
    let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch(); 
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       
       // Below this comment call the appropriate helper functions to pick a planet from the list of planets and add that information to your destination.
     
    
       let planet = pickPlanet(listedPlanets);
       addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
    //    console.log(planet); 
   })

    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let pilotStat = document.getElementById("pilotStatus");
        let copilotStat = document.getElementById("copilotStatus");
        let list = document.getElementById("faultyItems"); 
        let cargoStat = document.getElementById("cargoStatus");
        let launchStat = document.getElementById("launchStatus");

        let pilotName = document.querySelector("input[name=pilotName]");
        let copilotName = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]"); 
        
            if ((validateInput(pilotName.value) === "Empty") || (validateInput(copilotName.value) === "Empty") || (validateInput(fuelLevel.value) === "Empty") || (validateInput(cargoMass.value) === "Empty")) {
                alert("All fields required!"); 
                
            }
            else if ((validateInput(pilotName.value) === "Is a Number") || (validateInput(copilotName.value) === "Is a Number")) {
                alert("Make sure to enter valid information for each field!"); 
                
            }
            else if ((validateInput(fuelLevel.value) === "Not a Number") || (validateInput(cargoMass.value) === "Not a Number")) {
                alert("Make sure to enter valid information for each field!");     
            } else {
            list.style.visibility = "visible";  
            
            pilotStat.innerHTML = `
                Pilot ${pilotName.value} is ready for launch
            `
            copilotStat.innerHTML = `
                Co-pilot ${copilotName.value} is ready for launch
            `
            if (Number(fuelLevel.value) < 10000) {
                list.style.visibility = "visible";
                fuelStatus.innerHTML = "Fuel level too low for launch";
                launchStat.innerHTML = "Shuttle not ready for launch";
                launchStat.style.color = "red";
            
            }
            if (Number(cargoMass.value) > 10000) {
                list.style.visibility = "visible";
                cargoStat.innerHTML = "Cargo mass too high for launch";
                launchStat.innerHTML = "Shuttle not ready for launch";
                launchStat.style.color = "red";
            }
            if (Number(fuelLevel.value) >= 10000 && Number(cargoMass.value <= 10000)) {
                launchStat.innerHTML = "Shuttle is ready for launch";
                launchStat.style.color = "green";
            }
        }
 });

   
});

