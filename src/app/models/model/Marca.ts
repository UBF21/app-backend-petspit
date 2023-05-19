import { Animal } from "./Animal";

export class Marca {
    idMarca: number;
    descripcion: string;
    estado: string;
    imagen: string;
    idAnimal: number;
    animal:Animal;
    constructor() {
        this.idMarca = 0;
        this.descripcion = "";
        this.estado = "";
        this.imagen = "";
        this.idAnimal = 0;
        this.animal = new Animal();
    }
}