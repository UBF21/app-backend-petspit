import { Component, OnInit } from '@angular/core';
import { SharedInformationService } from 'src/app/services/shared-information/shared-information.service';

@Component({
  selector: 'app-user-profile-information',
  templateUrl: './user-profile-information.component.html',
  styleUrls: ['./user-profile-information.component.css']
})
export class UserProfileInformationComponent implements OnInit {

  constructor(public shared:SharedInformationService) { }

  ngOnInit(): void {
    
  }
}
