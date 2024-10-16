import { inject, Injectable } from '@angular/core';
import { LoadingController, ToastController, ToastOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {


  loadingCtrl = inject(LoadingController);
  toastCtrl = inject(ToastController);


  //funcion loading
  loading() {
    return this.loadingCtrl.create({ spinner: 'crescent' })
  }

  //toast implementar i-toast (funcion parcial automatica generada)
  //tacosita recive un toastoption, hay que crearlo a
  async presentToast(opts?: ToastOptions) {
    const toast = await this.toastCtrl.create(opts);
    toast.present();
  }






}
