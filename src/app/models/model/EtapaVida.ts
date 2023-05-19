import { Animal } from "./Animal";

export class EtapaVida {
    idEtapaVida: number;
    descripcion: string;
    estado: string;
    idAnimal: number;
    animal:Animal;

    constructor() {
        this.idEtapaVida = 0,
        this.descripcion = "";
        this.estado = "";
        this.idAnimal = 0;
        this.animal = new Animal();
    }
}