// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
// Part 1: Add the 5 variables here 
var spacecraftName = 'Determination';
var speedMph = 17500;
var kilometersToMars = 225000000;
var kilometersToMoon = 384400;
var milesPerkilometer = 0.621;
// Code part 2 here:
// let milesToMars: function milesToMars(kilometersToMars * milesPerKilometer):number{
//     return milesToMars
// }
var milesToMars = (kilometersToMars * milesPerkilometer);
var hoursToMars = (milesToMars / speedMph);
var daysToMars = (hoursToMars / 24);
// Code the output statement here (use a template literal):
console.log(spacecraftName + " would take " + daysToMars + " days to get to Mars");
