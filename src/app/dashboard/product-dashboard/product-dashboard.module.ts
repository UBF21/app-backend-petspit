import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageListComponent } from './product-page-list/product-page-list.component';
import { ProductPageAddComponent } from './product-page-add/product-page-add.component';
import { ProductPageEditComponent } from './product-page-edit/product-page-edit.component';



@NgModule({
  declarations: [
    ProductPageListComponent,
    ProductPageAddComponent,
    ProductPageEditComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ProductPageListComponent,
    ProductPageAddComponent,
    ProductPageEditComponent
  ],
  providers:[

  ]
})
export class ProductDashboardModule { }
