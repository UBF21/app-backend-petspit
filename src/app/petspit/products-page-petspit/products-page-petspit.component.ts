import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, ChildActivationEnd } from '@angular/router';
import { Observable, delay, map } from 'rxjs';
import { ViewImageProduct } from 'src/app/models/interfaces/ViewImageProduct';
import { Animal } from 'src/app/models/model/Animal';
import { Category } from 'src/app/models/model/Category';
import { EtapaVida } from 'src/app/models/model/EtapaVida';
import { Marca } from 'src/app/models/model/Marca';
import { Pedido } from 'src/app/models/model/Pedido';
import { Product } from 'src/app/models/model/Product';
import { SubCategory } from 'src/app/models/model/SubCategory';
import { TamanioRaza } from 'src/app/models/model/TamanioRaza';
import { LoginService } from 'src/app/services/auth/login.service';
import { CarritoService } from 'src/app/services/carrito/carrito.service';
import { PublicAnimalService } from 'src/app/services/public/animal/public-animal.service';
import { PublicCategoryService } from 'src/app/services/public/category/public-category.service';
import { PublicEtapaVidaService } from 'src/app/services/public/etapavida/public-etapa-vida.service';
import { PublicMarcaService } from 'src/app/services/public/marca/public-marca.service';
import { PublicProductService } from 'src/app/services/public/product/public-product.service';
import { PublicSubCategoryService } from 'src/app/services/public/subCategory/public-sub-category.service';
import { PublictamanioRazaService } from 'src/app/services/public/tamanioraza/publictamanio-raza.service';
import { PublicUploadService } from 'src/app/services/public/upload/public-upload.service';
import { PublicUploadStorageImageService } from 'src/app/services/public/uploadstorage/public-upload-storage-image.service';

@Component({
  selector: 'app-products-page-petspit',
  templateUrl: './products-page-petspit.component.html',
  styleUrls: ['./products-page-petspit.component.css']
})
export class ProductsPagePetspitComponent implements OnInit {

  marcas: Marca[] = [];
  cambiarVista: boolean = true;
  loadingProducts: boolean = true;
  loadingSizeProducts: boolean = true;
  orderSelected: string = "asc";
  sizeProducts: number = 0;

  products: Product[] = [];
  animals: Animal[] = [];
  etapaVidas: EtapaVida[] = [];
  tamanioRazas: TamanioRaza[] = [];
  categories: Category[] = [];
  subCategories: SubCategory[] = [];
  viewProducts: ViewImageProduct[] = [];


  formFilter: FormGroup = new FormGroup({});

  constructor(private route: ActivatedRoute, private productServicePublic: PublicProductService, private builder: FormBuilder,
    private animalServicePublic: PublicAnimalService, private etapaVidaServicePublic: PublicEtapaVidaService, private marcaServicePublic: PublicMarcaService,
    private tamanioRazaServicePublic: PublictamanioRazaService, private categoryServicePublic: PublicCategoryService, private subCategoryServicePublic: PublicSubCategoryService,
    private uploadImagePublic: PublicUploadService, private sanitizer: DomSanitizer, private carrito: CarritoService,
    private loginService:LoginService,private publicUploadStorageImageService:PublicUploadStorageImageService) { }

  ngOnInit(): void {

    this.getAllMarcas();
    this.getAllAnimals();
    this.getAllEtapaVidas();
    this.getAllTamanioRazas();
    this.getAllCategories();
    this.getAllSubCategories();

    this.formFilter = this.builder.group({
      categoria: [''],
      subCategoria: [''],
      marca: [''],
      animal: [''],
      etapaVida: [''],
      tamanioRaza: ['']
    })

    this.route.queryParams.subscribe({
      next: (params) => {

        const todas: string | undefined = params['todas'];
        const category: string | undefined = params['category'];
        const subCategory: string | undefined = params['subCategory'];

        if (todas !== undefined && todas !== "") {
          this.loadingProducts = true;
          this.formFilter.get('subCategoria')?.setValue('');
          this.formFilter.get('categoria')?.setValue('');
          this.getAllProducts();
        } else if (category !== undefined && category !== "") {
          this.loadingProducts = true;
          this.geAllProductsByCategory(category);
          this.setValueCategoryOfSelect(category);
          this.formFilter.get('subCategoria')?.setValue('');

        } else if (subCategory !== undefined && subCategory !== "") {
          this.loadingProducts = true;
          console.log(subCategory);
          this.getAllProductsBySubCategory(subCategory);
          this.setValueSubCategoriaOfSelect(subCategory);
          this.formFilter.get('categoria')?.setValue('');
        } else {
          this.formFilter.get('subCategoria')?.setValue('');
          this.formFilter.get('categoria')?.setValue('');
          this.getAllProducts();
        }


      },
      error: (error) => { console.log(error) }
    });

  }

