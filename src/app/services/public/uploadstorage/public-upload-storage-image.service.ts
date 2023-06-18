import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PublicUploadStorageImageService {

  constructor(private http: HttpClient) { }

  public getPublicImageProduct(filename: string): Observable<any> {
    return this.http.get<any>(`${environment.backendUrl}global/upload-storage/product/image/${filename}`, { responseType: "blob" as "json" });
  }

  public getPublicImageMarca(filename: string): Observable<any> {
    return this.http.get<any>(`${environment.backendUrl}global/upload-storage/marca/image/${filename}`, { responseType: "blob" as "json" });
  }

  public getPublicImageUser(filename: string): Observable<any> {
    return this.http.get<any>(`${environment.backendUrl}global/upload-storage/user/image/${filename}`, { responseType: "blob" as "json" });
  }

}
