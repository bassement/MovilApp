import { CanActivateFn, GuardResult, MaybeAsync } from '@angular/router';
import { inject, Injectable } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UtilsService } from '../services/utils.service';




@Injectable({
  providedIn: 'root'
})


export class noAuthGuard implements CanActivate {




  firebaseSvc = inject(FirebaseService);
  utilSvc = inject(UtilsService);




  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {



    return new Promise((resolve) => {




      this.firebaseSvc.getAuth().onAuthStateChanged((auth) => {

        if (!auth) resolve(true); // si no esta logeado ingresa a auth




        else {
          this.utilSvc.routerLink('/main/habits');
          resolve(false); //si esta logeado ingresa a habits
        }
      })
    });
  }


}
