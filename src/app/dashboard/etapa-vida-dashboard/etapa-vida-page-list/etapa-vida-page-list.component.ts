import { Component, OnInit } from '@angular/core';
import { error } from '@rxweb/reactive-form-validators';
import { EtapaVida } from 'src/app/models/model/EtapaVida';
import { EtapaVidaService } from 'src/app/services/models/etapavida/etapa-vida.service';

@Component({
  selector: 'app-etapa-vida-page-list',
  templateUrl: './etapa-vida-page-list.component.html',
  styleUrls: ['./etapa-vida-page-list.component.css']
})
export class EtapaVidaPageListComponent implements OnInit {

  etapaVidas:EtapaVida[] = [];

  constructor(private etapaVidaService:EtapaVidaService) { }

  ngOnInit(): void {
    this.getAllEtapaVidas();
  }

  getAllEtapaVidas(){
    this.etapaVidaService.getAllEtapaVidas()
    .subscribe({
      next:(response)=>{
        this.etapaVidas = response;
        console.log(response);
      },
      error:(error)=>{console.log(error)}
    });
  }

  saveEtapaVida(etapaVida:EtapaVida){
      this.etapaVidaService.saveEtapaVida(etapaVida)
      .subscribe({
        next:(response)=>{console.log(response)},
        error:(error)=>{console.log(error);}
      });
  }


  deleteEtapaVida(idEtapaVida:number){
    let etapaVida:EtapaVida = this.etapaVidas.find(value => value.idEtapaVida === idEtapaVida)!;
    if(etapaVida.estado === "I") 
    {
      console.log("Ya esta deshabilitado.");
    }else{
      etapaVida.estado = "I";
      this.saveEtapaVida(etapaVida);
    }

  }
}
