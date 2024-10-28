import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ModalController, ToastController, ToastOptions } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  loadingCtrl = inject(LoadingController);
  toastCtrl = inject(ToastController);
  router = inject(Router);
  alertCtrl = inject(AlertController);
  modalCtrl = inject(ModalController);



  //funcion loading
  loading() {
    return this.loadingCtrl.create({ spinner: 'crescent' })
  }

  //toast implementar i-toast (funcion parcial automatica generada)
  //tacosita recibe un toastoption
  async presentToast(opts?: ToastOptions) {
    const toast = await this.toastCtrl.create(opts);
    toast.present();
  }


  //funcion enrutar
  routerLink(url: string) {
    return this.router.navigateByUrl(url);
  }

  //guarda datos en local storage
  saveInLocalStorage(key: string, value: any) {
    return localStorage.setItem(key, JSON.stringify(value))
  }

  //obtiene un elemento de localstorage
  getFromLocalStorage(key: string) {
    return JSON.parse(localStorage.getItem(key))
  }






}
