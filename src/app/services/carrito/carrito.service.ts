import { Injectable } from '@angular/core';
import { Pedido } from 'src/app/models/model/Pedido';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor() { }


  public setListCarrito():void{
    let items:Pedido[] = [];
    localStorage.setItem("items",JSON.stringify(items));
  }

  public getListCarrito():Pedido[]{
    let items = localStorage.getItem("items");
    if(items !== null){
      let pedidos:Pedido[] = JSON.parse(items);
      return pedidos; 
    }else return [];
    
  }

  public additemCarrito(pedido:Pedido):void{
    let items = localStorage.getItem("items");
    
    if(items !== null){
      let pedidos:Pedido[] = JSON.parse(items);
      pedidos.push(pedido);
      localStorage.setItem("items",JSON.stringify(pedidos));
    }

  }

  public deleteItemCarrito(index:number){
    let items = localStorage.getItem("items");
    
    if(items !== null){
      let pedidos:Pedido[] = JSON.parse(items);
      if (index >= 0 && index < pedidos.length) {
          pedidos.splice(index,1);
      } 
      localStorage.setItem("items",JSON.stringify(pedidos));
    }
  }
}
