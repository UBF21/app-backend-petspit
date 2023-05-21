import { Component, OnInit } from '@angular/core';
import { find } from 'rxjs';
import { Venta } from 'src/app/models/model/Venta';
import { VentaService } from 'src/app/services/models/venta/venta.service';

@Component({
  selector: 'app-venta-page-list',
  templateUrl: './venta-page-list.component.html',
  styleUrls: ['./venta-page-list.component.css']
})
export class VentaPageListComponent implements OnInit {

  ventas: Venta[] = [];

  constructor(private ventaServices: VentaService) { }

  ngOnInit(): void {
  }

  saveVenta(venta: Venta) {
    this.ventaServices.saveVenta(venta)
      .subscribe({
        next: (response) => { console.log(response) },
        error: (error) => { console.log(error) }
      });
  }

  getAllVentas() {
    this.ventaServices.getAllVentas()
      .subscribe({
        next: (response) => {
          this.ventas = response;
          console.log(response);
        },
        error: (error) => { console.log(error) }
      });
  }

  deleteVenta(idVenta: number) {
    let venta: Venta = this.ventas.find(item => item.idVenta === idVenta)!;
    if (venta.estado === "I") {
      console.log("El Registro esta deshabilitado.");
    } else {
      venta.estado = "I";
      this.saveVenta(venta);
    }
  }
}
