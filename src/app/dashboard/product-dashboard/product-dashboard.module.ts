import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageListComponent } from './product-page-list/product-page-list.component';
import { ProductPageAddComponent } from './product-page-add/product-page-add.component';
import { ProductPageEditComponent } from './product-page-edit/product-page-edit.component';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EditorModule } from '@tinymce/tinymce-angular';



@NgModule({
  declarations: [
    ProductPageListComponent,
    ProductPageAddComponent,
    ProductPageEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    EditorModule
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
