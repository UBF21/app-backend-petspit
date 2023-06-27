import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Route, Router } from '@angular/router';
import { BehaviorSubject, count, delay, map } from 'rxjs';
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
import { PublicProductService } from 'src/app/services/public/product/public-product.service';
import { Product } from 'src/app/models/model/Product';
import { ViewImageProduct } from 'src/app/models/interfaces/ViewImageProduct';
import { PublicUploadStorageImageService } from 'src/app/services/public/uploadstorage/public-upload-storage-image.service';

@Component({
  selector: 'app-nav-bar-petspit',
  templateUrl: './nav-bar-petspit.component.html',
  styleUrls: ['./nav-bar-petspit.component.css']
})
export class NavBarPetspitComponent implements OnInit {
  categories: Category[] = [];
  Subcategories: SubCategory[] = [];
  viewPedidos: ViewImagePedido[] = [];
  viewProducts: ViewImageProduct[] = [];
  productsSearchResult: Product[] = [];
  viewProductsSearchResult: ViewImageProduct[] = [];
  products: Product[] = [];
  pedidos: Pedido[] = [];

  total: number = 0;
  cantdadTotalPedidos: number = 0;
  valueSearch: string = "";

  loadingPedidos: boolean = true;
  loadingCantidad: boolean = true;
  loadingTotal: boolean = true;
  loadingSubTotal: boolean = true;
  loadingSearch: boolean = false;

  constructor(public shared: SharedInformationService, public loginServices: LoginService, private publicCategoryServices: PublicCategoryService,
    private publicSubCategoryService: PublicSubCategoryService, private router: Router, private carrito: CarritoService,
    private sanitizer: DomSanitizer, private publicUploadService: PublicUploadService, private publicProductService: PublicProductService,
    private publicUploadStorageImageService:PublicUploadStorageImageService) { }

  ngOnInit(): void {
    this.getAllProducts()
    this.getAllCategories();
    this.getAllSubCategories();
  }

  getAllPedidosCarrito() {
    this.pedidos = this.carrito.getListCarrito();
    if (this.pedidos.length !== 0) {
      this.fillViewPedidos();
      setTimeout(() => {
        this.loadingPedidos = false;
      }, 3000)
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

  fillViewProducts() {
    this.products.forEach(item => {

      this.getImageProduct(item.imagen)
        .subscribe(
          {
            next: (response) => {
              this.addRowViewProduct(response, item);
            },
            error: (error) => console.log(error)
          }
        );
    });
  }
  addRowViewPedido(image: SafeUrl, pedido: Pedido) {
    this.viewPedidos.push({ name: pedido.product.imagen, pathName: image, pedido: pedido });
  }

  addRowViewProduct(image: SafeUrl, product: Product) {
    this.viewProducts.push({ pathName: image, name: product.imagen, product });
  }

  getImageProduct(fileName: string): Observable<SafeUrl> {
    return this.publicUploadStorageImageService.getPublicImageProduct(fileName)
      .pipe(map((response) => {
        URL.revokeObjectURL(response);
        const url: string = URL.createObjectURL(response);
        return this.sanitizer.bypassSecurityTrustUrl(url);
      }));
  }

  calcultePrecioTotal() {
    this.total = 0;
    if (this.pedidos.length !== 0) {
      setTimeout(() => {
        this.pedidos.forEach(item => this.total += item.importe);
        this.loadingTotal = false;
        this.loadingSubTotal = false;
      }, 3000)
    }
  }

  totalCantidadPedidos() {
    this.cantdadTotalPedidos = 0;

    if (this.pedidos.length !== 0) {
      setTimeout(() => {
        this.pedidos.forEach(item => this.cantdadTotalPedidos += item.cantidad);
        this.loadingCantidad = false;
      }, 3000);
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
    this.viewPedidos = [];
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
      this.viewPedidos = [];
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

  getAllSubCategories() {

    this.publicSubCategoryService.getAllSubCategories()
      .subscribe({
        next: (response) => {
          this.Subcategories = response;
        },
        error: (error) => { console.log(error) }
      });
  }

  routerOfCategory(descripcion: string) {

    this.router.navigate(['/products'], { queryParams: { category: descripcion } });
  }

  routerOfSubCategory(descripcion: string) {
    this.router.navigate(['/products'], { queryParams: { subCategory: descripcion } });
  }

  routerOfAllProducts() {
    this.router.navigate(['/products'], { queryParams: { todas: "all" } });
  }

  redictToComprar(): void {
    this.router.navigate(['/comprar']);
  }

  datosPedidos() {
    this.viewPedidos = [];
    this.loadingPedidos = true;
    this.loadingSubTotal = true;
    this.loadingCantidad = true;
    this.loadingTotal = true;
    this.getAllPedidosCarrito();
    this.calcultePrecioTotal();
    this.totalCantidadPedidos();
  }

  getAllProducts(): void {
    this.publicProductService.getAllProducts()
      .subscribe(
        {
          next: (response) => { 
            this.products = response;
            this.fillViewProducts();
          },
          error: (error) => { console.log(error) }
        }
      );

  }

  getSearchProducts(search: string): void {
    this.loadingSearch = true;
    setTimeout(() => {
      this.productsSearchResult = [];
      this.viewProductsSearchResult = this.viewProducts.filter(item => item.product.titulo.toLowerCase().includes(search.toLowerCase()));
      console.log(this.viewProductsSearchResult);
      this.loadingSearch = false;
    }, 1000);
  }

  searchProduct() {
    if (this.valueSearch) {
      this.getSearchProducts(this.valueSearch);
    } else {
      this.productsSearchResult = [];
      this.loadingSearch = false;
    }

  }
}
