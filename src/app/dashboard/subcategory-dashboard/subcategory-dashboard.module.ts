import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubcategoryPageListComponent } from './subcategory-page-list/subcategory-page-list.component';
import { SubcategoryPageAddComponent } from './subcategory-page-add/subcategory-page-add.component';
import { SubcategoryPageEditComponent } from './subcategory-page-edit/subcategory-page-edit.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';



@NgModule({
  declarations: [
    SubcategoryPageListComponent,
    SubcategoryPageAddComponent,
    SubcategoryPageEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule
  ],
  exports:[

  ],
  providers:[
    SubcategoryPageListComponent,
    SubcategoryPageAddComponent,
    SubcategoryPageEditComponent
  ]
})
export class SubcategoryDashboardModule { }
