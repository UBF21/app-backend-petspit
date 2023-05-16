import { Injectable, OnInit } from '@angular/core';
import { ViewImageUser } from 'src/app/models/interfaces/ViewImageUser';
import { User } from 'src/app/models/model/User';
import { LoginService } from '../auth/login.service';
import { PublicUploadService } from '../public/upload/public-upload.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Observable, delay, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedInformationService implements OnInit {

  constructor(private loginServices: LoginService, private publicUploadService: PublicUploadService, private sanitizer: DomSanitizer) { }

  showRegistration: boolean = false;
  viewUser: ViewImageUser = { name: "", pathName: "", user: new User() };
  isFirTime: boolean = true;

  ngOnInit(): void {
    this.generateViewImageUser();
    this.viewUser = this.loginServices.getUserViewRecurrent();
  }

  public generateViewImageUser() {
    let user: User = this.loginServices.getUserCurrentSave();

    this.getImageUpload(user.imagen)
      .pipe(delay(1000)).subscribe({
        next: (response) => {
          this.viewUser.name = user.imagen;
          this.viewUser.pathName = response;
          this.viewUser.user = user;
          this.loginServices.saveUserViewCurrent(this.viewUser);

        }
      });



  }


  private getImageUpload(fileName: string): Observable<SafeUrl> {
    return this.publicUploadService.getImageToUserOfApi(fileName)
      .pipe(map((response) => {
        console.log(response);
        const url: string = URL.createObjectURL(response);
        return this.sanitizer.bypassSecurityTrustUrl(url);
      }));
  }

}
