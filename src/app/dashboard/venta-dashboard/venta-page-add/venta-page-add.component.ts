import { AfterContentInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// @ts-ignore
import SwaggerUI from 'swagger-ui';
@Component({
  selector: 'app-venta-page-add',
  templateUrl: './venta-page-add.component.html',
  styleUrls: ['./venta-page-add.component.css']
})
export class VentaPageAddComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    const ui = SwaggerUI({
        url: 'http://localhost:8080/v3/api-docs',
        dom_id: '#customer-api-documentation'
    })

  }

}
