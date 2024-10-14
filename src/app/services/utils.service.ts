import { inject, Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  
  loadingCtrl = inject(LoadingController)


  //funcion loading
  loading(){
    return this.loadingCtrl.create({spinner:'crescent'})
  }

}
