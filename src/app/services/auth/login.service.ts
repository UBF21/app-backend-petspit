import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRecurrent } from 'src/app/models/model/UserRecurrent';
import { UserCredentials } from 'src/app/models/model/UserCredentials';
import { ResponseToken } from 'src/app/models/response/ResponseToken';
import { environment } from 'src/environments/environment';
import { ResponseUserCurrent } from 'src/app/models/response/ResponseUserRecurrent';
import { Authorities } from 'src/app/models/model/Authorities';
import { ViewImageUser } from 'src/app/models/interfaces/ViewImageUser';
import { json } from '@rxweb/reactive-form-validators';
import { User } from 'src/app/models/model/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  // Generar el token al ingresar las credenciales correctas
  public generateToken(user: UserCredentials): Observable<ResponseToken> {
    return this.http.post<ResponseToken>(`${environment.backendUrl}auth/generate-token`, user);
  }

  // Obtener el usuario que esta actualmente logeado
  public getCurrentUser(): Observable<ResponseUserCurrent> {
    return this.http.get<ResponseUserCurrent>(`${environment.backendUrl}auth/actual-usuario`);
  }

  // Guardar el token en el localStorage
  public saveTokenUser(token: string): void {
    localStorage.setItem("token", token);
  }

  // Guardar el usuario en el localStorage
  public saveUserCurrent(user: UserRecurrent): void {
    localStorage.setItem("user", JSON.stringify(user));
  }

  public saveUserViewCurrent(viewUser:ViewImageUser){
    localStorage.setItem("userView",JSON.stringify(viewUser));
  }

  // Obtener el rol del usuario
  public getUserRol(): Authorities {
    let user = localStorage.getItem("user");

    if (user !== null) {
      let userParse: UserRecurrent = JSON.parse(user) as UserRecurrent;
      return userParse.authorities[0];
    }

    return new Authorities();
  }

  // Obtener el token del localStorage
  public getTokenUserSave(): string {
    return localStorage.getItem("token")!;
  }

  //Eliminar el token y usuario del localStorage
  public logout(): void {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("userView");
    localStorage.removeItem("items");
  }

  // Obtener el usuario del localStorage
  public getUserCurrentSave(): UserRecurrent {
    let user = localStorage.getItem("user");
    if (user !== null) return JSON.parse(user);
    this.logout();
    return new UserRecurrent();
  }


  public getUserViewRecurrent():ViewImageUser{
      let viewUser:string = localStorage.getItem("userView")!;
      if(viewUser  !== null) {
        return JSON.parse(viewUser);
      }
      this.logout();
      return {pathName:"",name:"",user:new User()};
  }

    // Saber si el usuario inicio sesión
    public isLoggedIn(): boolean {
      let tokenLocalStorage = localStorage.getItem("token");
      if (tokenLocalStorage === undefined || tokenLocalStorage === "" || tokenLocalStorage === null) {
        return false;
      }
      return true;
    }
}
