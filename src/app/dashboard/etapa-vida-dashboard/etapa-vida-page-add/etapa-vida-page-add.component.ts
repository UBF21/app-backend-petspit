import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Animal } from 'src/app/models/model/Animal';
import { EtapaVida } from 'src/app/models/model/EtapaVida';
import { AnimalService } from 'src/app/services/models/animal/animal.service';
import { EtapaVidaService } from 'src/app/services/models/etapavida/etapa-vida.service';

@Component({
  selector: 'app-etapa-vida-page-add',
  templateUrl: './etapa-vida-page-add.component.html',
  styleUrls: ['./etapa-vida-page-add.component.css']
})
export class EtapaVidaPageAddComponent implements OnInit {

  formAddEtapaVida: FormGroup = new FormGroup({});

  animales: Animal[] = [];
  estados: string[] = ["Activo", "Inactivo"];

  constructor(private formBuilder: FormBuilder, private animalService: AnimalService, private etapaVidaService: EtapaVidaService) { }

  ngOnInit(): void {
    this.getAllAnimals();
    this.formAddEtapaVida = this.formBuilder.group({
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

  addEtapaVida(etapaVida: EtapaVida) {
    this.etapaVidaService.saveEtapaVida(etapaVida).
      subscribe({
        next: (response) => { console.log(response) },
        error: (error) => { console.log(error) }
      });
  }

  fillEtapaVidaForSave(){

      let etapaVida:EtapaVida = new EtapaVida();
      
      etapaVida.descripcion = this.formAddEtapaVida.value.descripcion;
      etapaVida.idAnimal = this.formAddEtapaVida.value.animal;
      etapaVida.estado = this.formAddEtapaVida.value.estado;
      etapaVida.idEtapaVida = 0;
      etapaVida.animal = new Animal();
      etapaVida.animal.idAnimal = etapaVida.idAnimal;

      return etapaVida;
  }

  submitEtapaVida() {
    let etapaVida: EtapaVida = this.fillEtapaVidaForSave();
    

    this.addEtapaVida(etapaVida);
    console.log(this.formAddEtapaVida.value);
    this.formAddEtapaVida.reset();
    this.formAddEtapaVida.get('animal')?.setValue('');
    this.formAddEtapaVida.get('estado')?.setValue('');
  }
}
