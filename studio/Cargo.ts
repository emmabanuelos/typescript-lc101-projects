export class Cargo implements Payload {
    massKg: number;
    material: string;
    // properties and methods
    constructor(massKg: number, material: string) {
        this.massKg = massKg;
        this.material = material;
     }
 }