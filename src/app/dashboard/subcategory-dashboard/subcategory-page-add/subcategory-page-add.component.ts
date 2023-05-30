import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { Animal } from 'src/app/models/model/Animal';
import { Category } from 'src/app/models/model/Category';
import { SubCategory } from 'src/app/models/model/SubCategory';
import { AnimalService } from 'src/app/services/models/animal/animal.service';
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
  animals:Animal[] = [];

  idAnimalSelected: number = 0;

  constructor(private formBuilder: FormBuilder, private categoryServices: CategoryService,private animalService:AnimalService, private subCategoryServices: SubcategoryService) { }

  ngOnInit(): void {
    this.getAllAnimals();
    this.formAddSubCategory = this.formBuilder.group({
      descripcion: ['', [Validators.required, Validators.maxLength(255)]],
      estado: ['', [Validators.required]],
      animal: ['', [Validators.required]],
      category: ['', [Validators.required]]
    });

    this.formAddSubCategory.get('category')?.disable();
  }

  getAllCategories() :void{
    this.categoryServices.getAllCategories()
      .pipe(map((response:Category[]) =>  response.filter(item => item.idAnimal === this.idAnimalSelected)))
      .subscribe({
        next: (response) => {
          this.categories = response;
          console.log(response);
        },
        error: (error) => { console.log(error); }
      });
  }

  getAllAnimals():void{
      this.animalService.getAllAnimals()
      .subscribe(
        {
          next:(response) => this.animals = response,
          error:(error) => console.log(error)
        }
      );
  }


  fillSubCategoryForSave(): SubCategory {
    let subCategory: SubCategory = new SubCategory();
    subCategory.idSubCategory = 0;
    subCategory.descripcion = this.formAddSubCategory.value.descripcion;
    subCategory.estado = this.formAddSubCategory.value.estado;
    subCategory.idCategory = this.formAddSubCategory.value.category;
    subCategory.category = new Category();
    subCategory.category.idCategory = this.formAddSubCategory.value.category;
    subCategory.idAnimal = this.formAddSubCategory.value.animal;
    subCategory.animal.idAnimal = this.formAddSubCategory.value.animal;

    return subCategory;
  }

  addSubCategory(subCategory: SubCategory): void {
    this.subCategoryServices.saveSubCategory(subCategory)
      .subscribe({
        next: (response) => { console.log(response) },
        error: (error) => { console.log(error); }
      });
  }

  //evento
  onChangeAnimal(event:any){

    if (event.target.value === '') {
      this.formAddSubCategory.get('category')?.disable();
    }else{
      this.idAnimalSelected = +event.target.value;
      this.getAllCategories();
      this.formAddSubCategory.get('category')?.enable();
    }
  } 


  submitSubCategory(): void {
    let subCategory: SubCategory = this.fillSubCategoryForSave();
    this.addSubCategory(subCategory);
    console.log(this.formAddSubCategory.value);
    this.formAddSubCategory.reset();
    this.formAddSubCategory.get('animal')?.setValue('');
    this.formAddSubCategory.get('estado')?.setValue('');
    this.formAddSubCategory.get('category')?.setValue('');
  }
}
