import { TamanioRaza } from "../model/TamanioRaza";

export class ResponseTamanioRaza{
    descripcion:string;
    message:string;
    date:string;
    tamanioRaza:TamanioRaza;

    constructor(){
        this.descripcion  = "";
        this.message = "";
        this.date = "";
        this.tamanioRaza = new TamanioRaza();
    }
}