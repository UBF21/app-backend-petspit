import { User } from "./User";

export class Venta{

    idVenta:number;
    total:number;
    fechaEmision:string;
    cantidadProductos:number;
    estado:string;
    idUser:number;
    user:User;
    constructor(){
        this.idVenta = 0;
        this.total = 0;
        this.fechaEmision = "";
        this.cantidadProductos = 0;
        this.estado = "";
        this.idUser = 0;
        this.user = new User();
    }
}