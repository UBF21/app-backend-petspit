import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePagePetspitComponent } from './petspit/home-page-petspit/home-page-petspit.component';
import { ContactPagePetspitComponent } from './petspit/contact-page-petspit/contact-page-petspit.component';
import { ProductsPagePetspitComponent } from './petspit/products-page-petspit/products-page-petspit.component';
import { LoginPageComponent } from './dashboard/auth/login-page/login-page.component';
import { AboutPagePetspitComponent } from './petspit/about-page-petspit/about-page-petspit.component';
import { UserProfilePageComponent } from './petspit/user-profile-page/user-profile-page.component';
import { DashboardPrincipalComponent } from './dashboard/dashboard-principal/dashboard-principal.component';
import { HomePageDashboardComponent } from './dashboard/home-page-dashboard/home-page-dashboard.component';
import { SubcategoryPageListComponent } from './dashboard/subcategory-dashboard/subcategory-page-list/subcategory-page-list.component';
import { SubcategoryPageAddComponent } from './dashboard/subcategory-dashboard/subcategory-page-add/subcategory-page-add.component';
import { SubcategoryPageEditComponent } from './dashboard/subcategory-dashboard/subcategory-page-edit/subcategory-page-edit.component';
import { MarcaPageListComponent } from './dashboard/marca-dashboard/marca-page-list/marca-page-list.component';
import { EtapaVidaPageListComponent } from './dashboard/etapa-vida-dashboard/etapa-vida-page-list/etapa-vida-page-list.component';
import { TamanioRazaPageListComponent } from './dashboard/tamanio-raza-dashboard/tamanio-raza-page-list/tamanio-raza-page-list.component';
import { ProductPageListComponent } from './dashboard/product-dashboard/product-page-list/product-page-list.component';
import { PedidoPageListComponent } from './dashboard/pedido-dashboard/pedido-page-list/pedido-page-list.component';
import { VentaPageListComponent } from './dashboard/venta-dashboard/venta-page-list/venta-page-list.component';
import { UserPageListComponent } from './dashboard/user-dashboard/user-page-list/user-page-list.component';
import { MarcaPageEditComponent } from './dashboard/marca-dashboard/marca-page-edit/marca-page-edit.component';
import { MarcaPageAddComponent } from './dashboard/marca-dashboard/marca-page-add/marca-page-add.component';
import { EtapaVidaPageAddComponent } from './dashboard/etapa-vida-dashboard/etapa-vida-page-add/etapa-vida-page-add.component';
import { EtapaVidaPageEditComponent } from './dashboard/etapa-vida-dashboard/etapa-vida-page-edit/etapa-vida-page-edit.component';
import { TamanioRazaPageAddComponent } from './dashboard/tamanio-raza-dashboard/tamanio-raza-page-add/tamanio-raza-page-add.component';
import { TamanioRazaPageEditComponent } from './dashboard/tamanio-raza-dashboard/tamanio-raza-page-edit/tamanio-raza-page-edit.component';
import { ProductPageAddComponent } from './dashboard/product-dashboard/product-page-add/product-page-add.component';
import { ProductPageEditComponent } from './dashboard/product-dashboard/product-page-edit/product-page-edit.component';
import { PedidoPageAddComponent } from './dashboard/pedido-dashboard/pedido-page-add/pedido-page-add.component';
import { PedidoPageEditComponent } from './dashboard/pedido-dashboard/pedido-page-edit/pedido-page-edit.component';
import { VentaPageAddComponent } from './dashboard/venta-dashboard/venta-page-add/venta-page-add.component';
import { VentaPageEditComponent } from './dashboard/venta-dashboard/venta-page-edit/venta-page-edit.component';
import { UserPageAddComponent } from './dashboard/user-dashboard/user-page-add/user-page-add.component';
import { UserPageEditComponent } from './dashboard/user-dashboard/user-page-edit/user-page-edit.component';
import { CategoryPageListComponent } from './dashboard/category-dashboard/category-page-list/category-page-list.component';
import { CategoryPageAddComponent } from './dashboard/category-dashboard/category-page-add/category-page-add.component';
import { CategoryPageEditComponent } from './dashboard/category-dashboard/category-page-edit/category-page-edit.component';


