import { Animal } from "./Animal";
import { Category } from "./Category";

export class SubCategory {
    idSubCategory: number;
    descripcion: string;
    estado: string;
    idCategory: number;
    idAnimal:number;
    category:Category;
    animal:Animal;

    constructor() {
        this.idSubCategory = 0;
        this.descripcion = "";
        this.estado = "";
        this.idCategory = 0;
        this.idAnimal = 0;
        this.category = new Category();
        this.animal = new Animal();
    }
}