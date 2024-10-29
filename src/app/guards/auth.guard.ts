import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { UtilsService } from '../services/utils.service';

export const authGuard: CanActivateFn = (route, state) => {
  const firebaseSvc = inject(FirebaseService);
  const utilsSvc = inject(UtilsService);
  let user = localStorage.getItem('User');

  return new Promise((resolve) => {
    firebaseSvc.getAuth().onAuthStateChanged((auth) => {
      if (auth) {
        if (user) resolve(true); //Permitimos el acceso si es que el usuario esta autentificadco y si tmb existe en el localstorage
      } else {
        firebaseSvc.signOut(); // Nuestra funcionn signOut se encarga de borrar el item de local storage, redirigir al login y cerrar la sesion
        resolve(false);
      }
    });
  });
};