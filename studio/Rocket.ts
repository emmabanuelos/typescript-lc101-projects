import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';
import { Payload } from './Payload';

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[];
    astronauts: Astronaut[];
    // properties and methods

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
     }

     sumMass ( items: Payload[] ): number  {
        for (let i = 0; i <massKg.length[i]; i++){
        console.log(sum[i]);
     } }
    
     currentMassKg(): number {
         return this.sumMass
     }

     canAdd(item: Payload): boolean 
         return true 
         if (this.currentMassKg  + item.massKg <= this.totalCapacityKg)
     

     addCargo(cargo: Cargo) {
        this.canAdd()
     }

     addAstronaut(astronaut: Astronaut) {
        this.canAdd()
     }
    }

}