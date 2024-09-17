import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  successMessage: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {}

  submit() {
    if (this.form.valid) {
      console.log(this.form.value); // Envío del formulario por consola
      this.successMessage = true;
    }
  }

  acceptSuccess() {
    // Redirige a la página 'auth' cuando se hace clic en Aceptar
    this.router.navigate(['/auth']);
  }
}
