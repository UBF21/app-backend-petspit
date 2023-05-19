import { Animal } from "../model/Animal";

export class ResponseAnimal {
    descripcionAnimal: string;
    message: string;
    date: string;
    animal: Animal;

    constructor() {
        this.descripcionAnimal = "";
        this.message = "";
        this.date = "";
        this.animal = new Animal();
    }
}