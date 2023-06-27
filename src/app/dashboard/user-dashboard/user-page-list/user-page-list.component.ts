import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Observable, map } from 'rxjs';
import { ViewImageUser } from 'src/app/models/interfaces/ViewImageUser';
import { User } from 'src/app/models/model/User';
import { UploadImageService } from 'src/app/services/models/upload/upload-image.service';
import { UploadStorageImageService } from 'src/app/services/models/uploadstorage/upload-storage-image.service';
import { UserService } from 'src/app/services/models/user/user.service';

@Component({
  selector: 'app-user-page-list',
  templateUrl: './user-page-list.component.html',
  styleUrls: ['./user-page-list.component.css']
})
export class UserPageListComponent implements OnInit {

  viewUsers: ViewImageUser[] = [];
  users: User[] = [];

  constructor(private uploadImageService: UploadImageService, private userService: UserService, private sanitizer: DomSanitizer,
    private uploadStorageImageService:UploadStorageImageService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  saveUser(user: User): void {
    this.userService.saveUser(user)
      .subscribe({
        next: (response) => { console.log(response) },
        error: (error) => { console.log(error) }
      });
  }

  addRowViewUser(image: SafeUrl, user: User): void {
    this.viewUsers.push({ pathName: image, name: user.imagen, user });
  }

  fillViewUsers(): void {
    this.users
      .forEach(item => {


        this.getImageUser(item.imagen)
          .subscribe({
            next: (response) => {

              this.addRowViewUser(response, item);
              console.log(response);
            },
            error: (error) => {
              console.log(error);
            }
          });

      });
  }

  getAllUsers(): void {
    this.userService.getAllUsers()
      .subscribe({
        next: (response) => {
          this.users = response;
          console.log(response);
          this.fillViewUsers();
        },
        error: (error) => { console.log(error) }
      });
  }

  getImageUser(fileName: string): Observable<SafeUrl> {
    return this.uploadStorageImageService.getImageUser(fileName)
      .pipe(map((response) => {
        URL.revokeObjectURL(response);
        const url: string = URL.createObjectURL(response);
        return this.sanitizer.bypassSecurityTrustUrl(url);
      }));
  }

  deleteUser(idUser: number) {
    let user: User = this.users.find(item => item.idUser === idUser)!
    if (user.estado === "I") {
      console.log("El Registro está deshabilitado.");
    } else {
      user.estado = "I";
      user.authorities = [];
      this.saveUser(user);
    }
  }
}
