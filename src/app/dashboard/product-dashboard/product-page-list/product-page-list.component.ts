import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { file } from '@rxweb/reactive-form-validators';
import { Observable, map } from 'rxjs';
import { ViewImageProduct } from 'src/app/models/interfaces/ViewImageProduct';
import { Product } from 'src/app/models/model/Product';
import { ProductService } from 'src/app/services/models/product/product.service';
import { UploadImageService } from 'src/app/services/models/upload/upload-image.service';

@Component({
  selector: 'app-product-page-list',
  templateUrl: './product-page-list.component.html',
  styleUrls: ['./product-page-list.component.css']
})
export class ProductPageListComponent implements OnInit {

  viewProducts: ViewImageProduct[] = [];
  products: Product[] = [];

  constructor(private productService: ProductService, private uploadImageService: UploadImageService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  saveProduct(product: Product): void {
    this.productService.saveProduct(product)
      .subscribe({
        next: (response) => { console.log(response) },
        error: (error) => { console.log(error) }
      });
  }

  getAllProducts() {
    this.productService.getAllProducts()
      .subscribe({
        next: (response) => {
          this.products = response;
          console.log(response);
          this.fillViewProducts();
        },
        error: (error) => { console.log(error) }
      });
  }

  fillViewProducts(): void {
    this.products.forEach((item) => {

      this.getImageProduct(item.imagen)
        .subscribe({
          next: (response) => {
            this.addRowViewProduct(response, item);
          },
          error: (error) => { console.log(error) }
        });
    });
  }

  addRowViewProduct(image: SafeUrl, product: Product): void {
    this.viewProducts.push({ pathName: image, name: product.imagen, product: product });
  }

  getImageProduct(fileName: string): Observable<SafeUrl> {

    return this.uploadImageService.getImageToProduct(fileName)
      .pipe(map((response) => {
        URL.revokeObjectURL(response);
        const url: string = URL.createObjectURL(response);
        return this.sanitizer.bypassSecurityTrustUrl(url);
      }));
  }

  deleteProduct(idProduct: number): void {
    let product: Product = this.products.find(item => item.idProduct === idProduct)!;
    if (product.estado === 'I') {
      console.log("El Registro esta deshabilitado.");
    } else {
      product.estado = 'I';
      this.saveProduct(product);
    }
  }

}
