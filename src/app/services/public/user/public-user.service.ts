import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/model/User';
import { ResponseUser } from 'src/app/models/response/ResponseUser';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PublicUserService {

  constructor(private http:HttpClient) { }

  public saveRegisterUser(user:User):Observable<ResponseUser>{
    return this.http.post<ResponseUser>(`${environment.backendUrl}/global/user`,user);
  }
}
