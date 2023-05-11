import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserCredentials } from 'src/app/models/model/UserCredentials';
import { ResponseUserCurrent } from 'src/app/models/response/ResponseUserRecurrent';
import { LoginService } from 'src/app/services/auth/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  showRegistration:boolean = false;
  formLogin:FormGroup = new FormGroup({});

  constructor(private http:HttpClient,private loginService:LoginService,private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
       username: ['',[Validators.required,Validators.maxLength(255),Validators.pattern(/^[a-zA-Z0-9@#$%&/()<>+*?¡¿!°|]+$/)]],
       password:['',[Validators.required,Validators.maxLength(255),Validators.pattern(/^[a-zA-Z0-9@#$%&/()<>+*?¡¿!°|]+$/)]]   
    });
  }

  showRegistrationForm() {
    this.showRegistration = !this.showRegistration;
    window.scrollTo(0,130);
  }

  getCurrentUser():void{

    this.loginService.getCurrentUser().subscribe({
      next:(user:ResponseUserCurrent) => {
        console.log(user);
        this.loginService.saveUserCurrent(user.user);
      },
      error: (error) => {
        console.log(error);
      }
    });

  }

  generateTokenUser():void{
    
    let credencials:UserCredentials = this.formLogin.value as UserCredentials;
    this.loginService.generateToken(credencials)
    .subscribe({
      next:(token) =>{
        console.log(token);
        this.loginService.saveTokenUser(token.token);
        
        if(this.loginService.isLoggedIn()){
          console.log("bienvenido usuario.");
          this.getCurrentUser();
        }else{
          this.loginService.logout();
        }

      },
      error: (error) => {console.log(error);}, 
    });

  }

  signIn():void{
    console.log(this.formLogin.value);
    this.generateTokenUser();
    this.formLogin.reset();
  }
}
