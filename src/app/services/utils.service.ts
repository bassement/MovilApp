import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, AlertOptions, LoadingController, ModalController, ModalOptions, ToastController, ToastOptions } from '@ionic/angular';
//import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  loadingCtrl = inject(LoadingController);
  toastCtrl = inject(ToastController);
  router = inject(Router);
  alertCtrl = inject(AlertController);
  modalCtrl = inject(ModalController);


  //capacitor camera
  //take a phto 
  /*
  async takePicture(promptLabelHeader: string){
    return await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt,
      promptLabelHeader,
      promptLabelPhoto: 'Seleccionar una imagen',
      promptLabelPicture: 'Tomar una foto',
    }); 
  }*/



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

  // ahora lo mismo que el toast pero con modal pollito
  async presentModal(opts: ModalOptions) {
    const modal = await this.modalCtrl.create(opts);

    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) return data;
  }

  dismissModal(data?: any) {
    return this.modalCtrl.dismiss(data);
  }
  //alerta 
  async presentAlert(opts?: AlertOptions) {
    const alert = await this.alertCtrl.create(opts);

    await alert.present();
  }



} import { Capacitor } from '@capacitor/core';

