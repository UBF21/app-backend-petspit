import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NumericValueType, RxwebValidators } from '@rxweb/reactive-form-validators';

import { map } from 'rxjs/operators';


import { Animal } from 'src/app/models/model/Animal';
import { Category } from 'src/app/models/model/Category';
import { EtapaVida } from 'src/app/models/model/EtapaVida';
import { Marca } from 'src/app/models/model/Marca';
import { Product } from 'src/app/models/model/Product';
import { SubCategory } from 'src/app/models/model/SubCategory';
import { TamanioRaza } from 'src/app/models/model/TamanioRaza';
import { AnimalService } from 'src/app/services/models/animal/animal.service';
import { CategoryService } from 'src/app/services/models/category/category.service';
import { EtapaVidaService } from 'src/app/services/models/etapavida/etapa-vida.service';
import { MarcaService } from 'src/app/services/models/marca/marca.service';
import { ProductService } from 'src/app/services/models/product/product.service';
import { SubcategoryService } from 'src/app/services/models/subcategory/subcategory.service';
import { TamanioRazaService } from 'src/app/services/models/tamanioraza/tamanio-raza.service';
import { UploadImageService } from 'src/app/services/models/upload/upload-image.service';
import { UploadStorageImageService } from 'src/app/services/models/uploadstorage/upload-storage-image.service';
import { TinyMCE,Editor } from 'tinymce';

declare const tinymce: TinyMCE;

@Component({
  selector: 'app-product-page-add',
  templateUrl: './product-page-add.component.html',
  styleUrls: ['./product-page-add.component.css']
})
export class ProductPageAddComponent implements OnInit,AfterViewInit {

  formAddProduct: FormGroup = new FormGroup({});
  photoCargada: ArrayBuffer | string = "";
  fileImage: File = new File([], "");

  idAnimalSelected: number = 0;
  idCategorySelected: number = 0;

  animals: Animal[] = [];
  categories: Category[] = [];
  subCategories: SubCategory[] = [];
  tamanioRazas: TamanioRaza[] = [];
  marcas: Marca[] = [];
  etapaVidas: EtapaVida[] = [];

  editorConfig:any = {
    height: 900,
    plugins:'lists link image table code help wordcount' ,
    toolbar: 'undo redo | formatselect | bold italic underline | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist',
    menubar: false,
    toolbar_drawer: 'floating'
  };

  constructor(private formBuilder: FormBuilder, private animalService: AnimalService, private categoryService: CategoryService,
    private subCategoryService: SubcategoryService, private tamanioRazaService: TamanioRazaService, private marcaService: MarcaService,
    private etapaVidaService: EtapaVidaService, private uploadImageService: UploadImageService,private productService: ProductService,
    private uploadStorageImageService:UploadStorageImageService) { }

  ngOnInit(): void {
    this.getAllAnimals();
    this.formAddProduct = this.formBuilder.group({
      imagen: ['', [Validators.required, RxwebValidators.fileSize({ maxSize: 5 * 1024 * 1024, message: "El Máximo son 5MB." }), RxwebValidators.extension({ extensions: ['jpeg', 'jpg'], message: "La Imagen solo admite formato jpg." })]],
      titulo: ['', [Validators.required, Validators.maxLength(255)]],
      descripcion: ['', [Validators.required, Validators.maxLength(65535)]],
      precio: ['', [Validators.required,Validators.pattern(/^\d{1,10}(\.\d{1,2})?$/), RxwebValidators.numeric({ allowDecimal: true, acceptValue: NumericValueType.PositiveNumber })]],
      peso: ['', [Validators.required,Validators.pattern(/^\d{1,10}(\.\d{1,2})?$/), RxwebValidators.numeric({ allowDecimal: true, acceptValue: NumericValueType.PositiveNumber })]],
      stock: ['', [Validators.required,Validators.pattern('^[0-9]+$'), RxwebValidators.numeric({ allowDecimal: false, acceptValue: NumericValueType.PositiveNumber })]],
      contenidoNutricional: ['', [Validators.required]],
      animal: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      category: ['', [Validators.required]],
      tamanioRaza: ['', [Validators.required]],
      marca: ['', [Validators.required]],
      etapaVida: ['', [Validators.required]],
      subCategory: ['', [Validators.required]]
    });

    this.formAddProduct.get('category')?.disable();
    this.formAddProduct.get('tamanioRaza')?.disable();
    this.formAddProduct.get('marca')?.disable();
    this.formAddProduct.get('etapaVida')?.disable();
    this.formAddProduct.get('subCategory')?.disable();
  }

  ngAfterViewInit(): void {
    
    tinymce.init({
        selector:"#otroIDUnico",
        ...this.editorConfig
      })
  }

  // listado de entidades
  getAllAnimals(): void {
    this.animalService.getAllAnimals()
      .subscribe({
        next: (response) => {
          this.animals = response;
          console.log(response);
        },
        error: (error) => { console.log(error) },
      });
  }

  getAllMarcas(): void {
    this.marcaService.getAllMarcas()
      .pipe(map((response) => response.filter(item => item.idAnimal === this.idAnimalSelected)))
      .subscribe({
        next: (response) => {
          this.marcas = response;
          console.log(response);
        },
        error: (error) => { console.log(error); }
      });
  }

