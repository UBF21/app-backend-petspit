import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Observable, map } from 'rxjs';
import { ViewImagePedido } from 'src/app/models/interfaces/ViewImagePedido';
import { Pedido } from 'src/app/models/model/Pedido';
import { CarritoService } from 'src/app/services/carrito/carrito.service';
import { ProductService } from 'src/app/services/models/product/product.service';
import { UploadImageService } from 'src/app/services/models/upload/upload-image.service';

@Component({
  selector: 'app-view-carrito-page',
  templateUrl: './view-carrito-page.component.html',
  styleUrls: ['./view-carrito-page.component.css']
})
export class ViewCarritoPageComponent implements OnInit {
  viewPedidos: ViewImagePedido[] = [];
  pedidos: Pedido[] = [];
  total:number = 0;
  constructor(private carrito: CarritoService, private productoService: ProductService, private uploadService: UploadImageService, private sanitizer: DomSanitizer) { }


  ngOnInit(): void {
    this.getAllPedidosCarrito();
    this.calcultePrecioTotal();
  }

  getAllPedidosCarrito() {
    this.pedidos = this.carrito.getListCarrito();
    this.fillViewPedidos();
  }

  fillViewPedidos(){
    this.pedidos.forEach(item => {

      this.getImageProduct(item.product.imagen)
      .subscribe({
        next:(response) =>{
          this.addRowViewPedido(response,item);
        },
        error:(error) => {console.log(error)}
      })

    });
  }

  calcultePrecioTotal(){
    this.pedidos.forEach(item => this.total += item.importe);
  }

  addRowViewPedido(image: SafeUrl, pedido: Pedido) {
    this.viewPedidos.push({ name: pedido.product.imagen, pathName: image, pedido: pedido });
  }

  getImageProduct(fileName: string): Observable<SafeUrl> {

    return this.uploadService.getImageToProduct(fileName)
      .pipe(map((response) => {
        URL.revokeObjectURL(response);
        const url: string = URL.createObjectURL(response);
        return this.sanitizer.bypassSecurityTrustUrl(url);
      }));
  }
}
