import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageListComponent } from './user-page-list/user-page-list.component';
import { UserPageAddComponent } from './user-page-add/user-page-add.component';
import { UserPageEditComponent } from './user-page-edit/user-page-edit.component';



@NgModule({
  declarations: [
    UserPageListComponent,
    UserPageAddComponent,
    UserPageEditComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    UserPageListComponent,
    UserPageAddComponent,
    UserPageEditComponent
  ],
  providers:[
    
  ]
})
export class UserDashboardModule { }
