import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from 'src/app/models/model/Pedido';
import { ResponsePedido } from 'src/app/models/response/ResponsePedido';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: HttpClient) { }

  public getAllPedidos(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${environment.backendUrl}api/pedido`);
  }

  public getAllPedidosByIdVenta(idVenta: number): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${environment.backendUrl}api/pedido/search/${idVenta}`);
  }

  public getPedidoById(idPedido: number): Observable<ResponsePedido> {
    return this.http.get<ResponsePedido>(`${environment.backendUrl}api/pedido/${idPedido}`);
  }

  public savePedido(pedido: Pedido): Observable<ResponsePedido> {
    return this.http.post<ResponsePedido>(`${environment.backendUrl}api/pedido`, pedido);
  }

  public deletePedido(idPedido: number): Observable<ResponsePedido> {
    return this.http.delete<ResponsePedido>(`${environment.backendUrl}api/pedido/${idPedido}`);
  }
}
