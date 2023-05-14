import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/auth/login.service';

@Component({
  selector: 'app-nav-bar-petspit',
  templateUrl: './nav-bar-petspit.component.html',
  styleUrls: ['./nav-bar-petspit.component.css']
})
export class NavBarPetspitComponent implements OnInit {

  constructor(public loginServices:LoginService) { }

  ngOnInit(): void {
  }


}
