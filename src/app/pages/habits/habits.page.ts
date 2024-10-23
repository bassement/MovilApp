import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-habits',
  templateUrl: './habits.page.html',
  styleUrls: ['./habits.page.scss'],
})
export class HabitsPage {
  selectedHabit: string = ''; // Variable para almacenar el hábito seleccionado

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
            this.waterProgress += 10; // Incrementa el progreso del agua
          },
        },
        {
          text: 'Sueño',
          icon: 'moon',
          handler: () => {
            this.selectedHabit = 'sleep';
            this.sleepProgress += 1; // Incrementa el progreso del sueño en horas
          },
        },
        {
          text: 'Ejercicio',
          icon: 'barbell',
          handler: () => {
            this.selectedHabit = 'exercise';
            this.exerciseProgress += 1; // Incrementa el progreso del ejercicio en horas
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
}
