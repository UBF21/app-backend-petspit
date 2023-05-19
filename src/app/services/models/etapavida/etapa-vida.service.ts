import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EtapaVida } from 'src/app/models/model/EtapaVida';
import { ResponseEtapaVida } from 'src/app/models/response/ResponseEtapaVida';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EtapaVidaService {

  constructor(private http: HttpClient) { }

  public getAllEtapaVidas(): Observable<EtapaVida[]> {
    return this.http.get<EtapaVida[]>(`${environment.backendUrl}api/etapaVida`);
  }

  public getEtapaVidaById(idEtapaVida: number): Observable<ResponseEtapaVida> {
    return this.http.get<ResponseEtapaVida>(`${environment.backendUrl}api/etapaVida/${idEtapaVida}`);
  }

  public saveEtapaVida(etapaVida: EtapaVida): Observable<ResponseEtapaVida> {
    return this.http.post<ResponseEtapaVida>(`${environment.backendUrl}api/etapaVida}`, etapaVida);
  }

  public deleteEtapaVida(idEtapaVida: number): Observable<ResponseEtapaVida> {
    return this.http.delete<ResponseEtapaVida>(`${environment.backendUrl}api/etapaVida/${idEtapaVida}`);
  }
}
