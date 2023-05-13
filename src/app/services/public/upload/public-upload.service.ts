import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseUpload } from 'src/app/models/response/ResponseUpload';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PublicUploadService {

  constructor(private http: HttpClient) { }

  // upload public user

  public getImageToUserOfApi(fileName: string): Observable<any> {
    return this.http.get<any>(`${environment.backendUrl}global/upload/user/${fileName}`, { responseType: "blob" as "json" });
  }

  public saveImageToUser(image: FormData): Observable<ResponseUpload> {
    return this.http.post<ResponseUpload>(`${environment.backendUrl}global/upload/user`, image);
  }

  // upload public marca

  public getImageToMarcaOfApi(fileName: string): Observable<any> {
    return this.http.get<any>(`${environment.backendUrl}global/upload/marca/${fileName}`, { responseType: "blob" as "json" });
  }

  //upload public product
  
  public getImageToProductOfApi(fileName: string): Observable<any> {
    return this.http.get<any>(`${environment.backendUrl}global/upload/product/${fileName}`, { responseType: "blob" as "json" });
  }
}
