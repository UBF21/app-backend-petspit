import { Component, OnInit } from '@angular/core';
import { share } from 'rxjs';
import { SharedInformationService } from 'src/app/services/shared-information/shared-information.service';

@Component({
  selector: 'app-public-register-user',
  templateUrl: './public-register-user.component.html',
  styleUrls: ['./public-register-user.component.css']
})
export class PublicRegisterUserComponent implements OnInit {

  
  constructor(private shared:SharedInformationService) { }
 
  ngOnInit(): void {
 
  }

  showRegistrationForm() {
   this.shared.showRegistration = !this.shared.showRegistration;
    window.scrollTo(0,150);
  }

}