  getAllTamanioRazas(): void {
    this.tamanioRazaService.getAllTamanioRazas()
      .pipe(map((response) => response.filter(item => item.idAnimal === this.idAnimalSelected)))
      .subscribe({
        next: (response) => {
          this.tamanioRazas = response;
          console.log(response);
        },
        error: (error) => { console.log(error) }
      });
  }

  getAllEtapasVida(): void {
    this.etapaVidaService.getAllEtapaVidas()
      .pipe(map((response) => response.filter(item => item.idAnimal === this.idAnimalSelected)))
      .subscribe({
        next: (response) => {
          this.etapaVidas = response;
          console.log(response);
        },
        error: (error) => { console.log(error) }
      });
  }

  getAllCategories(): void {
    this.categoryService.getAllCategories()
      .pipe(map((response) => response.filter(item => item.idAnimal === this.idAnimalSelected)))
      .subscribe({
        next: (response) => {
          this.categories = response;
          console.log(response);
        },
        error: (error) => { console.log(error) }
      });
  }

  getAllSubCategory(): void {

    this.subCategoryService.getAllSubCategories()
      .pipe(map(response => response.filter(item => item.idCategory === this.idCategorySelected)))
      .subscribe({
        next: (response) => {
          this.subCategories = response;
          console.log(response);
        },
        error: (error) => { console.log(error) }
      });

  }

  getImage(event: any): void {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.onload = (e) => this.photoCargada = reader.result!;
      reader.readAsDataURL(event.target.files[0]);
      this.fileImage = event.target.files[0];
    } else {
      this.photoCargada = "";
    }
  }

  // eventos changes del formulario
  onChangeAnimal(event: any): void {
    if (event.target.value === '') {
      this.formAddProduct.get('category')?.disable();
      this.formAddProduct.get('tamanioRaza')?.disable();
      this.formAddProduct.get('marca')?.disable();
      this.formAddProduct.get('etapaVida')?.disable();
      this.formAddProduct.get('subCategory')?.disable();
    } else {
      this.idAnimalSelected = +event.target.value;
      this.getAllCategories();
      this.getAllMarcas();
      this.getAllEtapasVida();
      this.getAllTamanioRazas();
      this.formAddProduct.get('category')?.enable();
      this.formAddProduct.get('marca')?.enable();
      this.formAddProduct.get('etapaVida')?.enable();
      this.formAddProduct.get('tamanioRaza')?.enable();
    }

  }

  onChangeCategory(event: any) {
    this.idCategorySelected = +event.target.value;
    this.getAllSubCategory();
    this.formAddProduct.get('subCategory')?.enable();

  }

  // Metodos auxiliares
  fillProductForSave(image: File): Product {
    let product: Product = new Product();
    product.idProduct = 0;
    product.titulo = this.formAddProduct.value.titulo;
    product.descripcion = this.formAddProduct.value.descripcion;
    product.precio = this.formAddProduct.value.precio;
    product.peso = this.formAddProduct.value.peso;
    product.stock = this.formAddProduct.value.stock;
    product.contenidoNutricional = this.formAddProduct.value.contenidoNutricional;
    product.imagen = image.name;
    product.estado = this.formAddProduct.value.estado;
    product.idCategory = this.formAddProduct.value.category;
    product.idTamanioRaza = this.formAddProduct.value.tamanioRaza;
    product.idMarca = this.formAddProduct.value.marca;
    product.idAnimal = this.formAddProduct.value.animal;
    product.idEtapaVida = this.formAddProduct.value.etapaVida;
    product.idSubCategory = this.formAddProduct.value.subCategory;
    product.category = new Category();
    product.category.idCategory = this.formAddProduct.value.category;
    product.tamanioRaza = new TamanioRaza();
    product.tamanioRaza.idTamanioRaza = this.formAddProduct.value.tamanioRaza;
    product.marca = new Marca();
    product.marca.idMarca = this.formAddProduct.value.marca;
    product.etapaVida = new EtapaVida();
    product.etapaVida.idEtapaVida = this.formAddProduct.value.etapaVida;
    product.subCategory = new SubCategory();
    product.subCategory.idSubCategory = this.formAddProduct.value.subCategory;
    product.animal = new Animal();
    product.animal.idAnimal = this.formAddProduct.value.animal;
    return product;
  }

  // Metodos de la api productos
  saveProduct(product: Product, image: File): void {
    this.productService.saveProduct(product)
      .subscribe({
        next: (response) => {

          this.sendImageToProduct(image);
          console.log(response);
        },
        error: (error) => { console.log(error) }
      });
  }

  // Metodos upload
  sendImageToProduct(image: File): void {
    const fileImage: FormData = new FormData();
    fileImage.append("file", image, image.name);
    this.uploadStorageImageService.saveImageProduct(fileImage)
      .subscribe({
        next: (response) => { console.log(response) },
        error: (error) => { console.log(error) }
      });
  }

  //evento ngsubmit para enviar el product
  submitProduct(): void {
    let product: Product = this.fillProductForSave(this.fileImage);
    this.saveProduct(product, this.fileImage);
    this.formAddProduct.reset();
    this.formAddProduct.get('estado')?.setValue('');
    this.formAddProduct.get('animal')?.setValue('');
    this.formAddProduct.get('category')?.setValue('');
    this.formAddProduct.get('marca')?.setValue('');
    this.formAddProduct.get('etapaVida')?.setValue('');
    this.formAddProduct.get('tamanioRaza')?.setValue('');
    this.formAddProduct.get('subCategory')?.setValue('');
    this.idAnimalSelected = 0;
    this.photoCargada = "";
  }

}
