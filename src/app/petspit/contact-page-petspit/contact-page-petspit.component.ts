import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact-page-petspit',
  templateUrl: './contact-page-petspit.component.html',
  styleUrls: ['./contact-page-petspit.component.css']
})
export class ContactPagePetspitComponent implements OnInit {

  formEmail: FormGroup = new FormGroup({});


  constructor(private formBulder: FormBuilder) { }


  ngOnInit(): void {
    this.formEmail = this.formBulder.group({
      nombre: ['', [Validators.required, Validators.maxLength(60)]],
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@gmail.com$/)]],
      message: ['', [Validators.required, Validators.maxLength(255)]]
    });

  }

  enviarEmail(): void {

    emailjs.send('service_w8mxzgo', 'template_x0gkpkk', this.formEmail.value, 'hv85HqEeJ5R8JqIZY')
      .then((response) => {
        console.log('Correo enviado', response.status, response.text);
      }).catch((error) => {
        console.log("Error al enviar el correo.", error);
      });

      this.formEmail.reset();
  }

}
