import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { HabitService } from 'src/app/services/habit.service';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.page.html',
  styleUrls: ['./recommendations.page.scss'],
})
export class RecommendationsPage {
  constructor(
    private loadingController: LoadingController,
    private habitService: HabitService
  ) { }

  async presentLoading(event: any) {
    if (event.detail.checked) {
      const loading = await this.loadingController.create({
        message: 'Agregando',
        duration: 500,
        spinner: 'lines-sharp',
      });

      await loading.present();
    }
  }

  onHabitChange(habit: string, event: any) {
    if (event.detail.checked) {
      this.habitService.addHabit(habit);
      this.presentLoading(event);
    } else {
      this.habitService.removeHabit(habit);
    }
  }
}
