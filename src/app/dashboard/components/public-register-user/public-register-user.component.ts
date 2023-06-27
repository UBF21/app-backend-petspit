import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedInformationService } from 'src/app/services/shared-information/shared-information.service';
import { NumericValueType, RxwebValidators, extension } from '@rxweb/reactive-form-validators';
import { User } from 'src/app/models/model/User';
import { PublicUserService } from 'src/app/services/public/user/public-user.service';
import { PublicUploadService } from 'src/app/services/public/upload/public-upload.service';
import { PublicUploadStorageImageService } from 'src/app/services/public/uploadstorage/public-upload-storage-image.service';

@Component({
  selector: 'app-public-register-user',
  templateUrl: './public-register-user.component.html',
  styleUrls: ['./public-register-user.component.css']
})
export class PublicRegisterUserComponent implements OnInit {

  photoCargada: string | ArrayBuffer = "";
  fotoDefault: string = ""
  formRegister: FormGroup = new FormGroup({});
  fileImage: File = new File([], "");

  constructor(private formBuilder: FormBuilder, private shared: SharedInformationService, private publicUserService: PublicUserService, private publicUploadServices: PublicUploadService,private publicUploadStorageImageService:PublicUploadStorageImageService) { }

  ngOnInit(): void {
    this.formRegister = this.formBuilder.group({
      file: ["", [Validators.required, RxwebValidators.fileSize({ maxSize: 5 * 1024 * 1024, message: "El Máximo son 5MB."}),RxwebValidators.extension({extensions: ['jpeg','jpg'],message:"La Imagen solo admite formato jpg."})]],
      nombre: ["", [Validators.required, Validators.maxLength(255)]],
      apellido: ["", [Validators.required, Validators.maxLength(255)]],
      username: ["", [Validators.required, Validators.maxLength(255), Validators.pattern(/^[a-zA-Z0-9@#$%&/()<>+*?¡¿!°|]+$/)]],
      password: ["", [Validators.required, Validators.maxLength(255), Validators.pattern(/^[a-zA-Z0-9@#$%&/()<>+*?¡¿!°|]+$/)]],
      dni: ["", [Validators.required, Validators.pattern('^[0-9]{8,8}$')]],
      telefono: ["", [Validators.required, Validators.pattern('^[0-9]{9,9}$')]],
      direccion: ["", [Validators.required, Validators.maxLength(300)]]
    });

  }
  showRegistrationForm() {
    this.shared.showRegistration = !this.shared.showRegistration;
    window.scrollTo(0, 150);
  }

  getImage($event: any) {

    if ($event.target.files && $event.target.files.length > 0) {
      const reader = new FileReader();
      reader.onload = (e) => this.photoCargada = reader.result!;
      reader.readAsDataURL($event.target.files[0]);
      this.fileImage = $event.target.files[0];
    } else {
      this.photoCargada = "";
    }

  }

  registerUser(): void {

    let user: User = this.fillUser(this.formRegister,this.fileImage);
    this.saveUser(user,this.fileImage);
    this.formRegister.reset();
    this.photoCargada = "";
  }


  fillUser(formRegister:FormGroup,image:File):User{
    let user: User = new User();
    user.nombre = this.formRegister.value.nombre;
    user.apellido = this.formRegister.value.apellido;
    user.username = this.formRegister.value.username;
    user.password = this.formRegister.value.password;
    user.dni = this.formRegister.value.dni;
    user.telefono = this.formRegister.value.telefono;
    user.direccion = this.formRegister.value.direccion;
    user.idRol = 1;
    user.imagen = image.name;
    user.rol.idRol = 1;
    user.estado = "A";

    return user;
  }

  // Metodos para interactuar con la Api

  saveUser(user: User,image:File) {
    this.publicUserService.saveRegisterUser(user)
      .subscribe({
        next: (user) => { 
          console.log(user);
          this.sendImageUser(image); 
        },
        error: (error) => { console.log(error); },
      });
  }

  sendImageUser(image: File): void {

    const fileImage: FormData = new FormData();
    fileImage.append("file", image, image.name);

    this.publicUploadStorageImageService.saveImageUser(fileImage)
      .subscribe({
        next: (response) => { console.log(response) },
        error: (error) => { console.log(error) }
      });
  }
}
