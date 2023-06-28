import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { error } from '@rxweb/reactive-form-validators';
import { Observable, delay, map } from 'rxjs';
import { ViewImageProduct } from 'src/app/models/interfaces/ViewImageProduct';
import { Pedido } from 'src/app/models/model/Pedido';
import { Product } from 'src/app/models/model/Product';
import { AlertService } from 'src/app/services/alert/alert.service';
import { LoginService } from 'src/app/services/auth/login.service';
import { CarritoService } from 'src/app/services/carrito/carrito.service';
import { PublicProductService } from 'src/app/services/public/product/public-product.service';
import { PublicUploadService } from 'src/app/services/public/upload/public-upload.service';
import { PublicUploadStorageImageService } from 'src/app/services/public/uploadstorage/public-upload-storage-image.service';

@Component({
  selector: 'app-view-product-page',
  templateUrl: './view-product-page.component.html',
  styleUrls: ['./view-product-page.component.css']
})
export class ViewProductPageComponent implements OnInit {

  product: Product = new Product();
  viewProduct: ViewImageProduct = { pathName: "", name: "", product: new Product() };
  idProducto: number = 0;
  cantidad: number = 1;
  loadingProduct: boolean = true;

  constructor(private route: ActivatedRoute, private productServicePublic: PublicProductService,
    private uploadImagePublic: PublicUploadService, private sanitizer: DomSanitizer, private carrito: CarritoService,
    private loginService:LoginService,private publicUploadStorageImageService:PublicUploadStorageImageService,private alertService:AlertService) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe({
        next: (params) => {
          const idProducto: string | undefined = params['producto'];
          if (idProducto !== undefined) this.idProducto = +idProducto;
          this.getProductById();
        },
        error: (error) => console.log(error)
      });


  }

  getImageProduct(fileName: string): Observable<SafeUrl> {
    return this.publicUploadStorageImageService.getPublicImageProduct(fileName)
      .pipe(map((response) => {
        URL.revokeObjectURL(response);
        const url: string = URL.createObjectURL(response);
        return this.sanitizer.bypassSecurityTrustUrl(url);
      }));
  }

  getViewProduct(image: SafeUrl, product: Product): void {
    this.viewProduct = { pathName: image, name: product.imagen, product: product };
  }

  getProductById(): void {
    this.loadingProduct = true;
    this.productServicePublic.getProductById(this.idProducto)
      .subscribe({
        next: ({ product }) => {
          console.log(product);
          this.getImageProduct(product.imagen)
            .subscribe({ next: (response) => this.getViewProduct(response, product), error: (error) => console.log(error) });
          setTimeout(()=>{this.loadingProduct = false},2000);
        },
        error: (error) => console.log(error)
      });
  }

  incrementoCantidad(): void {
    this.cantidad++;
  }

  decrementoCantidad() {
    if (this.cantidad > 1) this.cantidad--;
  }

  //carrito de compras
  addItemCarrito(producto: Product) {

    if(this.loginService.isLoggedIn()){
      
      if(this.carrito.isItemExist(producto)){
        let index = this.carrito.getIndexItemCarrito(producto);
        let pedidos = this.carrito.getListCarrito();
        pedidos[index].cantidad = pedidos[index].cantidad + this.cantidad;
        pedidos[index].importe =pedidos[index].product.precio *  pedidos[index].cantidad;
        this.carrito.updateListCarrito(pedidos);
        this.alertService.messageAddItemCarrito("Se añadió correctamente el producto.");
      }else{
        let pedido: Pedido = new Pedido();
        pedido.idProduct = producto.idProduct;
        pedido.product = producto;
        pedido.cantidad = this.cantidad;
        pedido.estado = "A";
        pedido.importe = (producto.precio * pedido.cantidad);
        this.carrito.additemCarrito(pedido);
        this.alertService.messageAddItemCarrito("Se añadió correctamente el producto.");
      }

    }else{
      this.alertService.messageInfo("Necesita Iniciar sesión para poder comprar un productos.");
    }
  }
}
