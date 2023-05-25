import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubCategory } from 'src/app/models/model/SubCategory';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PublicSubCategoryService {

  constructor(private http:HttpClient) { }

  public getAllSubCategories():Observable<SubCategory[]>{

    return this.http.get<SubCategory[]>(`${environment.backendUrl}global/subCategory`);
  }

  public getAllSubCategoriesByIdCategory(idCategory:number):Observable<SubCategory[]>{
    return this.http.get<SubCategory[]>(`${environment.backendUrl}global/subCategory/filter/${idCategory}`);
  }
}
