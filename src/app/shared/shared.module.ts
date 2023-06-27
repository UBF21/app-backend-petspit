import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarPetspitComponent } from './nav-bar-petspit/nav-bar-petspit.component';
import { NavsPetspitComponent } from './navs-petspit/navs-petspit.component';
import { FooterPetspitComponent } from './footer-petspit/footer-petspit.component';
import { RouterModule } from '@angular/router';
import { FormsModule ,NgModel} from '@angular/forms';



@NgModule({
  declarations: [
    NavBarPetspitComponent,
    NavsPetspitComponent,
    FooterPetspitComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
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
