import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/auth/login.service';
import { SharedInformationService } from './services/shared-information/shared-information.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'appbackendpetspit';
  
  constructor(private shared:SharedInformationService,private loginServices:LoginService){

  }

  ngOnInit(): void {
    if(this.loginServices.getUserViewRecurrent().name !== ""){
      this.shared.generateViewImageUser();
    }
  }

}
