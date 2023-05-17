import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryPageListComponent } from './category-page-list/category-page-list.component';
import { CategoryPageAddComponent } from './category-page-add/category-page-add.component';
import { CategoryPageEditComponent } from './category-page-edit/category-page-edit.component';



@NgModule({
  declarations: [
    CategoryPageListComponent,
    CategoryPageAddComponent,
    CategoryPageEditComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CategoryPageListComponent,
    CategoryPageAddComponent,
    CategoryPageEditComponent
  ],
  providers:[

  ]
})
export class CategoryDashboardModule { }
