import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/model/User';
import { ResponseUser } from 'src/app/models/response/ResponseUser';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  public getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(`${environment.backendUrl}api/user`);
  }

  public getUserById(idUser:number):Observable<ResponseUser>{
    return this.http.get<ResponseUser>(`${environment.backendUrl}api/user/${idUser}`);
  }

  public saveUser(user:User):Observable<ResponseUser>{
    return this.http.post<ResponseUser>(`${environment.backendUrl}api/user`,user);
  }

  public deleteUser(idUser:number):Observable<ResponseUser>{
    return this.http.delete<ResponseUser>(`${environment.backendUrl}api/user/${idUser}`);
  }
}
