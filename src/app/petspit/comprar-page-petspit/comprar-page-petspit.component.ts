import { Component, OnInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ViewImageUser } from 'src/app/models/interfaces/ViewImageUser';
import { Pedido } from 'src/app/models/model/Pedido';
import { User } from 'src/app/models/model/User';
import { AlertService } from 'src/app/services/alert/alert.service';
import { CarritoService } from 'src/app/services/carrito/carrito.service';
import { PublicVentaService } from 'src/app/services/public/venta/public-venta.service';
import { SharedInformationService } from 'src/app/services/shared-information/shared-information.service';

@Component({
  selector: 'app-comprar-page-petspit',
  templateUrl: './comprar-page-petspit.component.html',
  styleUrls: ['./comprar-page-petspit.component.css']
})
export class ComprarPagePetspitComponent implements OnInit {

  user: ViewImageUser = { name: "", pathName: "", user: new User() };
  pedidos: Pedido[] = [];
  precioTotal: number = 0;
  cantidadTotal: number = 0;
  loadingInfoCompra: boolean = true;
  loadingItemsCompra: boolean = true;
  loadingTotalCompra: boolean = true;
  loadingCantidadCompra: boolean = true;


  constructor(private sharedInformationService: SharedInformationService, private carrito: CarritoService, private ventaService: PublicVentaService,
    private alertService:AlertService,private router:Router) { }

  ngOnInit(): void {
    this.loadingInfoCompra = true;
    this.loadingItemsCompra = true;
    this.loadingTotalCompra = true;
    this.loadingCantidadCompra = true;
    setTimeout(() => {
      this.user = this.sharedInformationService.viewUser;
      console.log(this.user);
      this.loadingInfoCompra = false;
     
    }, 3000);

    this.getAllPedidos();
  }

  getAllPedidos() {

    setTimeout(() => {
      this.pedidos = this.carrito.getListCarrito();
      this.loadingItemsCompra = false;
      this.loadingTotalCompra = false;
      this.loadingCantidadCompra = false;
      this.calcularTotal();
      this.calcularTotalPedidos();
    }, 3000);
    console.log(this.pedidos);
  }

  calcularTotal() {
    let pedidos: Pedido[] = this.pedidos;
    pedidos.forEach(item => this.precioTotal += item.product.precio);
  }

  calcularTotalPedidos() {
    let pedidos: Pedido[] = this.pedidos;
    pedidos.forEach(item => this.cantidadTotal += item.cantidad);
  }

  generarCompra(pedidos: Pedido[], idUsuario: number) {
    this.ventaService.generarCompra(pedidos, idUsuario)
      .subscribe(
        {
          next: (response) => { 
            this.alertService.messageTimeSuccess("su compra.","Se realizó la compra correctamente.");
            setTimeout(()=> {this.router.navigate(['/home'])},4500);
            console.log(response)
          },
          error: (error) => { console.log(error) }
        }
      );
  }

  generarCompraPedidos() {
    let pedidos = this.pedidos;
    let idUsuario = this.user.user.idUser;
    this.generarCompra(pedidos, idUsuario);
  }
}
