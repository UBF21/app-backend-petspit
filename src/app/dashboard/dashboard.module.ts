import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { SharedModule } from '../shared/shared.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule, NgModel } from '@angular/forms';
import { InterceptorRequestInterceptor } from '../interceptor/interceptor-request.interceptor';
import { PublicRegisterUserComponent } from './components/public-register-user/public-register-user.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginPageComponent,
    PublicRegisterUserComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule
  ],
  exports: [
    LoginPageComponent
  ],
  providers: []
})
export class DashboardModule { }
