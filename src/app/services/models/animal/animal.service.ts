import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from 'src/app/models/model/Animal';
import { ResponseAnimal } from 'src/app/models/response/ResponseAnimal';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http:HttpClient) { }

  public getAllAnimals():Observable<Animal[]>{
    return this.http.get<Animal[]>(`${environment.backendUrl}api/animal`);
  }

  public getAnimalById(idAnimal:number):Observable<ResponseAnimal>{
    return this.http.get<ResponseAnimal>(`${environment.backendUrl}api/animal/${idAnimal}`);
  }

  public saveAnimal(animal:Animal):Observable<ResponseAnimal>{
    return this.http.post<ResponseAnimal>(`${environment.backendUrl}api/animal`,animal);
  } 

  public deleteAnimal(idAnimal:number):Observable<ResponseAnimal>{
    return this.http.delete<ResponseAnimal>(`${environment.backendUrl}api/animal/${idAnimal}`);
  }
}