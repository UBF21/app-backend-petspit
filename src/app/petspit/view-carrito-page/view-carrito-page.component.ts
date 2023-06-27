import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Observable, map } from 'rxjs';
import { ViewImagePedido } from 'src/app/models/interfaces/ViewImagePedido';
import { Pedido } from 'src/app/models/model/Pedido';
import { CarritoService } from 'src/app/services/carrito/carrito.service';
import { ProductService } from 'src/app/services/models/product/product.service';
import { UploadImageService } from 'src/app/services/models/upload/upload-image.service';
import { PublicUploadStorageImageService } from 'src/app/services/public/uploadstorage/public-upload-storage-image.service';

@Component({
  selector: 'app-view-carrito-page',
  templateUrl: './view-carrito-page.component.html',
  styleUrls: ['./view-carrito-page.component.css']
})
export class ViewCarritoPageComponent implements OnInit {
  viewPedidos: ViewImagePedido[] = [];
  pedidos: Pedido[] = [];
  total: number = 0;
  cantdadTotalPedidos:number = 0;
  loadingPedidos:boolean = true;
  loadingCantidad:boolean = true;
  loadingTotal:boolean = true;
  loadingSubTotal:boolean = true;
  constructor(private carrito: CarritoService, private productoService: ProductService, private uploadService: UploadImageService,
     private sanitizer: DomSanitizer,private publicUploadStorageImageService:PublicUploadStorageImageService) { }


  ngOnInit(): void {
    this.getAllPedidosCarrito();
    this.calcultePrecioTotal();
    this.totalCantidadPedidos();
  }

  getAllPedidosCarrito() {
    this.pedidos = this.carrito.getListCarrito();
    if(this.pedidos.length !== 0) {      
      this.fillViewPedidos();
      setTimeout(()=> {
        this.loadingPedidos = false;
      },3000)
    }
  }

  totalCantidadPedidos(){
    this.cantdadTotalPedidos = 0;
    
    setTimeout(() => {
      this.pedidos.forEach(item => this.cantdadTotalPedidos += item.cantidad);
      this.loadingCantidad = false;
    },3000);
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
  }

  calcultePrecioTotal() {
    this.total = 0;
    setTimeout( ()=> {
      this.pedidos.forEach(item => this.total += item.importe);
      this.loadingTotal = false;
      this.loadingSubTotal = false;
    },3000) 
  }

  addRowViewPedido(image: SafeUrl, pedido: Pedido) {
    this.viewPedidos.push({ name: pedido.product.imagen, pathName: image, pedido: pedido });
  }

  getImageProduct(fileName: string): Observable<SafeUrl> {

    return this.publicUploadStorageImageService.getPublicImageProduct(fileName)
      .pipe(map((response) => {
        URL.revokeObjectURL(response);
        const url: string = URL.createObjectURL(response);
        return this.sanitizer.bypassSecurityTrustUrl(url);
      }));
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
    this.loadingCantidad = true;
    this.loadingTotal = true;
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
      this.calcultePrecioTotal();
      this.totalCantidadPedidos();
    }
  }
}
