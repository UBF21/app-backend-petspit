import { Component, OnInit } from '@angular/core';
import { TamanioRaza } from 'src/app/models/model/TamanioRaza';
import { TamanioRazaService } from 'src/app/services/models/tamanioraza/tamanio-raza.service';

@Component({
  selector: 'app-tamanio-raza-page-list',
  templateUrl: './tamanio-raza-page-list.component.html',
  styleUrls: ['./tamanio-raza-page-list.component.css']
})
export class TamanioRazaPageListComponent implements OnInit {

  tamanioRazas: TamanioRaza[] = [];

  constructor(private tamanioRazaServices: TamanioRazaService) { }

  ngOnInit(): void {
    this.getAllTamanioRazas();
  }

  getAllTamanioRazas() :void{

    this.tamanioRazaServices.getAllTamanioRazas()
      .subscribe({
        next: (response) => {
          this.tamanioRazas = response;
          console.log(response);
        },
        error: (error) => { console.log(error) }
      });
  }

  saveTamanioRaza(tamanioRaza:TamanioRaza):void{
    this.tamanioRazaServices.saveTamanioRaza(tamanioRaza)
    .subscribe({
      next:(response)=>{console.log(response)},
      error:(error)=> {console.log(error)}
    });
  }

  deleteTamanioRaza(idTamanioRaza:number){

    let tamanioRaza:TamanioRaza = this.tamanioRazas.find( item => item.idTamanioRaza === idTamanioRaza)!;
    if(tamanioRaza.estado === 'I'){
      console.log("Tamaño de raza deshabilitado.");
    }
    tamanioRaza.estado = "I";
    this.saveTamanioRaza(tamanioRaza);
  }
}
