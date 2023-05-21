import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoPageListComponent } from './pedido-page-list/pedido-page-list.component';
import { PedidoPageAddComponent } from './pedido-page-add/pedido-page-add.component';
import { PedidoPageEditComponent } from './pedido-page-edit/pedido-page-edit.component';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PedidoPageListComponent,
    PedidoPageAddComponent,
    PedidoPageEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule
  ],
  exports:[
    PedidoPageListComponent,
    PedidoPageAddComponent,
    PedidoPageEditComponent
  ],
  providers:[

  ]
})
export class PedidoDashboardModule { }
