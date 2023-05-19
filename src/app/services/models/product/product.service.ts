import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/model/Product';
import { ResponseProduct } from 'src/app/models/response/ResponseProduct';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  public getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(`${environment.backendUrl}api/product`);
  }

  public getProductById(idProduct:number):Observable<ResponseProduct>{
    return this.http.get<ResponseProduct>(`${environment.backendUrl}api/product/${idProduct}`);
  }

  public saveProduct(product:Product):Observable<ResponseProduct>{
    return this.http.post<ResponseProduct>(`${environment.backendUrl}api/product`,product);
  }

  public deleteProduct(idProduct:number):Observable<ResponseProduct>{
    return this.http.delete<ResponseProduct>(`${environment.backendUrl}api/product/${idProduct}`);
  }
}
