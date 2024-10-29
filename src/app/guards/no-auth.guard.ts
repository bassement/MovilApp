import { CanActivateFn } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { UtilsService } from '../services/utils.service';
import { inject } from '@angular/core';

export const noAuthGuard: CanActivateFn = (route, state) => {
  const firebaseSvc = inject(FirebaseService);
  const utilsSvc = inject(UtilsService);

  return new Promise((resolve) => {
    firebaseSvc.getAuth().onAuthStateChanged((auth) => {
      if (!auth) resolve(true); // Permitimos el acceso al auth si no esta autentificado
      else {
        console.log('Usuario autenticado, redirigirendo a Habits')
        utilsSvc.routerLink('/habits');
        resolve(false); // Redirigimos al home si esta autentificado
      }
    });
  });
};