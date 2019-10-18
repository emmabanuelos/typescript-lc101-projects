// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 

let spacecraftName: string = "Space Shuttle";
let speedMph: number = 17500;
let kilometersToMars1: number = 225000000;
let kilometersToTheMoon1: number = 384400;
let milesPerKilometer: number = 0.621;

// Code the "getDaysToLocation" function here:
function getDaystoLocation (kilometersAway:number):number{
    let milesAway: number = (kilometersAway * milesPerKilometer);
    let hours: number = (milesAway / speedMph);
    return (hours / 24);
}

// function getDaystoTheMoon (kilometersAway:number):number{
//     let milesAway: number = (kilometersToTheMoon1 * milesPerKilometer);
//     let hours: number = (milesAway / speedMph);
//     return (hours / 24);
// }




// Call the function and print the outputs for the Mars trip and the moon trip:
console.log(`${spacecraftName} will take ${getDaystoLocation(kilometersToMars1)} days to get to Mars`)
console.log(`${spacecraftName} will take ${getDaystoLocation(kilometersToTheMoon1)} days to get to the Moon`)