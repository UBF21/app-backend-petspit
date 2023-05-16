import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule, NgModel } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import {  RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { PublicRegisterUserComponent } from './components/public-register-user/public-register-user.component';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { DashboardPrincipalComponent } from './dashboard-principal/dashboard-principal.component';


@NgModule({
  declarations: [
    LoginPageComponent,
    PublicRegisterUserComponent,
    DashboardPrincipalComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
    RxReactiveFormsModule,
    SharedModule
  ],
  exports: [
    LoginPageComponent
  ],
  providers: []
})
export class DashboardModule { }
