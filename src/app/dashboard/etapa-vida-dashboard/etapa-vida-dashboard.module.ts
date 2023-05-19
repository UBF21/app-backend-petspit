import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtapaVidaPageListComponent } from './etapa-vida-page-list/etapa-vida-page-list.component';
import { EtapaVidaPageAddComponent } from './etapa-vida-page-add/etapa-vida-page-add.component';
import { EtapaVidaPageEditComponent } from './etapa-vida-page-edit/etapa-vida-page-edit.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';



@NgModule({
  declarations: [
    EtapaVidaPageListComponent,
    EtapaVidaPageAddComponent,
    EtapaVidaPageEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule
  ],
  exports:[
    EtapaVidaPageListComponent,
    EtapaVidaPageEditComponent,
    EtapaVidaPageAddComponent
  ],
  providers:[]
})
export class EtapaVidaDashboardModule { }
