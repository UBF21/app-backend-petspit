import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageListComponent } from './user-page-list/user-page-list.component';
import { UserPageAddComponent } from './user-page-add/user-page-add.component';
import { UserPageEditComponent } from './user-page-edit/user-page-edit.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';



@NgModule({
  declarations: [
    UserPageListComponent,
    UserPageAddComponent,
    UserPageEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule
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
