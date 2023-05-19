import { Marca } from "../model/Marca";

export class ResponseMarca{
    descripcionMarca:string;
    message:string;
    date:string;
    marca:Marca;

    constructor(){
        this.descripcionMarca = "";
        this.message = "";
        this.date = "";
        this.marca = new Marca();
    }
}