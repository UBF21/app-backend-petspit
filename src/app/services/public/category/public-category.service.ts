import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/model/Category';
import { ResponseCategory } from 'src/app/models/response/ResponseCategory';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PublicCategoryService {

  constructor(private http:HttpClient) { }


  public getAllCategories():Observable<Category[]>{
    return this.http.get<Category[]>(`${environment.backendUrl}global/category`);
  }


  public getCategoryById(idCategory:number):Observable<ResponseCategory>{
   return this.http.get<ResponseCategory>(`${environment.backendUrl}global/category/${idCategory}`);
  }

}
