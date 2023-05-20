import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/models/model/Category';
import { SubCategory } from 'src/app/models/model/SubCategory';
import { CategoryService } from 'src/app/services/models/category/category.service';
import { SubcategoryService } from 'src/app/services/models/subcategory/subcategory.service';

@Component({
  selector: 'app-subcategory-page-add',
  templateUrl: './subcategory-page-add.component.html',
  styleUrls: ['./subcategory-page-add.component.css']
})
export class SubcategoryPageAddComponent implements OnInit {

  formAddSubCategory: FormGroup = new FormGroup({});
  categories: Category[] = [];

  constructor(private formBuilder: FormBuilder, private categoryServices: CategoryService, private subCategoryServices: SubcategoryService) { }

  ngOnInit(): void {
    this.getAllCategories();
    this.formAddSubCategory = this.formBuilder.group({
      descripcion: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      category: ['', [Validators.required]]
    });
  }

  getAllCategories() {
    this.categoryServices.getAllCategories()
      .subscribe({
        next: (response) => {
          this.categories = response;
          console.log(response);
        },
        error: (error) => { console.log(error); }
      });
  }

  fillSubCategoryForSave(): SubCategory {
    let subCategory: SubCategory = new SubCategory();
    subCategory.idSubCategory = 0;
    subCategory.descripcion = this.formAddSubCategory.value.descripcion;
    subCategory.estado = this.formAddSubCategory.value.estado;
    subCategory.idCategory = this.formAddSubCategory.value.category;
    subCategory.category = new Category();
    subCategory.category.idCategory = this.formAddSubCategory.value.category;


    return subCategory;
  }

  addSubCategory(subCategory: SubCategory): void {
    this.subCategoryServices.saveSubCategory(subCategory)
      .subscribe({
        next: (response) => { console.log(response) },
        error: (error) => { console.log(error); }
      });
  }

  submitSubCategory(): void {
    let subCategory: SubCategory = this.fillSubCategoryForSave();
    this.addSubCategory(subCategory);
    console.log(this.formAddSubCategory.value);
    this.formAddSubCategory.reset();
  }
}
