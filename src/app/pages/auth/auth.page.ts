import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Importa el Router
import { FirebaseService } from 'src/app/services/firebase.service';
import {User} from 'src/app/models/user.model'


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

  //inyectar servicio de firebase
firebaseSvc = inject(FirebaseService)

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


  submit() {
    if (this.form.valid) {
      this.firebaseSvc.signIn(this.form.value as User).then(res => {
        console.log(res)
      });
      //redireccioonamiento a
      this.router.navigate(['/habits']);
    } else {
      console.log('Formulario inválido');
    }
  }

}
