import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePagePetspitComponent } from './home-page-petspit/home-page-petspit.component';
import { ContactPagePetspitComponent } from './contact-page-petspit/contact-page-petspit.component';
import { ProductsPagePetspitComponent } from './products-page-petspit/products-page-petspit.component';
import { SharedModule } from '../shared/shared.module';
import { AboutPagePetspitComponent } from './about-page-petspit/about-page-petspit.component';
import { RouterModule } from '@angular/router';
import { NgModel,FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserProfilePageComponent } from './user-profile-page/user-profile-page.component';
import { UserProfileInformationComponent } from './components/user-profile-information/user-profile-information.component';
import { UserProfileOrdersComponent } from './components/user-profile-orders/user-profile-orders.component';
import { ViewProductPageComponent } from './view-product-page/view-product-page.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { ViewCarritoPageComponent } from './view-carrito-page/view-carrito-page.component';



@NgModule({
  declarations: [
    HomePagePetspitComponent,
    ContactPagePetspitComponent,
    ProductsPagePetspitComponent,
    AboutPagePetspitComponent,
    UserProfilePageComponent,
    UserProfileInformationComponent,
    UserProfileOrdersComponent,
    ViewProductPageComponent,
    ViewCarritoPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    EditorModule

  ],
  exports: [
    HomePagePetspitComponent,
    ContactPagePetspitComponent,
    ProductsPagePetspitComponent,
    AboutPagePetspitComponent,
    ViewProductPageComponent,
    ViewCarritoPageComponent
  ],
  providers: [

  ]
})
export class PetspitModule { }
