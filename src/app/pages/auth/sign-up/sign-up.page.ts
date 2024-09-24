import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('(?=.*[0-9])(?=.*[a-zA-Z]).{4,}')
    ]),
    name: new FormControl('', [Validators.minLength(4)]),
  });

  constructor(private alertController: AlertController) { }

  ngOnInit() { }

  async submit() {
    if (this.form.valid) {
      const alert = await this.alertController.create({
        header: 'Confirmación',
        message: '¿Está seguro de que desea crear este usuario?',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
          }, {
            text: 'Aceptar',
            handler: () => {
              // creación del usuario
              console.log('Usuario creado con éxito');
              this.sendForm();  
            }
          }
        ],
        cssClass: 'custom-alert'
      });

      await alert.present();
    } else {
      //formulario no es valido
      console.log('Formulario no válido');
    }
  }

  // Función para enviar el formulario
  sendForm() {
    console.log('Formulario enviado:', this.form.value);
    
  }
}
