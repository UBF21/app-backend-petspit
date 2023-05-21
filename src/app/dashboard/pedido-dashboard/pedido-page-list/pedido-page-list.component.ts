import { Component, OnInit, ValueProvider } from '@angular/core';
import { Pedido } from 'src/app/models/model/Pedido';
import { PedidoService } from 'src/app/services/models/pedido/pedido.service';

@Component({
  selector: 'app-pedido-page-list',
  templateUrl: './pedido-page-list.component.html',
  styleUrls: ['./pedido-page-list.component.css']
})
export class PedidoPageListComponent implements OnInit {

  pedidos: Pedido[] = [];

  constructor(private pedidoServices: PedidoService) { }

  ngOnInit(): void {
  }


  savePedido(pedido: Pedido): void {
    this.pedidoServices.savePedido(pedido)
      .subscribe({
        next: (response) => { console.log(response) },
        error: (error) => { console.log(error) }
      });
  }

  getAllPedidos() {
    this.pedidoServices.getAllPedidos()
      .subscribe({
        next: (response) => {
          this.pedidos = response;
          console.log(response);
        },
        error: (error) => { console.log(error) }
      });
  }

  deletePedido(idPedido: number): void {

    let pedido: Pedido = this.pedidos.find(item => item.idPedido === idPedido)!;
    if (pedido.estado === "I") {
      console.log("El Registro esta deshabilitado.");
    } else {
      pedido.estado = "I";
      this.savePedido(pedido);
    }
  }
}
