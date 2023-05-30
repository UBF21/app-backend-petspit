import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TamanioRaza } from 'src/app/models/model/TamanioRaza';
import { ResponseTamanioRaza } from 'src/app/models/response/ResponseTamanioRaza';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PublictamanioRazaService {

  constructor(private http: HttpClient) { }

  public getAllTamanioRazas(): Observable<TamanioRaza[]> {
    return this.http.get<TamanioRaza[]>(`${environment.backendUrl}global/tamanioRaza`);
  }

  public getTamanioRazaById(idTamanioRaza: number): Observable<ResponseTamanioRaza> {
    return this.http.get<ResponseTamanioRaza>(`${environment.backendUrl}global/tamanioRaza/${idTamanioRaza}`);
  }
}
