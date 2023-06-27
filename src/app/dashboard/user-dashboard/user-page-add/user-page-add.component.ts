import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { Rol } from 'src/app/models/model/Rol';
import { User } from 'src/app/models/model/User';
import { RolService } from 'src/app/services/models/rol/rol.service';
import { UploadImageService } from 'src/app/services/models/upload/upload-image.service';
import { UploadStorageImageService } from 'src/app/services/models/uploadstorage/upload-storage-image.service';
import { UserService } from 'src/app/services/models/user/user.service';

@Component({
  selector: 'app-user-page-add',
  templateUrl: './user-page-add.component.html',
  styleUrls: ['./user-page-add.component.css']
})
export class UserPageAddComponent implements OnInit {

  rols: Rol[] = [];

  photoCargada: string | ArrayBuffer = "";
  formRegister: FormGroup = new FormGroup({});
  fileImage: File = new File([], "");

  constructor(private formBuilder: FormBuilder, private rolService: RolService, private userService: UserService,
     private uploadImageService: UploadImageService,private uploadStorageImageService:UploadStorageImageService
     ) { }

  ngOnInit(): void {
    this.getAllRols();
    this.formRegister = this.formBuilder.group({
      file: ["", [Validators.required, RxwebValidators.fileSize({ maxSize: 5 * 1024 * 1024, message: "El Máximo son 5MB." }), RxwebValidators.extension({ extensions: ['jpeg', 'jpg'], message: "La Imagen solo admite formato jpg." })]],
      nombre: ["", [Validators.required, Validators.maxLength(255)]],
      apellido: ["", [Validators.required, Validators.maxLength(255)]],
      username: ["", [Validators.required, Validators.maxLength(255), Validators.pattern(/^[a-zA-Z0-9@#$%&/()<>+*?¡¿!°|]+$/)]],
      password: ["", [Validators.required, Validators.maxLength(255), Validators.pattern(/^[a-zA-Z0-9@#$%&/()<>+*?¡¿!°|]+$/)]],
      dni: ["", [Validators.required, Validators.pattern('^[0-9]{8,8}$')]],
      telefono: ["", [Validators.required, Validators.pattern('^[0-9]{9,9}$')]],
      direccion: ["", [Validators.required, Validators.maxLength(300)]],
      rol:["",[Validators.required]],
      estado:["",[Validators.required]]
    });
  }


  getAllRols() {
    this.rolService.getAllRols()
      .subscribe({
        next: (response) => {
          this.rols = response;
          console.log(response);
        },
        error: (error) => { }
      });
  }

  fillUserForSave(image:File):User{
    let user:User = new User();
    user.idUser = 0;
    user.nombre = this.formRegister.value.nombre;
    user.apellido = this.formRegister.value.apellido;
    user.username = this.formRegister.value.username;
    user.password = this.formRegister.value.password;
    user.dni = this.formRegister.value.dni;
    user.telefono = this.formRegister.value.telefono;
    user.direccion = this.formRegister.value.direccion;
    user.estado = this.formRegister.value.estado;
    user.idRol = this.formRegister.value.rol;
    user.rol = new Rol();
    user.rol.idRol = this.formRegister.value.rol;
    user.imagen = image.name;
    return user;  
  }

  saveUser(user:User,image:File):void{
    this.userService.saveUser(user)
    .subscribe({
      next:(response)=>{
        
        console.log(response);
        this.sendImageUser(image);
      },
      error:(error)=>{console.log(error)}
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

  sendImageUser(image: File): void {
    const fileImage: FormData = new FormData();
    fileImage.append("file", image, image.name);
    this.uploadStorageImageService.saveImageUser(fileImage)
      .subscribe({
        next: (response) => { console.log(response) },
        error: (error) => { console.log(error) }
      });
  }

  submitUser(): void {
    let user:User = this.fillUserForSave(this.fileImage);
    this.saveUser(user,this.fileImage);
    this.formRegister.reset();
    this.photoCargada = "";
    this.formRegister.get('estado')?.setValue('');
    this.formRegister.get('rol')?.setValue('');
  }
}