  getAllTamanioRazas(): void {
    this.tamanioRazaServicePublic.getAllTamanioRazas()
      .subscribe({
        next: (response) => this.tamanioRazas = response,
        error: (error) => console.log(error)
      });
  }

  getAllSubCategories(): void {
    this.subCategoryServicePublic.getAllSubCategories()
      .subscribe({
        next: (response) => this.subCategories = response,
        error: (error) => console.log(error)
      });
  }

  getAllCategories(): void {
    this.categoryServicePublic.getAllCategories()
      .subscribe({
        next: (response) => this.categories = response,
        error: (error) => console.log(error)
      });
  }

  setValueCategoryOfSelect(descripcion: string): void {
    this.categoryServicePublic.getAllCategories()
      .pipe(map((respone) => respone.find(item => item.descripcion === descripcion)))
      .subscribe({ next: (response) => this.formFilter.get('categoria')?.setValue(response?.idCategory), error: (error) => console.log(error) });

  }

  setValueSubCategoriaOfSelect(descripcion: string) {
    this.subCategoryServicePublic.getAllSubCategories()
      .pipe(map((response) => response.find(item => item.descripcion === descripcion)))
      .subscribe({ next: (response) => this.formFilter.get('subCategoria')?.setValue(response?.idSubCategory), error: (error) => console.log(error) });
  }

  getAllMarcas(): void {
    this.marcaServicePublic.getAllMarcas()
      .subscribe({
        next: (response) => this.marcas = response,
        error: (error) => { console.log(error) }
      });
  }

  getAllEtapaVidas(): void {
    this.etapaVidaServicePublic.getAllEtapaVidas()
      .subscribe({
        next: (response) => this.etapaVidas = response,
        error: (error) => console.log(error)
      });
  }

  getAllProducts(): void {
    this.productServicePublic.getAllProducts()
      .pipe()
      .subscribe({
        next: (response) => {
          this.viewProducts = [];
          this.products = response;
          this.fillViewProducts();
          setTimeout(()=>{
            this.loadingProducts = false;
          },2000);
        },
        error: (error) => {
          this.loadingProducts = false;
          console.log(error);
        }
      });
  }

  getAllAnimals(): void {
    this.animalServicePublic.getAllAnimals()
      .subscribe({
        next: (response) => this.animals = response,
        error: (error) => console.log(error)
      });
  }

  geAllProductsByCategory(category: string): void {
    this.productServicePublic.getAllProducts()
      .pipe(delay(2000), map((item) => item.filter(item => item.category.descripcion === category)))
      .subscribe({
        next: (response) => {
          this.viewProducts = [];
          this.products = response;
          this.fillViewProducts();
          setTimeout(()=>{
            this.loadingProducts = false;
          },2000);
        },
        error: (error) => console.log(error)
      });
  }

  getAllProductsBySubCategory(subCategory: string): void {
    this.productServicePublic.getAllProducts()
      .pipe(delay(2000), map((item) => item.filter(item => item.subCategory.descripcion === subCategory)))
      .subscribe({
        next: (response) => {
          this.viewProducts = [];
          this.products = response;
          console.log(response);
          this.fillViewProducts();
          setTimeout(()=>{
            this.loadingProducts = false;
          },2000);
        },
        error: (error) => console.log(error)
      });
  }

