import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PetspitModule } from './petspit/petspit.module';
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { InterceptorRequestInterceptor } from './interceptor/interceptor-request.interceptor';
import { CarritoService } from './services/carrito/carrito.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    SharedModule,
    PetspitModule,
    DashboardModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:InterceptorRequestInterceptor,multi:true},
    CarritoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
