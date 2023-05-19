import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Venta } from 'src/app/models/model/Venta';
import { ResponseVenta } from 'src/app/models/response/ResponseVenta';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  constructor(private http:HttpClient) { }

  public getAllVentas():Observable<Venta[]>{
    return this.http.get<Venta[]>(`${environment.backendUrl}api/venta`);
  }

  public getVentaById(idVenta:number):Observable<ResponseVenta>{
    return this.http.get<ResponseVenta>(`${environment.backendUrl}api/venta/${idVenta}`);
  }

  public saveVenta(venta:Venta):Observable<ResponseVenta>{
    return this.http.post<ResponseVenta>(`${environment.backendUrl}api/venta`,venta);
  }
  
}
