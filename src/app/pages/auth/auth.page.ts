import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Importa el Router
import { FirebaseService } from 'src/app/services/firebase.service';
import { User } from 'src/app/models/user.model'
import { UtilsService } from 'src/app/services/utils.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {


  //formulariots
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })


  firebaseSvc = inject(FirebaseService); //inyectar servicio de firebase
  utilsSvc = inject(UtilsService); //inyectar el utils service, falta incorporarla como funcion

  loginOptions = [
    { label: 'Recuperar Contraseña', action: () => this.router.navigate(['/forgot-password']) },
    { label: 'Registrarse', action: () => this.router.navigate(['/sign-up']) }
  ];

  constructor(private router: Router) { } // login provisorio a la pagina habits

  ngOnInit() {
  }

  // options = [
  //   { label: 'Ayuda', action: () => console.log('Ayuda seleccionada') },
  //   { label: 'Acerca de', action: () => console.log('Acerca de seleccionada') }
  // ];



  //----------------redireccionamiento provisiorio
  // submit() {
  //   if (this.form.valid) {
  //     console.log(this.form.value);
  //     //redireccioonamiento a
  //     this.router.navigate(['/habits']);
  //   } else {
  //     console.log('Formulario inválido');
  //   }
  // }


  //funcion asincrona, (se puede tardar, se crea un loading)
  async submit() {
    if (this.form.valid) {
      const loading = await this.utilsSvc.loading();
      await loading.present();

      this.firebaseSvc.signIn(this.form.value as User).then(res => {
        //autenticacion pidiendo datos de firebase /
        this.getUserInfo(res.user.uid);




      }).catch(error => {
        //capturar error
        console.log(error);


        //error de firebase, cambiar 
        this.utilsSvc.presentToast({
          message: error.message,
          duration: 2500,
          color: 'primary',
          position: 'middle',
          icon: 'alert-circle-outline'

        })

        //terminar ejecucion de funcion
      }).finally(() => {
        loading.dismiss();
      })






    }
  }

  async getUserInfo(uid: string) {
    if (this.form.valid) {
      const loading = await this.utilsSvc.loading();
      await loading.present();

      let path = `users/${uid}`;

      this.firebaseSvc.getDocument(path).then((user: User | null) => {
        if (user) {
          // Guarda el usuario en localStorage
          this.utilsSvc.saveInLocalStorage('user', user);

          // Redirecciona y muestra mensaje de bienvenida
          this.utilsSvc.routerLink('/habits');
          console.log('redireccionando a la page habiiiis')
          this.form.reset();

          const userName = user.name ? user.name : "Usuario";

          this.utilsSvc.presentToast({
            message: `Bienvenido ${userName}`,
            duration: 1500,
            color: 'primary',
            position: 'middle',
            icon: 'person-circle-outline'
          });
        } else {
          throw new Error("El usuario no fue encontrado en Firebase.");
        }
      }).catch(error => {
        console.error(error);

        // Muestra el mensaje de error si no se puede obtener el usuario
        this.utilsSvc.presentToast({
          message: 'error papito, era noma era',
          duration: 2500,
          color: 'primary',
          position: 'middle',
          icon: 'alert-circle-outline'
        });
      }).finally(() => {
        loading.dismiss();
      });
    }
  }
}
