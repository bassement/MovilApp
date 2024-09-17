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
              // Lógica para manejar la creación del usuario
              console.log('Usuario creado con éxito');
              // Aquí puedes agregar lógica para enviar el formulario o proceder con la creación del usuario
              this.sendForm();  // Llama a la función que maneja el envío del formulario
            }
          }
        ],
        cssClass: 'custom-alert'
      });

      await alert.present();
    } else {
      // Mostrar errores de validación si el formulario no es válido
      console.log('Formulario no válido');
    }
  }

  // Función para enviar el formulario
  sendForm() {
    console.log('Formulario enviado:', this.form.value);
    // Aquí puedes agregar lógica para enviar los datos del formulario a un servidor o realizar otras acciones
  }
}
