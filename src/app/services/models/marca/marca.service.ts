import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Marca } from 'src/app/models/model/Marca';
import { ResponseMarca } from 'src/app/models/response/ResponseMarca';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  constructor(private http: HttpClient) { }

  public getAllMarcas(): Observable<Marca[]> {
    return this.http.get<Marca[]>(`${environment.backendUrl}api/marca`);
  }

  public getMarcaById(idMarca: number): Observable<ResponseMarca> {
    return this.http.get<ResponseMarca>(`${environment.backendUrl}api/marca/${idMarca}`);
  }

  public saveMarca(marca: Marca): Observable<ResponseMarca> {
    return this.http.post<ResponseMarca>(`${environment.backendUrl}api/marca`, marca);
  }

  public deleteMarca(idMarca: number): Observable<ResponseMarca> {
    return this.http.delete<ResponseMarca>(`${environment.backendUrl}api/marca/${idMarca}`);
  }
}
