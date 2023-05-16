import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/model/User';
import { LoginService } from 'src/app/services/auth/login.service';
import { SharedInformationService } from 'src/app/services/shared-information/shared-information.service';

@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.css']
})
export class UserProfilePageComponent implements OnInit {

  showProfile:boolean = false;
  showOders:boolean = false;
  theRol:string = "";

  constructor(private loginServices:LoginService,private shared:SharedInformationService,private router:Router) { }

  ngOnInit(): void {
    this.theRol = this.loginServices.getUserRol().authority;
  }

  logout():void{
    this.loginServices.logout();
    this.shared.viewUser = {name:"",pathName:"",user: new User()};
    this.router.navigateByUrl("/login");
  }

}
