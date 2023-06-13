import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Animal } from 'src/app/models/model/Animal';
import { Category } from 'src/app/models/model/Category';
import { AnimalService } from 'src/app/services/models/animal/animal.service';
import { CategoryService } from 'src/app/services/models/category/category.service';

@Component({
  selector: 'app-category-page-edit',
  templateUrl: './category-page-edit.component.html',
  styleUrls: ['./category-page-edit.component.css']
})
export class CategoryPageEditComponent implements OnInit {

  formAddCategory: FormGroup = new FormGroup({});
  animales: Animal[] = [];


  constructor(private formBuilder: FormBuilder, private animalService: AnimalService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getAllAnimals();
    this.formAddCategory = this.formBuilder.group({
      descripcion: ['', [Validators.required,Validators.maxLength(255)]],
      estado: ['', [Validators.required]],
      animal: ['', [Validators.required]],
    });
  }

  getAllAnimals() {

    this.animalService.getAllAnimals()
      .subscribe({
        next: (response) => { this.animales = response },
        error: (error) => { console.log(error) }
      });
  }

  addCategory(category: Category): void {

    this.categoryService.saveCategory(category)
      .subscribe({
        next: (response) => { console.log(response) },
        error: (error) => { console.log(error) }
      });
  }

  fillCategoryOfSave(): Category {
    let category: Category = new Category();
    category.idCategory = 0;
    category.descripcion = this.formAddCategory.value.descripcion;
    category.idAnimal = this.formAddCategory.value.animal;
    category.estado = this.formAddCategory.value.estado;
    category.animal = new Animal();
    category.animal.idAnimal = this.formAddCategory.value.animal;

    return category;
  }

  submitCategory():void{
    let category:Category = this.fillCategoryOfSave();
    this.addCategory(category);
    console.log(this.formAddCategory.value);
    this.formAddCategory.reset();
    this.formAddCategory.get('animal')?.setValue('');
    this.formAddCategory.get('estado')?.setValue('');
  }
}
