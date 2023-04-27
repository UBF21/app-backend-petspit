import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  showRegistration:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showRegistrationForm() {
    this.showRegistration = !this.showRegistration;
    window.scrollTo(0,130);
  }
}
