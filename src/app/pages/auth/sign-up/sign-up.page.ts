import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Importa el Router
import { FirebaseService } from 'src/app/services/firebase.service';
import {User} from 'src/app/models/user.model'
import { UtilsService } from 'src/app/services/utils.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
   //formulariots
   form = new FormGroup({

    uid: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
  })

  
firebaseSvc = inject(FirebaseService); //inyectar servicio de firebase
utilsSvc=inject(UtilsService); //inyectar el utils service, falta incorporarla como funcion

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


  //se recibe el uid, para luego pasarlo al path
  async setUserInfo(uid: string) {
    if (this.form.valid) {
      const loading = await this.utilsSvc.loading();
      await loading.present();


      let path = `users/${uid}`
      //borrar password para que no llegue a la BD
      delete this.form.value.password;

      this.firebaseSvc.setDocument(path, this.form.value).then(async res => {
        this.utilsSvc.saveInLocalStorage('user', this.form.value)

        // await this.firebaseSvc.updateUser(this.form.value.name)
        // console.log(res);
        


        //capturar error
      }).catch(error => {
        console.log(error);


        //error de firebase, cambiar 
        this.utilsSvc.presentToast({
          message: 'error papito, era noma era',
          duration: 2500,
          color: 'primary',
          position: 'middle',
          icon: 'alert-circle-outline'

        })

        //terminar ejecucion de funcion
      }).finally(() =>  {
        loading.dismiss();
      })

      


      
      
    } 
  }
//..----------------..
//funcion asincrona, (se puede tardar, se crea un loading)
  async submit() {
    if (this.form.valid) {
      const loading = await this.utilsSvc.loading();
      await loading.present();

      this.firebaseSvc.signUp(this.form.value as User).then(async res => {

        await this.firebaseSvc.updateUser(this.form.value.name)
        console.log(res);
        


        //capturar error
      }).catch(error => {
        console.log(error);


        //error de firebase, cambiar 
        this.utilsSvc.presentToast({
          message: 'error.message',
          duration: 2500,
          color: 'primary',
          position: 'middle',
          icon: 'alert-circle-outline'

        })

        //terminar ejecucion de funcion
      }).finally(() =>  {
        loading.dismiss();
      })

      


      
      
    } 
  }

}





































  //--------------------------Forma antigua de crear usuario sin BD-------------------------- 
//   form = new FormGroup({
//     email: new FormControl('', [Validators.required, Validators.email]),
//     password: new FormControl('', [
//       Validators.required,
//       Validators.pattern('(?=.*[0-9])(?=.*[a-zA-Z]).{4,}')
//     ]),
//     name: new FormControl('', [Validators.minLength(4)]),
//   });

//   constructor(private alertController: AlertController) { }

//   ngOnInit() { }

//   async submit() {
//     if (this.form.valid) {
//       const alert = await this.alertController.create({
//         header: 'Confirmación',
//         message: '¿Está seguro de que desea crear este usuario?',
//         buttons: [
//           {
//             text: 'Cancelar',
//             role: 'cancel',
//             cssClass: 'secondary',
//           }, {
//             text: 'Aceptar',
//             handler: () => {
//               // creación del usuario
//               console.log('Usuario creado con éxito');
//               this.sendForm();  
//             }
//           }
//         ],
//         cssClass: 'custom-alert'
//       });

//       await alert.present();
//     } else {
//       //formulario no es valido
//       console.log('Formulario no válido');
//     }
//   }

//   // Función para enviar el formulario
//   sendForm() {
//     console.log('Formulario enviado:', this.form.value);
    
//   }
// }
