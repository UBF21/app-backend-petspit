import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from 'src/app/models/model/Pedido';
import { Product } from 'src/app/models/model/Product';

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

  public isItemExist(producto:Product):boolean{
    let items = localStorage.getItem("items");
    let pedidos:Pedido[] = [];
    if(items !== null){
      pedidos = JSON.parse(items);
      return pedidos.some(item => item.product.idProduct === producto.idProduct);
    }else{
      pedidos = [];
      return false;
    }
  }

  public getIndexItemCarrito(product:Product){
    let items = localStorage.getItem("items");
    let pedidos:Pedido[] = [];
    let index  = 0;
    
    if(items !== null){
      pedidos = JSON.parse(items);

      index = pedidos.findIndex(item => item.idProduct === product.idProduct);
    }
  
    return index;
  }

  updateListCarrito(pedidos:Pedido[]){
    localStorage.setItem("items",JSON.stringify(pedidos));
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
