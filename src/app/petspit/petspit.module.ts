import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePagePetspitComponent } from './home-page-petspit/home-page-petspit.component';
import { ContactPagePetspitComponent } from './contact-page-petspit/contact-page-petspit.component';
import { ProductsPagePetspitComponent } from './products-page-petspit/products-page-petspit.component';
import { SharedModule } from '../shared/shared.module';
import { AboutPagePetspitComponent } from './about-page-petspit/about-page-petspit.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomePagePetspitComponent,
    ContactPagePetspitComponent,
    ProductsPagePetspitComponent,
    AboutPagePetspitComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    HomePagePetspitComponent,
    ContactPagePetspitComponent,
    ProductsPagePetspitComponent,
    AboutPagePetspitComponent
  ],
  providers: [

  ]
})
export class PetspitModule { }
