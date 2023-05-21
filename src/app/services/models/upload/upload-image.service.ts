import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseUpload } from 'src/app/models/response/ResponseUpload';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

  constructor(private http: HttpClient) { }

  // upload para Marca
  getImageToMarca(fileName:string): Observable<any> {
    return this.http.get<any>(`${environment.backendUrl}upload/marca/image/${fileName}`, { responseType: "blob" as "json" });
  }

  saveImageToMarca(image:FormData): Observable<ResponseUpload> {
    return this.http.post<ResponseUpload>(`${environment.backendUrl}upload/marca/image`, image);
  }

  deleteImageToMarca(fileName:string):Observable<ResponseUpload>{
    return this.http.delete<ResponseUpload>(`${environment.backendUrl}upload/marca/image?filename=${fileName}`); 
  }

  //upload para Product
  getImageToProduct(fileName:string): Observable<any> {
    return this.http.get<any>(`${environment.backendUrl}upload/product/image/${fileName}`, { responseType: "blob" as "json" });
  }

  saveImageToProduct(image:FormData): Observable<ResponseUpload> {
    return this.http.post<ResponseUpload>(`${environment.backendUrl}upload/product/image`, image);
  }

  deleteImageToProduct(fileName:string):Observable<ResponseUpload>{
    return this.http.delete<ResponseUpload>(`${environment.backendUrl}upload/product/image?filename=${fileName}`);
  }

  //upload para User
  public getImageToUser(fileName: string): Observable<any> {
    return this.http.get<any>(`${environment.backendUrl}upload/user/image/${fileName}`, { responseType: "blob" as "json" });
  }

  public saveImageToUser(image: FormData): Observable<ResponseUpload> {
    return this.http.post<ResponseUpload>(`${environment.backendUrl}upload/user/image`, image);
  }

  deleteImageToUser(fileName:string):Observable<ResponseUpload>{
    return this.http.delete<ResponseUpload>(`${environment.backendUrl}upload/user/image?filename=${fileName}`);
  }

}
