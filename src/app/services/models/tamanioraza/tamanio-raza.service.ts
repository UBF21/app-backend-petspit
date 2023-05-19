import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TamanioRaza } from 'src/app/models/model/TamanioRaza';
import { ResponseTamanioRaza } from 'src/app/models/response/ResponseTamanioRaza';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TamanioRazaService {

  constructor(private http: HttpClient) { }


  public getAllTamanioRazas(): Observable<ResponseTamanioRaza[]> {
    return this.http.get<ResponseTamanioRaza[]>(`${environment.backendUrl}api/tamanioRaza`);
  }

  public getTamanioRazaById(idTamanioRaza: number): Observable<ResponseTamanioRaza> {
    return this.http.get<ResponseTamanioRaza>(`${environment.backendUrl}api/tamanioRaza/${idTamanioRaza}`);
  }

  public saveTamanioRaza(tamanioRaza: TamanioRaza): Observable<ResponseTamanioRaza> {
    return this.http.post<ResponseTamanioRaza>(`${environment.backendUrl}api/tamanioRaza`, tamanioRaza);
  }

  public deleteTamanioRaza(idTamanioRaza: number): Observable<ResponseTamanioRaza> {
    return this.http.delete<ResponseTamanioRaza>(`${environment.backendUrl}api/tamanioRaza/${idTamanioRaza}`);
  }
  
}
