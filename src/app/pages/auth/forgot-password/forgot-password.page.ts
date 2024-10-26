import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  successMessage: boolean = false; // Control de mensaje de éxito
  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  constructor(private router: Router) {}

  ngOnInit() {}

  async submit() {
    if (this.form.valid) {
      const loading = await this.utilsSvc.loading();
      await loading.present();

      this.firebaseSvc.sendRecoveryEmail(this.form.value.email)
        .then(() => {
          this.successMessage = true; // Mostrar mensaje de éxito si el correo fue enviado
        })
        .catch(error => {
          console.error(error);
          this.utilsSvc.presentToast({
            message: error.message,
            duration: 2500,
            color: 'primary',
            position: 'middle',
            icon: 'alert-circle-outline'
          });
        })
        .finally(() => {
          loading.dismiss();
        });
    }
  }

  acceptSuccess() {
    this.successMessage = false;
    this.router.navigate(['/auth']); // Redirigir a 'auth' al aceptar
  }
}
