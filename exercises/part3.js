// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
var spacecraftName = "Space Shuttle";
var speedMph = 17500;
var kilometersToMars1 = 225000000;
var kilometersToTheMoon1 = 384400;
var milesPerKilometer = 0.621;
// Code the "getDaysToLocation" function here:
function getDaystoLocation(kilometersAway) {
    var milesAway = (kilometersAway * milesPerKilometer);
    var hours = (milesAway / speedMph);
    return (hours / 24);
}
// function getDaystoTheMoon (kilometersAway:number):number{
//     let milesAway: number = (kilometersToTheMoon1 * milesPerKilometer);
//     let hours: number = (milesAway / speedMph);
//     return (hours / 24);
// }
// Call the function and print the outputs for the Mars trip and the moon trip:
console.log(spacecraftName + " will take " + getDaystoLocation(kilometersToMars1) + " days to get to Mars");
console.log(spacecraftName + " will take " + getDaystoLocation(kilometersToTheMoon1) + " days to get to the Moon");
