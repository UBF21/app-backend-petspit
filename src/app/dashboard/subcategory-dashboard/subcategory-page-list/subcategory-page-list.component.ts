import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/model/Category';
import { SubCategory } from 'src/app/models/model/SubCategory';
import { SubcategoryService } from 'src/app/services/models/subcategory/subcategory.service';

@Component({
  selector: 'app-subcategory-page-list',
  templateUrl: './subcategory-page-list.component.html',
  styleUrls: ['./subcategory-page-list.component.css']
})
export class SubcategoryPageListComponent implements OnInit {

  subCategories: SubCategory[] = [];

  constructor(private subCategoryServices: SubcategoryService) { }

  ngOnInit(): void {
    this.getAllSubCategories();
  }

  getAllSubCategories(): void {
      this.subCategoryServices.getAllSubCategories()
      .subscribe({
        next:(response) => {
          this.subCategories = response;
          console.log(response);
        },
        error:(error) => {console.log(error)}
      });
  }

  saveSubCategory(subCategory:SubCategory):void{
    this.subCategoryServices.saveSubCategory(subCategory)
    .subscribe({
      next:(response) => {console.log(response)},
      error:(error) => {console.log(error)}
    });
  }

  deleteSubCategory(idSubCategory:number):void{
    let subCategory:SubCategory = this.subCategories.find(item => item.idSubCategory === idSubCategory)!;
    if(subCategory.estado === "I"){
      console.log("El Registro esta deshabilitado.");
    }else{
      subCategory.estado = "I";
      this.saveSubCategory(subCategory);
    }
  }
}