  getAllProductBySideBarFiler(): void {

    const categoria: number = (this.formFilter.value.categoria === '') ? 0 : +this.formFilter.value.categoria;
    const subCategoria: number = (this.formFilter.value.subCategoria === '') ? 0 : +this.formFilter.value.subCategoria;
    const marca: number = (this.formFilter.value.marca === '') ? 0 : +this.formFilter.value.marca;
    const animal: number = (this.formFilter.value.animal === '') ? 0 : +this.formFilter.value.animal;
    const etapaVida: number = (this.formFilter.value.etapaVida === '') ? 0 : +this.formFilter.value.etapaVida;
    const tamanioRaza: number = (this.formFilter.value.tamanioRaza === '') ? 0 : +this.formFilter.value.tamanioRaza;
    this.loadingProducts = true;


    this.productServicePublic.getAllProducts()
      .pipe(delay(2000), map((response) => {

        return response.filter(product => {
          if (categoria !== 0 && product.idCategory !== categoria) return false;
          if (subCategoria !== 0 && product.idSubCategory !== subCategoria) return false;
          if (marca !== 0 && product.idMarca !== marca) return false;
          if (animal !== 0 && product.idAnimal !== animal) return false;
          if (etapaVida !== 0 && product.idEtapaVida !== etapaVida) return false;
          if (tamanioRaza !== 0 && product.idTamanioRaza !== tamanioRaza) return false;
          return true;
        });

      }))
      .subscribe({
        next: (response) => {
          this.viewProducts = [];
          this.products = response;
          this.fillViewProducts();
          setTimeout(()=>{
            this.loadingProducts = false;
          },2000);
        },
        error: (error) => {
          console.log(error);
          setTimeout(()=>{
            this.loadingProducts = false;
          },2000);
        }
      });


    console.log(this.products);
    console.log(this.formFilter.value);
  }

  // Evento para cambiar filtro
  onChangeOrder(event: any): void {

    this.orderSelected = event.target.value;
    this.viewProducts = [];
    this.loadingProducts = true;
    setTimeout(() => {
      this.fillViewProducts();
      this.loadingProducts = false;
    }, 1000);
  }

  // evento submit de para filtrar datos
  onSubmitFilter(): void {

    this.getAllProductBySideBarFiler();
  }

  // Metodos para obtener la imagen y mapearla con los registros
  getImageProduct(fileName: string): Observable<SafeUrl> {
    return this.publicUploadStorageImageService.getPublicImageProduct(fileName)
      .pipe(map((response) => {
        URL.revokeObjectURL(response);
        const url: string = URL.createObjectURL(response);
        return this.sanitizer.bypassSecurityTrustUrl(url);
      }));
  }

  addRowViewProduct(image: SafeUrl, product: Product): void {
    this.viewProducts.push({ pathName: image, name: product.imagen, product: product });
  }

  fillViewProducts(): void {

    this.products
      .sort((a, b) => {
        if (this.orderSelected === 'asc') return a.descripcion.localeCompare(b.descripcion);
        else if (this.orderSelected === 'desc') return b.descripcion.localeCompare(a.descripcion);
        else if (this.orderSelected === 'precio-asc') return a.precio - b.precio;
        else if (this.orderSelected === 'precio-desc') return b.precio - a.precio;
        else return 0;
      })
      .forEach((item) => {
        this.getImageProduct(item.imagen)
          .subscribe({
            next: (response) => {
              this.addRowViewProduct(response, item);
            },
            error: (error) => { console.log(error) }
          });
      });

    setTimeout(() => {
      this.sizeProducts = this.products.length;
      this.loadingSizeProducts = false;
    }, 2000)
  }

  //carrito de compras
  addItemCarrito(producto: Product) {

    if(this.loginService.isLoggedIn()){
        
      if(this.carrito.isItemExist(producto)){
          let index = this.carrito.getIndexItemCarrito(producto);
          let pedidos = this.carrito.getListCarrito();
          pedidos[index].cantidad = pedidos[index].cantidad + 1;
          pedidos[index].importe =pedidos[index].product.precio *  pedidos[index].cantidad;
          this.carrito.updateListCarrito(pedidos);

      }else{
        let pedido: Pedido = new Pedido();
        pedido.idProduct = producto.idProduct;
        pedido.product = producto;
        pedido.cantidad = 1;
        pedido.estado = "A";
        pedido.importe = (producto.precio * pedido.cantidad);
        this.carrito.additemCarrito(pedido);
      }
    
    }else{
      alert("Create una cuenta para poder comprar o agregar un producto.");
    }
  }
}
