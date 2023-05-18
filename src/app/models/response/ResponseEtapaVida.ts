import { EtapaVida } from "../model/EtapaVida";

export class ResponseEtapaVida{
    descripcion:string;
    message:string;
    date:string;
    etapaVida:EtapaVida;

    constructor(){
        this.descripcion = "";
        this.message ="";
        this.date = "";
        this.etapaVida = new EtapaVida();
    }
}