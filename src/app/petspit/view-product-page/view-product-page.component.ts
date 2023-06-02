import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { error } from '@rxweb/reactive-form-validators';
import { Observable, delay, map } from 'rxjs';
import { ViewImageProduct } from 'src/app/models/interfaces/ViewImageProduct';
import { Product } from 'src/app/models/model/Product';
import { PublicProductService } from 'src/app/services/public/product/public-product.service';
import { PublicUploadService } from 'src/app/services/public/upload/public-upload.service';

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
    private uploadImagePublic: PublicUploadService, private sanitizer: DomSanitizer) { }

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
    return this.uploadImagePublic.getImageToProductOfApi(fileName)
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

    this.productServicePublic.getProductById(this.idProducto)
      .pipe(delay(2000))
      .subscribe({
        next: ({ product }) => {
          console.log(product);
          this.getImageProduct(product.imagen)
            .subscribe({ next: (response) => this.getViewProduct(response, product), error: (error) => console.log(error) });
          this.loadingProduct = false;
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
}
