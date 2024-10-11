import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Importa el Router

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

  loginOptions = [
    { label: 'Recuperar Contraseña', action: () => this.router.navigate(['/forgot-password']) },
    { label: 'Registrarse', action: () => this.router.navigate(['/sign-up']) }
  ];

  constructor(private router: Router) { } // login provisorio a la pagina habits

  ngOnInit() {
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
      //redireccioonamiento a
      this.router.navigate(['/habits']);
    } else {
      console.log('Formulario inválido');
    }
  }

}
