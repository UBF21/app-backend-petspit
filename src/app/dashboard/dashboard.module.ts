import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    LoginPageComponent
  ],
  providers: [

  ]
})
export class DashboardModule { }
