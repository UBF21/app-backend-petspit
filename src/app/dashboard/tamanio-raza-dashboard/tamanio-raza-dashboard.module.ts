import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TamanioRazaPageListComponent } from './tamanio-raza-page-list/tamanio-raza-page-list.component';
import { TamanioRazaPageEditComponent } from './tamanio-raza-page-edit/tamanio-raza-page-edit.component';
import { TamanioRazaPageAddComponent } from './tamanio-raza-page-add/tamanio-raza-page-add.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';



@NgModule({
  declarations: [
    TamanioRazaPageListComponent,
    TamanioRazaPageEditComponent,
    TamanioRazaPageAddComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule
  ],
  exports:[
    TamanioRazaPageListComponent,
    TamanioRazaPageEditComponent,
    TamanioRazaPageAddComponent
  ],
  providers:[

  ]
})
export class TamanioRazaDashboardModule { }
