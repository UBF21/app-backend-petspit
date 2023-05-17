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
import { SharedDashboardModule } from './shared-dashboard/shared-dashboard.module';
import { HomePageDashboardComponent } from './home-page-dashboard/home-page-dashboard.component';
import { CategoryDashboardModule } from './category-dashboard/category-dashboard.module';
import { EtapaVidaDashboardModule } from './etapa-vida-dashboard/etapa-vida-dashboard.module';
import { MarcaDashboardModule } from './marca-dashboard/marca-dashboard.module';
import { PedidoDashboardModule } from './pedido-dashboard/pedido-dashboard.module';
import { ProductDashboardModule } from './product-dashboard/product-dashboard.module';
import { SubcategoryDashboardModule } from './subcategory-dashboard/subcategory-dashboard.module';
import { TamanioRazaDashboardModule } from './tamanio-raza-dashboard/tamanio-raza-dashboard.module';
import { UserDashboardModule } from './user-dashboard/user-dashboard.module';
import { VentaDashboardModule } from './venta-dashboard/venta-dashboard.module';


@NgModule({
  declarations: [
    LoginPageComponent,
    PublicRegisterUserComponent,
    DashboardPrincipalComponent,
    HomePageDashboardComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
    RxReactiveFormsModule,
    SharedModule,
    SharedDashboardModule,
    CategoryDashboardModule,
    EtapaVidaDashboardModule,
    MarcaDashboardModule,
    PedidoDashboardModule,
    ProductDashboardModule,
    SubcategoryDashboardModule,
    TamanioRazaDashboardModule,
    UserDashboardModule,
    VentaDashboardModule,
    CategoryDashboardModule,
    RouterModule
  ],
  exports: [
    LoginPageComponent,
    HomePageDashboardComponent,
    DashboardPrincipalComponent
  ],
  providers: []
})
export class DashboardModule { }
