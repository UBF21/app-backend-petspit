import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RxwebValidators, file } from '@rxweb/reactive-form-validators';
import { Animal } from 'src/app/models/model/Animal';
import { Marca } from 'src/app/models/model/Marca';
import { AnimalService } from 'src/app/services/models/animal/animal.service';
import { MarcaService } from 'src/app/services/models/marca/marca.service';
import { UploadImageService } from 'src/app/services/models/upload/upload-image.service';
import { UploadStorageImageService } from 'src/app/services/models/uploadstorage/upload-storage-image.service';

@Component({
  selector: 'app-marca-page-add',
  templateUrl: './marca-page-add.component.html',
  styleUrls: ['./marca-page-add.component.css']
})
export class MarcaPageAddComponent implements OnInit {

  formAddMarca: FormGroup = new FormGroup({});
  fileImage: File = new File([], "");
  photoCargada: string | ArrayBuffer = "";
  animales: Animal[] = [];


  constructor(private formBuilder: FormBuilder, private animalService: AnimalService, private uploadImageService: UploadImageService,
     private marcaService: MarcaService,private uploadStorageImageService:UploadStorageImageService) { }

  ngOnInit(): void {
    this.getAllAnimals();
    this.formAddMarca = this.formBuilder.group({
      imagen: ['', [Validators.required, RxwebValidators.fileSize({ maxSize: 5 * 1024 * 1024, message: "El Máximo son 5MB." }), RxwebValidators.extension({ extensions: ['jpeg', 'jpg'], message: "La Imagen solo admite formato jpg." })]],
      descripcion: ['', [Validators.required, Validators.maxLength(255)]],
      estado: ['', [Validators.required]],
      animal: ['', [Validators.required]]
    });
  }

  getAllAnimals() {

    this.animalService.getAllAnimals()
      .subscribe({
        next: (response) => { this.animales = response },
        error: (error) => { console.log(error) }
      });
  }


  getImage(event: any) {

    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.onload = (e) => this.photoCargada = reader.result!;
      reader.readAsDataURL(event.target.files[0]);
      this.fileImage = event.target.files[0];
    } else {
      this.photoCargada = "";
    }
  }

  fillMarcaForSave(image: File) {

    let marca: Marca = new Marca();
    marca.idMarca = 0;
    marca.descripcion = this.formAddMarca.value.descripcion;
    marca.idAnimal = this.formAddMarca.value.animal;
    marca.estado = this.formAddMarca.value.estado;
    marca.animal = new Animal();
    marca.animal.idAnimal = this.formAddMarca.value.animal;
    marca.imagen = image.name;

    return marca;
  }

  saveMarca(marca: Marca, image: File): void {

    this.marcaService.saveMarca(marca)
      .subscribe({
        next: (response) => {
          this.sendImageToMarca(image);
          console.log(response);
        },
        error: () => { }
      });
  }

  sendImageToMarca(image: File) {
    const fileImage: FormData = new FormData();
    fileImage.append("file", image, image.name);
    this.uploadStorageImageService.saveImageMarca(fileImage)
      .subscribe({
        next: (response) => { console.log(response) },
        error: (error) => { console.log(error) }
      });
  }


  submitMarca(): void {
    let marca: Marca = this.fillMarcaForSave(this.fileImage);
    this.saveMarca(marca, this.fileImage);
    this.formAddMarca.reset();
    this.formAddMarca.get('estado')?.setValue('');
    this.formAddMarca.get('animal')?.setValue('');
    this.photoCargada = "";
  }
}
