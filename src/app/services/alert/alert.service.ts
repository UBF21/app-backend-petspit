import { Injectable } from '@angular/core';
import { time } from '@rxweb/reactive-form-validators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  messageSuccess(title:string){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: title,
      showConfirmButton: false,
      timer: 1500
    })
  }

  messageError(title:string){
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: title,
      showConfirmButton: false,
      timer: 1500
    })
  }

  messageTimeSuccess(messageTimer:string,titleAlert:string) {
    let timerInterval: NodeJS.Timeout;
  
    Swal.fire({
      html: 'Esto tomará <b></b> milliseconds estamos procesando '+ messageTimer,
      timer: 3000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b:HTMLElement | null = Swal.getHtmlContainer()?.querySelector('b')!;
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft()?.toString() as string;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        this.messageSuccess(titleAlert);
      }
    });
  }
}
