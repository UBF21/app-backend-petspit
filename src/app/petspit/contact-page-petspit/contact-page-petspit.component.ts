import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';
import { AlertService } from 'src/app/services/alert/alert.service';
import { TinyMCE,Editor } from 'tinymce';
declare const tinymce: TinyMCE;

@Component({
  selector: 'app-contact-page-petspit',
  templateUrl: './contact-page-petspit.component.html',
  styleUrls: ['./contact-page-petspit.component.css']
})
export class ContactPagePetspitComponent implements OnInit,AfterViewInit {

  formEmail: FormGroup = new FormGroup({});
  editorConfig:any = {
    height: 900,
    plugins:'lists link image table code help wordcount' ,
    toolbar: 'undo redo | formatselect | bold italic underline | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist',
    menubar: false,
    toolbar_drawer: 'floating'
  };

  constructor(private formBulder: FormBuilder,private alertService:AlertService) { }


  ngOnInit(): void {
    this.formEmail = this.formBulder.group({
      nombre: ['', [Validators.required, Validators.maxLength(60)]],
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@gmail.com$/)]],
      message: ['', [Validators.required, Validators.maxLength(20000)]]
    });

  }

  ngAfterViewInit(): void {
    tinymce.init({
      selector:"#messageEditor",
      ...this.editorConfig
    })
  }

  enviarEmail(): void {


    emailjs.send('service_w8mxzgo', 'template_x0gkpkk', this.formEmail.value, 'hv85HqEeJ5R8JqIZY')
      .then((response) => {
        this.alertService.messageTimeSuccess("el mensaje.","Se Envió el correo correctamente.");
        console.log('Correo enviado', response.status, response.text);
      }).catch((error) => {
        console.log("Error al enviar el correo.", error);
      });

      this.formEmail.reset();
  }

}
