// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 

// Part 1: Add the 5 variables here 
let spacecraftName: string = 'Determination';
let speedMph: number = 17500;
let kilometersToMars: number = 225000000;
let kilometersToMoon: number = 384400;
let milesPerkilometer: number = 0.621;




// Code part 2 here:
// let milesToMars: function milesToMars(kilometersToMars * milesPerKilometer):number{
//     return milesToMars
// }

let milesToMars: number = (kilometersToMars * milesPerkilometer);
let hoursToMars: number = (milesToMars / speedMph);
let daysToMars: number = (hoursToMars / 24);


// Code the output statement here (use a template literal):
console.log(`${spacecraftName} would take ${daysToMars} days to get to Mars`);
