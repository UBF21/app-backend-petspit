import { Product } from "../model/Product";

export class ResponseProduct{
    title:string;
    message:string;
    date:string;
    product:Product;

    constructor(){
        this.title = "";
        this.message = "";
        this.date = "";
        this.product = new Product();
    }
}