import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { ViewImageMarca } from 'src/app/models/interfaces/ViewImageMarca';
import { Marca } from 'src/app/models/model/Marca';
import { PublicMarcaService } from 'src/app/services/public/marca/public-marca.service';
import { PublicUploadStorageImageService } from 'src/app/services/public/uploadstorage/public-upload-storage-image.service';

@Component({
  selector: 'app-home-page-petspit',
  templateUrl: './home-page-petspit.component.html',
  styleUrls: ['./home-page-petspit.component.css']
})
export class HomePagePetspitComponent implements OnInit {

  marcas: Marca[] = [];
  viewMarcas: ViewImageMarca[] = [];

  loadingMarca: boolean = true;

  constructor(private publicMarcaService: PublicMarcaService, private publicUploadStorageImageService: PublicUploadStorageImageService, private sanitizer: DomSanitizer,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllMarcas();
  }

  getImageMarca(fileName: string): Observable<SafeUrl> {
    return this.publicUploadStorageImageService.getPublicImageMarca(fileName)
      .pipe(map((response) => {
        URL.revokeObjectURL(response);
        const url: string = URL.createObjectURL(response);
        return this.sanitizer.bypassSecurityTrustUrl(url);
      }));
  }

  getAllMarcas(): void {
    this.publicMarcaService.getAllMarcas()
      .pipe()
      .subscribe({
        next: (response) => {
          this.viewMarcas = [];
          this.marcas = response;
          this.fillViewProducts();
          setTimeout(() => { this.loadingMarca = false }, 2000);
        },
        error: (error) => {
          console.log(error);
        }
      });
  }

  fillViewProducts(): void {

    this.marcas.forEach((item) => {
      this.getImageMarca(item.imagen)
        .subscribe({
          next: (response) => {
            this.addRowViewMarca(response, item);
          },
          error: (error) => { console.log(error) }
        });
    });

    setTimeout(() => { }, 2000)
  }

  routerOfAllProducts() {
    this.router.navigate(['/products'], { queryParams: { todas: "all" } });
  }

  addRowViewMarca(image: SafeUrl, marca: Marca): void {
    this.viewMarcas.push({ pathName: image, name: marca.imagen, marca: marca });
  }

}
