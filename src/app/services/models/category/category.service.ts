import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/model/Category';
import { ResponseCategory } from 'src/app/models/response/ResponseCategory';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  public getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.backendUrl}api/category`);
  }

  public getCategoryById(idCategory: number): Observable<ResponseCategory> {
    return this.http.get<ResponseCategory>(`${environment.backendUrl}api/category/${idCategory}`);
  }

  public saveCategory(category: Category): Observable<ResponseCategory> {
    return this.http.post<ResponseCategory>(`${environment.backendUrl}api/category`, category);
  }

  public deleteCategory(idCategory: number): Observable<ResponseCategory> {
    return this.http.delete<ResponseCategory>(`${environment.backendUrl}api/category/${idCategory}`);
  }
}
