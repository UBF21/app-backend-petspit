import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseUpload } from 'src/app/models/response/ResponseUpload';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadStorageImageService {

  constructor(private http: HttpClient) { }

  public getImageProduct(filename: string): Observable<any> {
    return this.http.get<any>(`${environment.backendUrl}upload-storage/product/image/${filename}`, { responseType: "blob" as "json" });
  }

  public saveImageProduct(image: FormData): Observable<ResponseUpload> {
    return this.http.post<ResponseUpload>(`${environment.backendUrl}upload-storage/product/image`, image);
  }

  public deleteImageProduct(fileName: string): Observable<ResponseUpload> {
    return this.http.delete<ResponseUpload>(`${environment.backendUrl}upload-storage/product/image?filename=${fileName}`);
  }


  public getImageMarca(filename: string): Observable<any> {
    return this.http.get<any>(`${environment.backendUrl}upload-storage/marca/image/${filename}`, { responseType: "blob" as "json" });
  }

  public saveImageMarca(image: FormData): Observable<ResponseUpload> {
    return this.http.post<ResponseUpload>(`${environment.backendUrl}upload-storage/marca/image`, image);
  }

  public deleteImageMarca(fileName: string): Observable<ResponseUpload> {
    return this.http.delete<ResponseUpload>(`${environment.backendUrl}upload-storage/marca/image?filename=${fileName}`);
  }



  public getImageUser(filename: string): Observable<any> {
    return this.http.get<any>(`${environment.backendUrl}upload-storage/user/image/${filename}`, { responseType: "blob" as "json" });
  }

  public saveImageUser(image: FormData): Observable<ResponseUpload> {
    return this.http.post<ResponseUpload>(`${environment.backendUrl}upload-storage/user/image`, image);
  }

  public deleteImageUser(fileName: string): Observable<ResponseUpload> {
    return this.http.delete<ResponseUpload>(`${environment.backendUrl}upload-storage/user/image?filename=${fileName}`);
  }

}