//Ruta de category
const routerChildrenCategory: Routes = [
  { path: '', component: CategoryPageListComponent },
  { path: 'add', component: CategoryPageAddComponent },
  { path: 'edit', component: CategoryPageEditComponent },
  { path: '**', redirectTo: '/dashboard/categoria', pathMatch: 'full' }
]

//Ruta de SubCategory
const routerChildrenSubCategory: Routes = [
  { path: '', component: SubcategoryPageListComponent },
  { path: 'add', component: SubcategoryPageAddComponent },
  { path: 'edit', component: SubcategoryPageEditComponent },
  { path: '**', redirectTo: '/dashboard/sub-categoria', pathMatch: 'full' }
]

//Ruta de Marca
const routerChildrenMarca: Routes = [
  { path: '', component: MarcaPageListComponent },
  { path: 'add', component: MarcaPageAddComponent },
  { path: 'edit', component: MarcaPageEditComponent },
  { path: '**', redirectTo: '/dashboard/marca', pathMatch: 'full' },
]

//Ruta de Etapa de vida
const routerChildrenEtapaVida: Routes = [
  { path: '', component: EtapaVidaPageListComponent },
  { path: 'add', component: EtapaVidaPageAddComponent },
  { path: 'edit', component: EtapaVidaPageEditComponent },
  { path: '**', redirectTo: '/dashboard/etapa-vida', pathMatch: 'full' },
]

//Ruta de Tamaño de raza
const routerChildrenTamanioRaza: Routes = [
  { path: '', component: TamanioRazaPageListComponent },
  { path: 'add', component: TamanioRazaPageAddComponent },
  { path: 'edit', component: TamanioRazaPageEditComponent },
  { path: '**', redirectTo: '/dashboard/tamanio-raza', pathMatch: 'full' },
]

//Ruta de Producto 
const routerChildrenProducto: Routes = [
  { path: '', component: ProductPageListComponent },
  { path: 'add', component: ProductPageAddComponent },
  { path: 'edit', component: ProductPageEditComponent },
  { path: '**', redirectTo: '/dashboard/producto', pathMatch: 'full' },
]

//Ruta de Pedido
const routerChildrenPedido: Routes = [
  { path: '', component: PedidoPageListComponent },
  { path: 'add', component: PedidoPageAddComponent },
  { path: 'edit', component: PedidoPageEditComponent },
  { path: '**', redirectTo: '/dashboard/pedido', pathMatch: 'full' },
]

//Ruta de Venta
const routerChildrenVenta: Routes = [
  { path: '', component: VentaPageListComponent },
  { path: 'add', component: VentaPageAddComponent },
  { path: 'edit', component: VentaPageEditComponent },
  { path: '**', redirectTo: '/dashboard/venta', pathMatch: 'full' },
]

//Ruta del user
const routerChildrenUser: Routes = [
  { path: '', component: UserPageListComponent },
  { path: 'add', component: UserPageAddComponent },
  { path: 'edit', component: UserPageEditComponent },
  { path: '**', redirectTo: '/dashboard/user', pathMatch: 'full' },
]

//Rutas principales del dashboard
const routerChildrenDashboard: Routes = [
  { path: '', component: HomePageDashboardComponent },
  { path: 'home', component: HomePageDashboardComponent },
  { path: 'categoria', children:routerChildrenCategory },
  { path: 'sub-categoria', children: routerChildrenSubCategory },
  { path: 'marca', children: routerChildrenMarca },
  { path: 'etapa-vida', children: routerChildrenEtapaVida },
  { path: 'tamanio-raza', children: routerChildrenTamanioRaza },
  { path: 'producto', children: routerChildrenProducto },
  { path: 'pedido', children: routerChildrenPedido },
  { path: 'venta', children: routerChildrenVenta },
  { path: 'user', children: routerChildrenUser },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
]

//Rutas principales
const routes: Routes = [
  { path: '', component: HomePagePetspitComponent },
  { path: 'home', component: HomePagePetspitComponent },
  { path: 'contact', component: ContactPagePetspitComponent },
  { path: 'products', component: ProductsPagePetspitComponent },
  { path: 'about', component: AboutPagePetspitComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'profile', component: UserProfilePageComponent },
  { path: 'dashboard', component: DashboardPrincipalComponent, children: routerChildrenDashboard },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
