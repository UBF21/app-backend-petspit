import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubcategoryPageListComponent } from './subcategory-page-list/subcategory-page-list.component';
import { SubcategoryPageAddComponent } from './subcategory-page-add/subcategory-page-add.component';
import { SubcategoryPageEditComponent } from './subcategory-page-edit/subcategory-page-edit.component';



@NgModule({
  declarations: [
    SubcategoryPageListComponent,
    SubcategoryPageAddComponent,
    SubcategoryPageEditComponent
  ],
  imports: [
    CommonModule
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
