import { Venta } from "../model/Venta";

export class ResponseVenta{
    idVenta:number;
    message:string;
    date:string;
    venta:Venta;

    constructor(){
        this.idVenta = 0;
        this.message = "";
        this.date = "";
        this.venta = new Venta();

    }
}