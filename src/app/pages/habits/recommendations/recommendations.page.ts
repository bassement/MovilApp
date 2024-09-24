import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.page.html',
  styleUrls: ['./recommendations.page.scss'],
})
export class RecommendationsPage {
  constructor(private loadingController: LoadingController) { }

  async presentLoading(event: any) {
    if (event.detail.checked) {
      const loading = await this.loadingController.create({
        message: 'Agregando',
        duration: 400,
        spinner: 'lines-sharp',
      });

      await loading.present();


      const { role, data } = await loading.onDidDismiss();
      console.log('Loading dismissed!');
    }
  }
}
