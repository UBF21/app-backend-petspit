import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Animal } from 'src/app/models/model/Animal';
import { TamanioRaza } from 'src/app/models/model/TamanioRaza';
import { AnimalService } from 'src/app/services/models/animal/animal.service';
import { TamanioRazaService } from 'src/app/services/models/tamanioraza/tamanio-raza.service';

@Component({
  selector: 'app-tamanio-raza-page-add',
  templateUrl: './tamanio-raza-page-add.component.html',
  styleUrls: ['./tamanio-raza-page-add.component.css']
})
export class TamanioRazaPageAddComponent implements OnInit {

  formAddTamanioRaza: FormGroup = new FormGroup({});
  animales: Animal[] = [];

  constructor(private formBuilder: FormBuilder, private animalService: AnimalService,private tamanioRazaServices:TamanioRazaService) { }

  ngOnInit(): void {
    this.getAllAnimals();
    this.formAddTamanioRaza = this.formBuilder.group({
      descripcion: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      animal: ['', [Validators.required]],
    });
  }

  getAllAnimals() {

    this.animalService.getAllAnimals()
      .subscribe({
        next: (response) => { this.animales = response },
        error: (error) => { console.log(error) }
      });
  }

  fillTamanioRazaForSave():TamanioRaza{
    let tamanioRaza:TamanioRaza = new TamanioRaza();
    tamanioRaza.idTamanioRaza  =0;
    tamanioRaza.descripcion = this.formAddTamanioRaza.value.descripcion;
    tamanioRaza.estado = this.formAddTamanioRaza.value.estado;
    tamanioRaza.idAnimal = this.formAddTamanioRaza.value.animal;
    tamanioRaza.animal= new Animal();
    tamanioRaza.animal.idAnimal = this.formAddTamanioRaza.value.animal;
  
    return tamanioRaza;
  }

  addTamanioRaza(tamanioRaza:TamanioRaza){
    this.tamanioRazaServices.saveTamanioRaza(tamanioRaza)
    .subscribe({
      next:(response) => {console.log(response)},
      error:(error) => {console.log(error)}
    });
  }

  submitTamanioRaza(){
    let tamanioRaza:TamanioRaza = this.fillTamanioRazaForSave();
    this.addTamanioRaza(tamanioRaza);
    console.log(this.formAddTamanioRaza.value);
    this.formAddTamanioRaza.reset();
  }
}
