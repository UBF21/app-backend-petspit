import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from 'src/app/models/model/Pedido';
import { ResponseVenta } from 'src/app/models/response/ResponseVenta';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PublicVentaService {

  constructor(private http:HttpClient) { }

  generarCompra(pedidos:Pedido[],idUsuario:number):Observable<ResponseVenta>{
    return this.http.post<ResponseVenta>(`${environment.backendUrl}global/venta/compra?idUser=${idUsuario}`,pedidos);
  }
}
