import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePagePetspitComponent } from './petspit/home-page-petspit/home-page-petspit.component';
import { ContactPagePetspitComponent } from './petspit/contact-page-petspit/contact-page-petspit.component';
import { ProductsPagePetspitComponent } from './petspit/products-page-petspit/products-page-petspit.component';
import { LoginPageComponent } from './dashboard/auth/login-page/login-page.component';

const routes: Routes = [
  {path:'',component:HomePagePetspitComponent,pathMatch:'full'},
  {path:'home' ,component:HomePagePetspitComponent, pathMatch: 'full'},
  {path:'contact' ,component:ContactPagePetspitComponent, pathMatch: 'full'},
  {path:'products' ,component:ProductsPagePetspitComponent,pathMatch: 'full'},
  {path:'login' ,component:LoginPageComponent,pathMatch: 'full'},
  {path:'**' ,redirectTo:'/home',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
