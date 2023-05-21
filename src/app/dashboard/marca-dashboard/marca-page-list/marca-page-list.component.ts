import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { error } from '@rxweb/reactive-form-validators';
import { Observable, map } from 'rxjs';
import { ViewImageMarca } from 'src/app/models/interfaces/ViewImageMarca';
import { Marca } from 'src/app/models/model/Marca';
import { MarcaService } from 'src/app/services/models/marca/marca.service';
import { UploadImageService } from 'src/app/services/models/upload/upload-image.service';

@Component({
  selector: 'app-marca-page-list',
  templateUrl: './marca-page-list.component.html',
  styleUrls: ['./marca-page-list.component.css']
})
export class MarcaPageListComponent implements OnInit {

  viewMarcas: ViewImageMarca[] = [];
  marcas: Marca[] = [];

  constructor(private marcaService: MarcaService, private uploadImageService: UploadImageService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getAllMarcas();
  }


  saveMarca(marca: Marca): void {
    this.marcaService.saveMarca(marca)
      .subscribe({
        next: (response) => { console.log(response)},
        error: (error) => { console.log(error) }
      });
  }

  addRowViewMarca(image: SafeUrl, marca: Marca): void {

    this.viewMarcas.push({ pathName: image, name: marca.imagen, marca: marca });
  }

  // llenar el array ViewMarcas con la marca y su imagen
  fillViewMarcas(): void {
    this.marcas.forEach(item => {

      /*
        Obtenemos la imagen de cada registro.
        Guardamos la imagen obtenida y el registro de la imagen juntas
        como un registro del viewMarca. 
      */

      this.getImageMarca(item.imagen)
        .subscribe({
          next: (response) => {
            this.addRowViewMarca(response /*la imagen (SafeUrl)*/, item /*marca*/);
            console.log(response);
          },
          error: (error) => { console.log(error) }
        });

    });

  }

  getAllMarcas(): void {
    this.marcaService.getAllMarcas()
      .subscribe({
        next: (response) => {
          this.marcas = response;
          this.fillViewMarcas();
          console.log(response);
        },
        error: (error) => { console.log(error) }
      });
  }

  getImageMarca(fileName: string): Observable<SafeUrl> {

    return this.uploadImageService.getImageToMarca(fileName)
      .pipe(map((response) => {

        URL.revokeObjectURL(response);
        const url: string = URL.createObjectURL(response);
        return this.sanitizer.bypassSecurityTrustUrl(url);
      }));
  }

  deleteMarca(idMarca: number) {
    let marca: Marca = this.marcas.find(item => item.idMarca === idMarca)!;
    if (marca.estado === 'I') {
      console.log("Registro deshabilitado.");
    } else {
      marca.estado = "I";
      this.saveMarca(marca);
    }
  }

}
