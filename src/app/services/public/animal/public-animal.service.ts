import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from 'src/app/models/model/Animal';
import { ResponseAnimal } from 'src/app/models/response/ResponseAnimal';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PublicAnimalService {

  constructor(private http: HttpClient) { }

  public getAllAnimals(): Observable<Animal[]> {
    return this.http.get<Animal[]>(`${environment.backendUrl}global/animal`);
  }


  public getAnimalById(idAnimal: number): Observable<ResponseAnimal> {
    return this.http.get<ResponseAnimal>(`${environment.backendUrl}global/animal/${idAnimal}`);
  }
}
