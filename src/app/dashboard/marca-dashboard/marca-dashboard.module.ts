import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarcaPageListComponent } from './marca-page-list/marca-page-list.component';
import { MarcaPageAddComponent } from './marca-page-add/marca-page-add.component';
import { MarcaPageEditComponent } from './marca-page-edit/marca-page-edit.component';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MarcaPageListComponent,
    MarcaPageAddComponent,
    MarcaPageEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule
  ],
  exports:[
    MarcaPageListComponent,
    MarcaPageAddComponent,
    MarcaPageEditComponent
  ],
  providers:[
    
  ]
})
export class MarcaDashboardModule { }
