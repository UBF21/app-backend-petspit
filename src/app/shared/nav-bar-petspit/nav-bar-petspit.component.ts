import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { ViewImagePedido } from 'src/app/models/interfaces/ViewImagePedido';
import { Category } from 'src/app/models/model/Category';
import { Pedido } from 'src/app/models/model/Pedido';
import { SubCategory } from 'src/app/models/model/SubCategory';
import { LoginService } from 'src/app/services/auth/login.service';
import { CarritoService } from 'src/app/services/carrito/carrito.service';
import { PublicCategoryService } from 'src/app/services/public/category/public-category.service';
import { PublicSubCategoryService } from 'src/app/services/public/subCategory/public-sub-category.service';
import { PublicUploadService } from 'src/app/services/public/upload/public-upload.service';
import { SharedInformationService } from 'src/app/services/shared-information/shared-information.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav-bar-petspit',
  templateUrl: './nav-bar-petspit.component.html',
  styleUrls: ['./nav-bar-petspit.component.css']
})
export class NavBarPetspitComponent implements OnInit {
  categories: Category[] = [];
  Subcategories: SubCategory[] = [];
  viewPedidos: ViewImagePedido[] = [];
  pedidos: Pedido[] = [];

  total: number = 0;
  cantdadTotalPedidos:number = 0;

  loadingPedidos:boolean = true;
  loadingCantidad:boolean = true;
  loadingTotal:boolean = true;
  loadingSubTotal:boolean = true;

  constructor(public shared :SharedInformationService,public loginServices:LoginService,private publicCategoryServices: PublicCategoryService,
     private publicSubCategoryService: PublicSubCategoryService,private router:Router,private carrito: CarritoService,
     private sanitizer: DomSanitizer,private publicUploadService:PublicUploadService){ }

  ngOnInit(): void {
    this.getAllCategories();
    this.getAllSubCategories();
  }

  getAllPedidosCarrito() {
    this.pedidos = this.carrito.getListCarrito();
    if(this.pedidos.length !== 0) {      
      setTimeout(()=> {
        this.fillViewPedidos();
        this.loadingPedidos = false;
      },3000)
    }
  }

  fillViewPedidos() {
    this.pedidos.forEach(item => {

      this.getImageProduct(item.product.imagen)
        .subscribe({
          next: (response) => {
            this.addRowViewPedido(response, item);
          },
          error: (error) => { console.log(error) }
        })

    });

    console.log(this.viewPedidos);
  }

  addRowViewPedido(image: SafeUrl, pedido: Pedido) {
    this.viewPedidos.push({ name: pedido.product.imagen, pathName: image, pedido: pedido });
  }

  getImageProduct(fileName: string): Observable<SafeUrl> {
    return this.publicUploadService.getImageToProductOfApi(fileName)
    .pipe(map((response) => {
      URL.revokeObjectURL(response);
      const url: string = URL.createObjectURL(response);
      return this.sanitizer.bypassSecurityTrustUrl(url);
    }));
  }

  calcultePrecioTotal() {
    this.total = 0;
    if(this.pedidos.length !== 0){
      setTimeout( ()=> {
        this.pedidos.forEach(item => this.total += item.importe);
        this.loadingTotal = false;
        this.loadingSubTotal = false;
      },3000) 
    }
  }

  totalCantidadPedidos(){
    this.cantdadTotalPedidos = 0;
    
    if(this.pedidos.length !== 0){
      setTimeout(() => {
        this.pedidos.forEach(item => this.cantdadTotalPedidos += item.cantidad);
        this.loadingCantidad = false;
      },3000);
    }
  }

  deleteItemCarrito(index: number) {

    if (index >= 0 && index < this.pedidos.length) {
      this.pedidos.splice(index, 1);
      this.carrito.updateListCarrito(this.pedidos);
      this.viewPedidos = [];
    }
    this.loadingPedidos = true;
    this.loadingSubTotal = true;
    this.loadingCantidad = true;
    this.loadingTotal = true;
    this.getAllPedidosCarrito();
    this.calcultePrecioTotal();
    this.totalCantidadPedidos();
  }

  incrementoCantidad(pedido: Pedido): void {
    let index = this.carrito.getIndexItemCarrito(pedido.product);
    ++pedido.cantidad;
    this.pedidos[index].cantidad = pedido.cantidad;
    this.pedidos[index].importe = pedido.cantidad * pedido.product.precio;
    this.carrito.updateListCarrito(this.pedidos);
    this.loadingSubTotal = true;
    this.loadingTotal = true;
    this.loadingCantidad = true;
    this.loadingPedidos = true;
    this.viewPedidos= [];
    this.getAllPedidosCarrito();
    this.calcultePrecioTotal();
    this.totalCantidadPedidos();
  }

  decrementoCantidad(pedido: Pedido): void {
    let index = this.carrito.getIndexItemCarrito(pedido.product);
    if (pedido.cantidad > 1) {
      pedido.cantidad--;
      this.pedidos[index].cantidad = pedido.cantidad;
      this.pedidos[index].importe = (pedido.cantidad * pedido.product.precio);
      this.carrito.updateListCarrito(this.pedidos);
      this.loadingSubTotal = true;
      this.loadingCantidad = true;
      this.loadingTotal = true;
      this.loadingPedidos = true;
      this.viewPedidos= [];
      this.getAllPedidosCarrito();
      this.calcultePrecioTotal();
      this.totalCantidadPedidos();
    }
  }

  getAllCategories(): void {
    this.publicCategoryServices.getAllCategories()
      .subscribe({
        next: (response) => {
          this.categories = response;
          console.log(response);
        },
        error: (error) => { console.log(error) }
      });
  }

  getAllSubCategories(){

    this.publicSubCategoryService.getAllSubCategories()
    .subscribe({
      next:(response)=>{
          this.Subcategories = response;
      },
      error:(error)=>{console.log(error)}
    });
  }

  routerOfCategory(descripcion:string){

    this.router.navigate(['/products'],{queryParams :{category : descripcion}});
  }

  routerOfSubCategory(descripcion:string){
    this.router.navigate(['/products'],{queryParams :{subCategory : descripcion}});
  }

  routerOfAllProducts(){
    this.router.navigate(['/products'],{queryParams :{todas : "all"}});
  }

  datosPedidos(){
    this.viewPedidos = [];
    this.loadingPedidos = true;
    this.loadingSubTotal = true;
    this.loadingCantidad = true;
    this.loadingTotal = true;
    this.getAllPedidosCarrito();
    this.calcultePrecioTotal();
    this.totalCantidadPedidos();
  }
}
