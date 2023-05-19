import { Animal } from "./Animal";

export class Category {
    idCategory: number;
    descripcion: string;
    estado: string;
    idAnimal: number;
    animal:Animal;
    constructor() {
        this.idCategory = 0;
        this.descripcion = "";
        this.estado = "";
        this.idAnimal = 0;
        this.animal = new Animal();
    }
}