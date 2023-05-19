import { Pedido } from "../model/Pedido";

export class ResponsePedido {
    idPedido: number;
    message: string;
    date: string;
    pedido: Pedido;

    constructor() {
        this.idPedido = 0;
        this.message = "";
        this.date = "";
        this.pedido = new Pedido();
    }
}