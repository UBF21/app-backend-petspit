import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/model/Category';
import { CategoryService } from 'src/app/services/models/category/category.service';

@Component({
  selector: 'app-category-page-list',
  templateUrl: './category-page-list.component.html',
  styleUrls: ['./category-page-list.component.css']
})
export class CategoryPageListComponent implements OnInit {

  categories: Category[] = [];

  constructor(private categoryServices: CategoryService) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories(): void {
    this.categoryServices.getAllCategories()
      .subscribe({
        next: (response) => {
          this.categories = response;
          console.log(response);
        },
        error: (error) => { console.log(error) }
      });
  }

  saveCategory(category: Category): void {
    this.categoryServices.saveCategory(category)
      .subscribe({
        next: (response) => { console.log(response) },
        error: (error) => { console.log(error) }
      });
  }

  deleteCategory(idCategory: number): void {
    let category: Category = this.categories.find(item => item.idCategory === idCategory)!;
    if (category.estado === "I") {
      console.log("El registro ya esta dehabilitado.");
    } else {
      category.estado = "I";
      this.saveCategory(category);
    }

  }
}
