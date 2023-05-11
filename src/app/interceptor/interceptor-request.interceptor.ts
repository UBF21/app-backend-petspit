import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../services/auth/login.service';

@Injectable()
export class InterceptorRequestInterceptor implements HttpInterceptor {

  constructor(private loginService:LoginService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    let authRequest = request;
    const token:string = this.loginService.getTokenUserSave();
    if(token !== null){
      
     authRequest =  authRequest.clone({
         setHeaders: {Authorization: `Bearer ${token}` } 
      });

    }
    
    return next.handle(authRequest);
  }
}