import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentaPageListComponent } from './venta-page-list/venta-page-list.component';
import { VentaPageAddComponent } from './venta-page-add/venta-page-add.component';
import { VentaPageEditComponent } from './venta-page-edit/venta-page-edit.component';



@NgModule({
  declarations: [
    VentaPageListComponent,
    VentaPageAddComponent,
    VentaPageEditComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    VentaPageListComponent,
    VentaPageAddComponent,
    VentaPageEditComponent
  ],
  providers:[
    
  ]
})
export class VentaDashboardModule { }
