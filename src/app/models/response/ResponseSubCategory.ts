import { SubCategory } from "../model/SubCategory";

export class ResponseSubCategory {
    descripcion: string;
    message: string;
    date: string;
    subCategory: SubCategory;


    constructor() {
        this.descripcion = "";
        this.message = "";
        this.date = "";
        this.subCategory = new SubCategory();
    }
}