import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-page-petspit',
  templateUrl: './products-page-petspit.component.html',
  styleUrls: ['./products-page-petspit.component.css']
})
export class ProductsPagePetspitComponent implements OnInit {

  marcas:string[] = ["RicoCan","Mimascot","Acana","Choice","4 Patitas","Bravery"]
  verMas:boolean = false;
  cambiarVista:boolean = true;

  constructor() { }
  
  ngOnInit(): void {
  }

}
