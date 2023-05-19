import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rol } from 'src/app/models/model/Rol';
import { ResponseRol } from 'src/app/models/response/ResponseRol';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  constructor(private http: HttpClient) { }

  public getAllRols(): Observable<Rol[]> {
    return this.http.get<Rol[]>(`${environment.backendUrl}api/rol`);
  }

  public getRolById(idRol: number): Observable<ResponseRol> {
    return this.http.get<ResponseRol>(`${environment.backendUrl}api/rol/${idRol}`);
  }

  public saveRol(rol: Rol): Observable<ResponseRol> {
    return this.http.post<ResponseRol>(`${environment.backendUrl}api/rol`, rol);
  }

  public deleteRol(idRol: number): Observable<ResponseRol> {
    return this.http.delete<ResponseRol>(`${environment.backendUrl}api/rol/${idRol}`);
  }
}
