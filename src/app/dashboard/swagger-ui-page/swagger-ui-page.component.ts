import { Component, OnInit } from '@angular/core';
// @ts-ignore
import SwaggerUI from 'swagger-ui';
@Component({
  selector: 'app-swagger-ui-page',
  templateUrl: './swagger-ui-page.component.html',
  styleUrls: ['./swagger-ui-page.component.css']
})
export class SwaggerUiPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const ui = SwaggerUI({
      url: 'http://localhost:8080/v3/api-docs',
      dom_id: '#customer-api-documentation'
  })
  }

}
