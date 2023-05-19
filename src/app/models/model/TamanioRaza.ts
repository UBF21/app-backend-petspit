import { Animal } from "./Animal";

export class TamanioRaza{
    idTamanioRaza:number;
    descripcion:string;
    idAnimal:number;
    estado:string;
    animal:Animal;

    constructor()
    {
        this.idTamanioRaza =0;
        this.descripcion = "";
        this.idAnimal = 0;
        this.estado = "";
        this.animal = new Animal();
    }
}