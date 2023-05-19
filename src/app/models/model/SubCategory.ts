import { Category } from "./Category";

export class SubCategory {
    idSubCategory: number;
    descripcion: string;
    estado: string;
    idCategory: number;
    category:Category;

    constructor() {
        this.idSubCategory = 0;
        this.descripcion = "";
        this.estado = "";
        this.idCategory = 0;
        this.category = new Category();
    }
}