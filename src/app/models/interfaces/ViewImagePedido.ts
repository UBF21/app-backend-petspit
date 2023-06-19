import { SafeUrl } from "@angular/platform-browser";
import { Pedido } from "../model/Pedido";

export interface ViewImagePedido{
    name:string;
    pathName:SafeUrl;
    pedido:Pedido;
}