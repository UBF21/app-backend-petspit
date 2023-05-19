import { Category } from "../model/Category";

export class ResponseCategory{
    descripcion:string;
    message:string;
    date:string;
    category:Category;

    constructor(){
        this.descripcion = "";
        this.message = "";
        this.date = "";
        this.category = new Category();
    }
}