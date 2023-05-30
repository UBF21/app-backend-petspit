import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EtapaVida } from 'src/app/models/model/EtapaVida';
import { ResponseEtapaVida } from 'src/app/models/response/ResponseEtapaVida';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PublicEtapaVidaService {

  constructor(private http:HttpClient) { }

  public getAllEtapaVidas():Observable<EtapaVida[]>{
    return this.http.get<EtapaVida[]>(`${environment.backendUrl}global/etapaVida`);
  }

  public getEtapaVidaById(idEtapaVida:number):Observable<ResponseEtapaVida>{
    return this.http.get<ResponseEtapaVida>(`${environment.backendUrl}global/etapaVida/${idEtapaVida}`);
  }
}
