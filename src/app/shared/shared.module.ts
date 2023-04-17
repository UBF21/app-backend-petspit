import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarPetspitComponent } from './nav-bar-petspit/nav-bar-petspit.component';
import { NavsPetspitComponent } from './navs-petspit/navs-petspit.component';
import { FooterPetspitComponent } from './footer-petspit/footer-petspit.component';



@NgModule({
  declarations: [
    NavBarPetspitComponent,
    NavsPetspitComponent,
    FooterPetspitComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavBarPetspitComponent,
    NavsPetspitComponent,
    FooterPetspitComponent
  ],
  providers: [

  ]
})
export class SharedModule { }
