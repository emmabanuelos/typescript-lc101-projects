let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;


// The variables that are commented out will be moved into the Spacecraft class
// let spaceCraft: string = "Space Shuttle";
// let speedMph: number = 17500;
// let milesPerKilometer: number = 0.621;

// This function will also be moved into the Spacecraft class
// function getDaysToLocation(kilometersAway: number): number {
//   let milesAway: number = kilometersAway * milesPerKilometer;
//   let hours: number = milesAway / speedMph;
//   return hours / 24;
// }



// Define your Spacecraft class here:
class Spacecraft {
    milesPerKilometer: number = 0.621;
    name: string = "Space Shuttle";
    speedMph: number = 17500;
    getDaystoLocation: number;
    constructor(name:string, speedMph:number) {
        this.name = name;
        this.speedMph = speedMph;
        function getDaysToLocation (kilometersAway:number):number {
            let milesAway: number = kilometersAway * this.milesPerKilometer;
            let hours: number = milesAway / this.speedMph;
                return hours / 24;
            }
    }
}

//here is my function code from part 3:
// function getDaystoLocation (kilometersAway:number):number{
//     let milesAway: number = (kilometersAway * milesPerKilometer);
//     let hours: number = (milesAway / speedMph);
//     return (hours / 24);
// }


// Create an instance of the class here:
let spaceShuttle = new Spacecraft('Determination', 17500);

// Print two outputs - one for the trip to Mars and one for the trip to the moon.
console.log(`${spaceShuttle.getDaystoLocation}` );

