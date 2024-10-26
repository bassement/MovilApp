import { Component, inject } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-habits',
  templateUrl: './habits.page.html',
  styleUrls: ['./habits.page.scss'],
})
export class HabitsPage {

  
  selectedHabit: string = '';
  waterProgress: number = 0;
  sleepProgress: number = 0;
  exerciseProgress: number = 0;

 

  constructor(private actionSheetCtrl: ActionSheetController) { }

  

  async openOptions() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Selecciona una opción',
      buttons: [
        {
          text: 'Agua',
          icon: 'water',
          handler: () => {
            this.selectedHabit = 'water';
            this.waterProgress = Math.min(this.waterProgress + 10, 100);
          },
        },
        {
          text: 'Sueño',
          icon: 'moon',
          handler: () => {
            this.selectedHabit = 'sleep';
            this.sleepProgress = Math.min(this.sleepProgress + 1, 8); // Máximo 8 horas
          },
        },
        {
          text: 'Ejercicio',
          icon: 'barbell',
          handler: () => {
            this.selectedHabit = 'exercise';
            this.exerciseProgress = Math.min(this.exerciseProgress + 1, 3); // Máximo 3 horas
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
        },
      ],
    });
    await actionSheet.present();
  }

  getProgressOffset(): string {
    let progress = 0;
    if (this.selectedHabit === 'water') {
      progress = this.waterProgress;
    } else if (this.selectedHabit === 'sleep') {
      progress = (this.sleepProgress / 8) * 100; // Asumiendo 8 horas de sueño como el 100%
    } else if (this.selectedHabit === 'exercise') {
      progress = (this.exerciseProgress / 3) * 100; // Asumiendo 3 horas de ejercicio como el 100%
    }

    const maxDashArray = 440; // Largo máximo del círculo
    return `${maxDashArray - (progress / 100) * maxDashArray}`;
  }
}
