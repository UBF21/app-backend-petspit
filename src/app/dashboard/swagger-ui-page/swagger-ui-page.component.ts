import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
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
      url: `${environment.backendUrl}v3/api-docs`,
      dom_id: '#customer-api-documentation'
  })
  }

}
