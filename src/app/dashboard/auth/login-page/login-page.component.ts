import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Observable, map } from 'rxjs';
import { UserCredentials } from 'src/app/models/model/UserCredentials';
import { ResponseUserCurrent } from 'src/app/models/response/ResponseUserRecurrent';
import { LoginService } from 'src/app/services/auth/login.service';
import { CarritoService } from 'src/app/services/carrito/carrito.service';
import { PublicUploadService } from 'src/app/services/public/upload/public-upload.service';
import { SharedInformationService } from 'src/app/services/shared-information/shared-information.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  formLogin: FormGroup = new FormGroup({});

  constructor(private http: HttpClient, private loginService: LoginService, public shared: SharedInformationService,
     private formBuilder: FormBuilder, private sanitizer: DomSanitizer,private carrito:CarritoService) { }

  ngOnInit(): void {

    //Formulario de Inicio de Sesion
    this.formLogin = this.formBuilder.group({
      username: ['', [Validators.required, Validators.maxLength(255), Validators.pattern(/^[a-zA-Z0-9@#$%&/()<>+*?¡¿!°|]+$/)]],
      password: ['', [Validators.required, Validators.maxLength(255), Validators.pattern(/^[a-zA-Z0-9@#$%&/()<>+*?¡¿!°|]+$/)]]
    });

  }

  showRegistrationForm() {
    this.shared.showRegistration = !this.shared.showRegistration;
    window.scrollTo(0, 260);
  }


  //Seccion de Inicio de Sesion
  getCurrentUser(): void {

    this.loginService.getCurrentUser().subscribe({
      next: (user: ResponseUserCurrent) => {
        console.log(user);
        this.loginService.saveUserCurrent(user.user);
      },
      error: (error) => {
        console.log(error);
      }
    });

  }

  generateTokenUser(): void {

    let credencials: UserCredentials = this.formLogin.value as UserCredentials;
    this.loginService.generateToken(credencials)
      .subscribe({
        next: (token) => {
          console.log(token);
          this.loginService.saveTokenUser(token.token);
          if (this.loginService.isLoggedIn()) {
            this.getCurrentUser();
            this.carrito.setListCarrito();
          } else {
            this.loginService.logout();
          }

        },
        error: (error) => { console.log(error); },
        complete:() => {setTimeout(()=> {this.shared.generateViewImageUser()},100) }
      });

  }

  signIn(): void {
    console.log(this.formLogin.value);
    this.generateTokenUser();
    this.formLogin.reset();
  }


}
