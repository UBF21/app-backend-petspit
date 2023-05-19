import { Venta } from "./Venta";

export class Pedido {
    idPedido: number;
    idProduct: number;
    cantidad: number;
    importe: number;
    estado: string;
    idVenta: number;
    venta:Venta;

    constructor() {
        this.idPedido = 0;
        this.cantidad = 0;
        this.idProduct = 0;
        this.importe = 0;
        this.estado = "";
        this.idVenta = 0;
        this.venta = new Venta();
    }
}