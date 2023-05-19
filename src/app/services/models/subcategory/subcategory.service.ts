import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubCategory } from 'src/app/models/model/SubCategory';
import { ResponseSubCategory } from 'src/app/models/response/ResponseSubCategory';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

  constructor(private http: HttpClient) { }

  public getAllSubCategories(): Observable<SubCategory[]> {
    return this.http.get<SubCategory[]>(`${environment.backendUrl}api/subCategory`);
  }

  public getAllSubCategoriesByIdCategory(idCategory: number): Observable<SubCategory[]> {
    return this.http.get<SubCategory[]>(`${environment.backendUrl}api/subCategory/search/${idCategory}`);
  }

  public getSubCategoryById(idSubCategory:number):Observable<ResponseSubCategory>{
    return this.http.get<ResponseSubCategory>(`${environment.backendUrl}api/subCategory/${idSubCategory}`);
  }

  public saveSubCategory(subCategory:SubCategory):Observable<ResponseSubCategory>{
    return this.http.post<ResponseSubCategory>(`${environment.backendUrl}api/subCategory`,subCategory);
  }

  public deleteSubCategory(idSubCategory:number):Observable<ResponseSubCategory>{
    return this.http.delete<ResponseSubCategory>(`${environment.backendUrl}api/subCategory/${idSubCategory}`);
  }
}
