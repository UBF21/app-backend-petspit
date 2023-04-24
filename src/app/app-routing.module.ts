import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePagePetspitComponent } from './petspit/home-page-petspit/home-page-petspit.component';
import { ContactPagePetspitComponent } from './petspit/contact-page-petspit/contact-page-petspit.component';
import { ProductsPagePetspitComponent } from './petspit/products-page-petspit/products-page-petspit.component';
import { LoginPageComponent } from './dashboard/auth/login-page/login-page.component';
import { AboutPagePetspitComponent } from './petspit/about-page-petspit/about-page-petspit.component';

const routes: Routes = [
  {path:'',component:HomePagePetspitComponent},
  {path:'home' ,component:HomePagePetspitComponent},
  {path:'contact' ,component:ContactPagePetspitComponent},
  {path:'products' ,component:ProductsPagePetspitComponent},
  {path:'about' ,component:AboutPagePetspitComponent},
  {path:'login' ,component:LoginPageComponent},
  {path:'**' ,redirectTo:'/home',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
