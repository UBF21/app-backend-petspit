import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedInformationService {

  constructor() { }

  showRegistration:boolean = false;
}
